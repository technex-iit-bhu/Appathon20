package com.example.messmanager;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.animation.AlphaAnimation;
import android.widget.ImageView;

import com.example.messmanager.utils.Constants;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class MainActivity extends AppCompatActivity {

    SharedPreferences sharedPreferences;
    private String is_active;
    public String mess_no;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ImageView splash_screen=findViewById(R.id.imageView);
        AlphaAnimation animation1 = new AlphaAnimation(0.0f, 1.0f);
        animation1.setDuration(1500);
        splash_screen.setAlpha(1f);
        splash_screen.startAnimation(animation1);

        new Handler().postDelayed(new Runnable() {

            /*
             * Showing splash screen with a timer. This will be useful when you
             * want to show case your app logo / company
             */

            @Override
            public void run() {

                //TODO: check if already login from local database. If data present go to Dashboard Else go to LoginActivity
                sharedPreferences = getSharedPreferences(Constants.MY_PREFERENCE, Context.MODE_PRIVATE);
                String username = sharedPreferences.getString(Constants.username,"");
                if(username.equals("")) {

                    // This method will be executed once the timer is over
                    // Start your app main activity
                    Intent i = new Intent(MainActivity.this, LoginActivity.class);
                    startActivity(i);

                    // close this activity
                    finish();
                }
                else{
                    Intent i=new Intent(MainActivity.this,Dashboard.class);
                    Log.i("here 6","in");
                    i.putExtra("Mess",mess_no);
                    startActivity(i);
                    finish();
                }





                }

        }, 1500);


    }
}
