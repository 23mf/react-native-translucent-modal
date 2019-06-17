/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.mf.translucentmodal;


import android.content.DialogInterface;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.modal.ReactModalHostView;

import java.util.Map;

/**
 * View manager for {@link TranslucentModalHostView} components.
 */
@ReactModule(name = TranslucentReactModalHostManager.REACT_CLASS)
public class TranslucentReactModalHostManager extends ViewGroupManager<TranslucentModalHostView> {

  protected static final String REACT_CLASS = "RCTTranslucentModalHostView";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected TranslucentModalHostView createViewInstance(ThemedReactContext reactContext) {
    return new TranslucentModalHostView(reactContext);
  }

  @Override
  public LayoutShadowNode createShadowNodeInstance() {
    return new TranslucentModalHostShadowNode();
  }

  @Override
  public Class<? extends LayoutShadowNode> getShadowNodeClass() {
    return TranslucentModalHostShadowNode.class;
  }

  @Override
  public void onDropViewInstance(TranslucentModalHostView view) {
    super.onDropViewInstance(view);
    view.onDropInstance();
  }

  @ReactProp(name = "animationType")
  public void setAnimationType(TranslucentModalHostView view, String animationType) {
    view.setAnimationType(animationType);
  }

  @ReactProp(name = "transparent")
  public void setTransparent(TranslucentModalHostView view, boolean transparent) {
    view.setTransparent(transparent);
  }

  @ReactProp(name = "hardwareAccelerated")
  public void setHardwareAccelerated(TranslucentModalHostView view, boolean hardwareAccelerated) {
    view.setHardwareAccelerated(hardwareAccelerated);
  }

  @Override
  protected void addEventEmitters(
      ThemedReactContext reactContext,
      final TranslucentModalHostView view) {
    final EventDispatcher dispatcher =
      reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher();
    view.setOnRequestCloseListener(new ReactModalHostView.OnRequestCloseListener() {
      @Override
      public void onRequestClose(DialogInterface dialog) {
        dispatcher.dispatchEvent(new TranslucentRequestCloseEvent(view.getId()));
      }
    });
    view.setOnShowListener(new DialogInterface.OnShowListener() {
      @Override
      public void onShow(DialogInterface dialog) {
         dispatcher.dispatchEvent(new TranslucentShowEvent(view.getId()));
      }
    });
  }

  @Override
  public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
    return MapBuilder.<String, Object>builder()
      .put(TranslucentRequestCloseEvent.EVENT_NAME, MapBuilder.of("registrationName", "onRequestClose"))
      .put(TranslucentShowEvent.EVENT_NAME, MapBuilder.of("registrationName", "onShow"))
      .build();
  }

  @Override
  protected void onAfterUpdateTransaction(TranslucentModalHostView view) {
    super.onAfterUpdateTransaction(view);
    view.showOrUpdate();
  }
}
