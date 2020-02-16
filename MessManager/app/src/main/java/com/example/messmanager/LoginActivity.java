package com.example.messmanager;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.example.messmanager.utils.Constants;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class LoginActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    EditText usernametext;
    EditText passwordText;
    Button loginButton;
    Spinner mess_number;
    SharedPreferences sharedPreferences;
    DatabaseReference mDatabaseRef;
    String mess_no;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        usernametext=findViewById(R.id.edittext_username);
        passwordText=findViewById(R.id.edittext_password);
        loginButton=findViewById(R.id.login_button);
        mess_number=findViewById(R.id.input_mess);

        /**
         * Putting All the Mess_number(inside of totalmess) from Firebase in Mess Spinner of login page
         */

        mDatabaseRef= FirebaseDatabase.getInstance().getReference("totalmess");
        final ArrayAdapter<String> autoComplete = new ArrayAdapter<>(this,android.R.layout.simple_spinner_item);
        mDatabaseRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for(DataSnapshot postSnapshot:dataSnapshot.getChildren())
                {
                    String Mess = postSnapshot.getKey();
                    //String Mess = postSnapshot.child("Mess").getValue(String.class);
                    autoComplete.add(Mess);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });
        autoComplete.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        mess_number.setAdapter(autoComplete);


        loginButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                login();
            }
        });

      /*  *//**
         * To check that Mess is Is_Active or not.If Is_Active = 1,mess is running,goes to dashboard activity.
         * If Is_Active = 0,mess is not running,it will ..
         *//*

        DatabaseReference mdatabase = FirebaseDatabase.getInstance().getReference("Mess");
        mdatabase.child(mess_no).child("Is_Active").addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {

                String is_active = dataSnapshot.getValue(String.class);
                Log.d("is_active",is_active);

            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                Log.w("activated or not", "loadPost:onCancelled", databaseError.toException());
            }
        });*/

    }

    public void login(){
        mess_no=mess_number.getSelectedItem().toString();
        final String username = usernametext.getText().toString();
        final String password = passwordText.getText().toString();
        DatabaseReference mLoginReference = FirebaseDatabase.getInstance().getReference("Mess");
        mLoginReference.child(mess_no).addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {

                String user=dataSnapshot.child("Username").getValue(String.class);
                String pwd=dataSnapshot.child("Password").getValue(String.class);
                String isactive=dataSnapshot.child("Is_Active").getValue(String.class);

                if(user.equals(username) && pwd.equals(password)){
                    Toast.makeText(LoginActivity.this, "Login Successful", Toast.LENGTH_SHORT).show();
                    sharedPreferences = getSharedPreferences(Constants.MY_PREFERENCE, Context.MODE_PRIVATE);
                    SharedPreferences.Editor editor = sharedPreferences.edit();
                    editor.putString(Constants.username, username);
                    editor.putString(Constants.password,password);
                    editor.putString(Constants.isactive,isactive);
                    editor.putString(Constants.mess,mess_no);
                    editor.apply();

                    Intent intent = new Intent(LoginActivity.this,Dashboard.class);
                    startActivity(intent);
                    finish();

                }
                else{
                    Toast.makeText(LoginActivity.this, "Incorrect Credentials", Toast.LENGTH_SHORT).show();
                }

            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                Toast.makeText(LoginActivity.this, "Check Internet Connection", Toast.LENGTH_SHORT).show();
                Log.w("registered or not", "loadPost:onCancelled", databaseError.toException());
            }
        });
    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        // On selecting a spinner item
        String item = parent.getItemAtPosition(position).toString();

        // Showing selected spinner item
        Toast.makeText(parent.getContext(), "Selected: " + item, Toast.LENGTH_LONG).show();
    }
    public void onNothingSelected(AdapterView<?> arg0) {
        // TODO Auto-generated method stub
    }
}
