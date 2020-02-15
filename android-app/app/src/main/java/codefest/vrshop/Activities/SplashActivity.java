package codefest.vrshop.Activities;

import android.content.Intent;
import android.os.Handler;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.firebase.ui.auth.AuthUI;
import com.firebase.ui.auth.IdpResponse;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import codefest.vrshop.R;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import static codefest.vrshop.Utils.Constants.SPLASH_TIMEOUT;

public class SplashActivity extends AppCompatActivity {

    private int LOGIN_INTENT = 101;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        new Handler().postDelayed(new Runnable() {

            //  Showing splash screen with a timer
            @Override
            public void run() {
                // check is user is logged in
                // If not, then login by Firebase Auth UI
                if (FirebaseAuth.getInstance().getCurrentUser() == null) {

                    // Choose authentication providers
                    List<AuthUI.IdpConfig> providers = Arrays.asList(
                            new AuthUI.IdpConfig.EmailBuilder().build());

                    // Create and launch sign-in intent
                    startActivityForResult(
                            AuthUI.getInstance()
                                    .createSignInIntentBuilder()
                                    .setAvailableProviders(providers)
                                    .build(),
                            LOGIN_INTENT);

                }
                else
                    moveOn();
            }
        }, SPLASH_TIMEOUT);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == LOGIN_INTENT) {
            IdpResponse response = IdpResponse.fromResultIntent(data);

            if (resultCode == RESULT_OK) {
                // Successfully signed in
                // Send login data to server

                OkHttpClient client = new OkHttpClient();

                MediaType mediaType = MediaType.parse("application/json");
                RequestBody body = RequestBody.create(mediaType, "{\n\t\"name\":\""+
                        FirebaseAuth.getInstance().getCurrentUser().getDisplayName() +"\",\n\t\"uuid\":\""+
                        FirebaseAuth.getInstance().getCurrentUser().getUid() +"\"\n}");
                Request request = new Request.Builder()
                        .url("https://vrshop-codefest18.herokuapp.com/createUser")
                        .post(body)
                        .addHeader("Content-Type", "application/json")
                        .build();

                client.newCall(request).enqueue(new Callback() {
                    @Override
                    public void onFailure(Call call, IOException e) {
                        View parentLayout = findViewById(R.id.splash_content);
                        Snackbar.make(parentLayout, e.getMessage(), Snackbar.LENGTH_LONG)
                                .show();
                    }

                    @Override
                    public void onResponse(Call call, Response response) throws IOException {
                        Log.d("SplashActivity","User data uploaded");
                        moveOn();
                    }
                });

            } else {
                // Sign in failed. If response is null the user canceled the
                // sign-in flow using the back button. Otherwise check
                // response.getError().getErrorCode() and handle the error.
                View parentLayout = findViewById(R.id.splash_content);
                if (response != null)
                    Snackbar.make(parentLayout, response.getError().getMessage(), Snackbar.LENGTH_LONG)
                            .show();
            }
        }
    }

    public void moveOn(){
        Intent intent = new Intent(SplashActivity.this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
