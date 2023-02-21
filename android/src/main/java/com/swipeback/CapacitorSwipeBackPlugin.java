package com.swipeback;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorSwipeBack")
public class CapacitorSwipeBackPlugin extends Plugin {

    @PluginMethod
    public void enable(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("status", "enable");
        call.resolve(ret);
    }

    @PluginMethod
    public void disable(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("status", "disable");
        call.resolve(ret);
    }
}
