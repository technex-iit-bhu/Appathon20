package com.example.messmanager;

public class feedback_class {

    private String category,description,email,feedback_date,name;
    private float rating;

    public feedback_class() {
    }

    public feedback_class(String category, String description, String email, String feedback_date, String name, float rating) {
        this.category = category;
        this.description = description;
        this.email = email;
        this.feedback_date = feedback_date;
        this.name = name;
        this.rating = rating;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFeedback_date() {
        return feedback_date;
    }

    public void setFeedback_date(String feedback_date) {
        this.feedback_date = feedback_date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }
}
