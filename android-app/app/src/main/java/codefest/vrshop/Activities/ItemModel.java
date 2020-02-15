package codefest.vrshop.Activities;

import android.net.Uri;

import java.net.URL;

public class ItemModel {

    private String description;
    private String price,name;
    private String url;
    private int id;

    public ItemModel (String url,String name,String price,String description){

        this.description=description;
        this.price=price;
        this.url=url;
        this.name=name;
    }

    public String getprice() {
        return price;
    }

    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String getdescription() {
        return description;
    }

    public Uri geturl() {
        return Uri.parse(url);
    }

    public void seturl(String url) {
        this.url = url;
    }

    public void setprice(String price) {
        this.price = price;
    }

    public void setdescription(String description) {
        this.description = description;
    }
}
