package codefest.vrshop;

import android.app.Application;

import io.smooch.core.Settings;
import io.smooch.core.Smooch;
import io.smooch.core.SmoochCallback;

public class MyApplication extends Application {
    String APP_TOKEN = "5b8b7eb621973c0022785052";
    @Override
    public void onCreate() {
        super.onCreate();
        // Initialize Smooch here
        Smooch.init(this);
        Smooch.init(this, new Settings(APP_TOKEN), new SmoochCallback() {
            @Override
            public void run(Response response) {
                // Your code after init is complete
            }
        });
    }
}
