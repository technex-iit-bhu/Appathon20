package com.example.messmanager;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class Feedback_Adapter extends RecyclerView.Adapter<Feedback_Adapter.ViewHolder> {

    private final List<feedback_class> feedback_classes;

    public Feedback_Adapter(List<feedback_class> feedback_classes) {
        this.feedback_classes = feedback_classes;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.feedback_student, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        feedback_class uploadCurrent = feedback_classes.get(position);
        holder.email.setText(uploadCurrent.getEmail());
        holder.name.setText(uploadCurrent.getName());
        holder.description.setText(uploadCurrent.getDescription());
        holder.feedback_date.setText(uploadCurrent.getFeedback_date());
        holder.category.setText(uploadCurrent.getCategory());
        holder.userReviewRating.setRating(uploadCurrent.getRating());


    }

    @Override
    public int getItemCount() {
        return feedback_classes.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder{
        public TextView category,description,email,feedback_date,name   ;
        public me.zhanghai.android.materialratingbar.MaterialRatingBar userReviewRating;


        public ViewHolder(View itemView) {
            super(itemView);

            category=itemView.findViewById(R.id.student_review_category);
            description=itemView.findViewById(R.id.student_review_description);
            feedback_date=itemView.findViewById(R.id.student_review_date);
            userReviewRating=itemView.findViewById(R.id.student_review_rating);
            name=itemView.findViewById(R.id.student_review_name);
            email=itemView.findViewById(R.id.student_review_emailid);

        }
    }
}
