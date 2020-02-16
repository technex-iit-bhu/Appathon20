package com.example.messmanager;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class AttendanceActivity extends AppCompatActivity {

    private Button get_attendance;
    private EditText roll_no,pin;
    DatabaseReference mDatabaseRef;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_attendance);

        roll_no=findViewById(R.id.edittext_roll_no);
        pin=findViewById(R.id.editetxt_pin);
        get_attendance=findViewById(R.id.get_attendance_button);

        get_attendance.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String roll_number=roll_no.getText().toString();
                String pin_no=pin.getText().toString();
                if(!roll_number.isEmpty()||!pin_no.isEmpty()) {

                    mDatabaseRef = FirebaseDatabase.getInstance().getReference("Student");
                    mDatabaseRef.child(roll_number).addListenerForSingleValueEvent(new ValueEventListener() {
                        @Override
                        public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                            String pinFirebase = dataSnapshot.child("pin").getValue(String.class);
                            Log.d("pin1234",pinFirebase);
                        }

                        @Override
                        public void onCancelled(@NonNull DatabaseError databaseError) {

                        }
                    });
                }
                else {
                    Toast.makeText(getApplicationContext(),"Please Enter Roll number correctly",Toast.LENGTH_SHORT);
                }



            }
        });

    }
}
