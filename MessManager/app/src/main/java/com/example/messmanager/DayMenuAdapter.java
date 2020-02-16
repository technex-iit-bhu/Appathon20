package com.example.messmanager;

import android.app.Dialog;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.List;

public class DayMenuAdapter extends RecyclerView.Adapter<DayMenuAdapter.ViewHolder> {

    private List<DayMenuCard> mUploads;
    Dialog myDialog;
    Context mContext;
    private View popupInputDialogView;
    private EditText editmenu;
    private Button save;
    private DatabaseReference mDatabaseRef;


    public DayMenuAdapter(List<DayMenuCard> mUploads,Context mContext) {
        this.mUploads = mUploads;
        this.mContext = mContext;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.menu_daywise, parent, false);
        return new ViewHolder(v);


    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
       final DayMenuCard uploadCurrent = mUploads.get(position);

        holder.day.setText(uploadCurrent.getDay());
        final String day = uploadCurrent.getDay();
        holder.breakfast.setText(uploadCurrent.getBreakfast());
        holder.lunch.setText(uploadCurrent.getLunch());
        holder.dinner.setText(uploadCurrent.getDinner());
        holder.breakfast_card.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(mContext);
                alertDialogBuilder.setTitle("Edit Breakfast");

                LayoutInflater layoutInflater = LayoutInflater.from(mContext);
                popupInputDialogView = layoutInflater.inflate(R.layout.dialog_menucard, null);
                editmenu=popupInputDialogView.findViewById(R.id.textDialog);
                save=popupInputDialogView.findViewById(R.id.acceptButton);
                editmenu.setText(uploadCurrent.getBreakfast());

                // Set the inflated layout view object to the AlertDialog builder.
                alertDialogBuilder.setView(popupInputDialogView);

                // Create AlertDialog and show.
                final AlertDialog alertDialog = alertDialogBuilder.create();
                alertDialog.show();
                save.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        mDatabaseRef = FirebaseDatabase.getInstance().getReference("Mess");
                        mDatabaseRef.child("Mess1").child("board_sheet").child("menu_board").child(day).addListenerForSingleValueEvent(new ValueEventListener() {
                            @Override
                            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                                dataSnapshot.getRef().child("breakfast").setValue(editmenu.getText().toString()).addOnCompleteListener(new OnCompleteListener<Void>() {
                                    @Override
                                    public void onComplete(@NonNull Task<Void> task) {
                                        if(task.isSuccessful())
                                        {
                                            alertDialog.dismiss();
                                            Toast.makeText(mContext,"Succesfully Changed",Toast.LENGTH_SHORT).show();
                                        }
                                    }
                                });
                            }

                            @Override
                            public void onCancelled(@NonNull DatabaseError databaseError) {
                                Toast.makeText(mContext, databaseError.getMessage(), Toast.LENGTH_SHORT).show();

                            }
                        });
                    }
                });
            }
        });holder.lunch_card.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(mContext);
                alertDialogBuilder.setTitle("Edit Lunch");

                LayoutInflater layoutInflater = LayoutInflater.from(mContext);
                popupInputDialogView = layoutInflater.inflate(R.layout.dialog_menucard, null);
                editmenu=popupInputDialogView.findViewById(R.id.textDialog);
                save=popupInputDialogView.findViewById(R.id.acceptButton);
                editmenu.setText(uploadCurrent.getLunch());

                // Set the inflated layout view object to the AlertDialog builder.
                alertDialogBuilder.setView(popupInputDialogView);

                // Create AlertDialog and show.
                final AlertDialog alertDialog = alertDialogBuilder.create();
                alertDialog.show();
                save.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        mDatabaseRef = FirebaseDatabase.getInstance().getReference("Mess");
                        mDatabaseRef.child("Mess1").child("board_sheet").child("menu_board").child(day).addListenerForSingleValueEvent(new ValueEventListener() {
                            @Override
                            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                                dataSnapshot.getRef().child("lunch").setValue(editmenu.getText().toString()).addOnCompleteListener(new OnCompleteListener<Void>() {
                                    @Override
                                    public void onComplete(@NonNull Task<Void> task) {
                                        if(task.isSuccessful())
                                        {
                                            alertDialog.dismiss();
                                            Toast.makeText(mContext,"Succesfully Changed",Toast.LENGTH_SHORT).show();
                                        }
                                    }
                                });
                            }

                            @Override
                            public void onCancelled(@NonNull DatabaseError databaseError) {
                                Toast.makeText(mContext, databaseError.getMessage(), Toast.LENGTH_SHORT).show();

                            }
                        });
                    }
                });
            }
        });holder.dinner_card.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(mContext);
                alertDialogBuilder.setTitle("Edit Dinner");

                LayoutInflater layoutInflater = LayoutInflater.from(mContext);
                popupInputDialogView = layoutInflater.inflate(R.layout.dialog_menucard, null);
                editmenu=popupInputDialogView.findViewById(R.id.textDialog);
                save=popupInputDialogView.findViewById(R.id.acceptButton);
                editmenu.setText(uploadCurrent.getDinner());

                // Set the inflated layout view object to the AlertDialog builder.
                alertDialogBuilder.setView(popupInputDialogView);

                // Create AlertDialog and show.
                final AlertDialog alertDialog = alertDialogBuilder.create();
                alertDialog.show();
                save.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        mDatabaseRef = FirebaseDatabase.getInstance().getReference("Mess");
                        mDatabaseRef.child("Mess1").child("board_sheet").child("menu_board").child(day).addListenerForSingleValueEvent(new ValueEventListener() {
                            @Override
                            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                                dataSnapshot.getRef().child("dinner").setValue(editmenu.getText().toString()).addOnCompleteListener(new OnCompleteListener<Void>() {
                                    @Override
                                    public void onComplete(@NonNull Task<Void> task) {
                                        if(task.isSuccessful())
                                        {
                                            alertDialog.dismiss();
                                            Toast.makeText(mContext,"Succesfully Changed",Toast.LENGTH_SHORT).show();
                                        }
                                    }
                                });
                            }

                            @Override
                            public void onCancelled(@NonNull DatabaseError databaseError) {
                                Toast.makeText(mContext, databaseError.getMessage(), Toast.LENGTH_SHORT).show();

                            }
                        });
                    }
                });
            }
        });
    }


    @Override
    public int getItemCount() {
        return mUploads.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        public TextView day,breakfast,lunch,dinner;
        public CardView lunch_card,dinner_card,breakfast_card;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            day=itemView.findViewById(R.id.menu_day);
            breakfast=itemView.findViewById(R.id.menu_breakfast);
            lunch=itemView.findViewById(R.id.menu_lunch);
            dinner=itemView.findViewById(R.id.menu_dinner);
            lunch_card=itemView.findViewById(R.id.card_lunch);
            dinner_card=itemView.findViewById(R.id.card_dinner);
            breakfast_card=itemView.findViewById(R.id.card_breakfast);
        }
    }
}
