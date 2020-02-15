package codefest.vrshop.Services;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

import codefest.vrshop.Utils.SharedPrefHelper;

public class FirebaseInstanceService extends FirebaseInstanceIdService {
    @Override
    public void onTokenRefresh() {
        // Get updated InstanceID token.
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        Log.d("FCM Service", "Refreshed token: " + refreshedToken);

        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side, send the
        // Instance ID token to your app server.

        // save to shared prefs
        SharedPrefHelper.setStringPreference(this,SharedPrefHelper.PREF_FCM_TOKEN,refreshedToken);
    }
}
