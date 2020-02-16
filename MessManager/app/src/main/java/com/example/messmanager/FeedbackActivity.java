package com.example.messmanager;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.List;

public class FeedbackActivity extends AppCompatActivity {

    private RecyclerView appReviewsRecyclerView;
    private DatabaseReference mDatabaseRef;
    private Feedback_Adapter mAdapter;
    private List<feedback_class> mUploads;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_feedback);

        appReviewsRecyclerView = findViewById(R.id.recycler_feedback);
        mUploads = new ArrayList<>();

        appReviewsRecyclerView.setHasFixedSize(true);
        appReviewsRecyclerView.setLayoutManager(new LinearLayoutManager(this));

        mDatabaseRef = FirebaseDatabase.getInstance().getReference("Mess");

        mDatabaseRef.child("Mess1").child("feedbacks").addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot postSnapshot : dataSnapshot.getChildren()) {
                    feedback_class upload = postSnapshot.getValue(feedback_class.class);
                    // Log.d("upload12",upload.toString());
                    mUploads.add(upload);

                }
                mAdapter = new Feedback_Adapter(mUploads);
                appReviewsRecyclerView.setAdapter(mAdapter);

            }
            @Override
            public void onCancelled(DatabaseError databaseError) {
                Toast.makeText(FeedbackActivity.this, databaseError.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }
}
