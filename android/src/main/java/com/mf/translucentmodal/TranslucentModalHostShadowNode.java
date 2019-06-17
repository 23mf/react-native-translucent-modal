/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.mf.translucentmodal;

import android.graphics.Point;

import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ReactShadowNodeImpl;

/**
 * We implement the Modal by using an Android Dialog. That will fill the entire window of the
 * application.  To get layout to work properly, we need to layout all the elements within the
 * Modal's inner content view as if they can fill the entire window.  To do that, we need to
 * explicitly set the styleWidth and styleHeight on the LayoutShadowNode of the child of this node
 * to be the window size.  This will then cause the children of the Modal to layout as if they can
 * fill the window.
 */
class TranslucentModalHostShadowNode extends LayoutShadowNode {

  public TranslucentModalHostShadowNode() {}

  private TranslucentModalHostShadowNode(TranslucentModalHostShadowNode node) {
    super(node);
  }

  @Override
  public TranslucentModalHostShadowNode copy() {
    return new TranslucentModalHostShadowNode(this);
  }

  /**
   * We need to set the styleWidth and styleHeight of the one child (represented by the <View/>
   * within the <RCTModalHostView/> in Modal.js. This needs to fill the entire window.
   */
  @Override
  public void addChildAt(ReactShadowNodeImpl child, int i) {
    super.addChildAt(child, i);
    Point modalSize = TranslucentModalHostHelper.getModalHostSize(getThemedContext());
    child.setStyleWidth(modalSize.x);
    child.setStyleHeight(modalSize.y);
  }
}
