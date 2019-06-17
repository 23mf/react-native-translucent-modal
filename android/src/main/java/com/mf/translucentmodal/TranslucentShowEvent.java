/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.mf.translucentmodal;

import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * {@link Event} for showing a Dialog.
 */
/* package */ class TranslucentShowEvent extends Event<TranslucentShowEvent> {

  public static final String EVENT_NAME = "topShow";

  protected TranslucentShowEvent(int viewTag) {
    super(viewTag);
  }

  @Override
  public String getEventName() {
    return EVENT_NAME;
  }

  @Override
  public void dispatch(RCTEventEmitter rctEventEmitter) {
    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), null);
  }
}
