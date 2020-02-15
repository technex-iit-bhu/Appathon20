package codefest.vrshop.Activities;

import android.Manifest;
import android.app.Activity;
import android.app.DownloadManager;
import android.content.Context;
import android.app.SearchManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityCompat;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.SearchView;
import android.support.v4.content.FileProvider;
import android.util.Log;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import com.squareup.okhttp.Callback;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.io.File;
import java.util.Objects;

import codefest.vrshop.Activities.ItemModel;
import codefest.vrshop.Activities.ItemsRecyleViewAdpter;
import codefest.vrshop.R;
import io.smooch.ui.ConversationActivity;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener ,ItemsRecyleViewAdpter.ContactsAdapterListener{

    private  final int MY_PERMISSIONS_REQUEST_CALL_PHONE = 1098;
    private  final int MY_PERMISSIONS_WRITE_SD_CARD = 1099;
    private static int PICK_IMAGE_NAME= 1234;
    private RecyclerView mItemsRecycleView;
    private ItemsRecyleViewAdpter itemsRecycleViewAdpter;
    private ArrayList<ItemModel> mItemsArrayList=new ArrayList<>();
    private SearchView searchView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
//                        .setAction("Action", null).show();
                ConversationActivity.show(getApplicationContext());

            }
        });

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
        implementRecycleView();

        addItems();
    }
    private void addItems() {
//        ItemModel quoteDetails=new ItemModel("http://i.imgur.com/DvpvklR.png","Item name ",
//                "500",getResources().getString(R.string.descript));
//        mItemsArrayList.add(quoteDetails);
//
//        mItemsArrayList.add(quoteDetails);
//        ItemModel quoteDetail=new ItemModel("http://i.imgur.com/DvpvklR.png","Tawrun ",
//                "500",getResources().getString(R.string.descript));
//        mItemsArrayList.add(quoteDetail);
//        mItemsArrayList.add(quoteDetail);
//        mItemsArrayList.add(quoteDetail);
//        ItemModel quoteDetai=new ItemModel("http://i.imgur.com/DvpvklR.png","Akshay ",
//                "500",getResources().getString(R.string.descript));
//
//        mItemsArrayList.add(quoteDetai);
//        mItemsArrayList.add(quoteDetai);
//        mItemsArrayList.add(quoteDetai);

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("https://vrshop-codefest18.herokuapp.com/listAllItems")
                .get()
                .addHeader("Cache-Control", "no-cache")
                .addHeader("Postman-Token", "c8557afd-01cf-45d0-910e-b02fff791380")
                .build();

            client.newCall(request).enqueue(new Callback() {
                @Override
                public void onFailure(Request request, IOException e) {

                }

                @Override
                public void onResponse(Response response) throws IOException {
                    String outer = response.body().string();
                    JsonParser parser = new JsonParser();
                    JsonObject obj = (JsonObject) parser.parse(outer);
                    JsonArray array = obj.getAsJsonArray("response");

                    Moshi moshi = new Moshi.Builder().build();
                    JsonAdapter<ItemModel> adapter = moshi.adapter(ItemModel.class);

                    for (JsonElement object:array)
                        mItemsArrayList.add(adapter.fromJson(object.toString()));

                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            itemsRecycleViewAdpter.notifyDataSetChanged();
                        }
                    });

                }

            });


    }


    private void implementRecycleView() {
        mItemsRecycleView=(RecyclerView)findViewById(R.id.items_recycleview);
        mItemsRecycleView.setHasFixedSize(true);
        // use a linear layout manager
        GridLayoutManager mLayoutManager = new GridLayoutManager(this,1);
        mItemsRecycleView.setLayoutManager(mLayoutManager);

        itemsRecycleViewAdpter = new ItemsRecyleViewAdpter(mItemsArrayList,this);
        mItemsRecycleView.setAdapter(itemsRecycleViewAdpter);

    }

//    private void onCardClick(View child, int position) {
//        Intent intent=new Intent(getBaseContext(),CompleteQuoteActivity.class);
//        QuoteDetails q=quotesRecycleViewAdpter.getItematPosition(position);
//        intent.putExtra(Constants.COMPLETE_DETAILS,q);
//        startActivity(intent);
//    }


    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        }
        if (!searchView.isIconified()) {
            searchView.setIconified(true);
            return;
        }
            super.onBackPressed();

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);

        // Associate searchable configuration with the SearchView
        SearchManager searchManager = (SearchManager) getSystemService(Context.SEARCH_SERVICE);
        searchView = (SearchView) menu.findItem(R.id.action_search)
                .getActionView();
        searchView.setSearchableInfo(searchManager
                .getSearchableInfo(getComponentName()));
        searchView.setMaxWidth(Integer.MAX_VALUE);

        // listening to search query text change
        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                // filter recycler view when query submitted
                itemsRecycleViewAdpter.getFilter().filter(query);
                return false;
            }

            @Override
            public boolean onQueryTextChange(String query) {
                // filter recycler view when text is changed
                itemsRecycleViewAdpter.getFilter().filter(query);
                return false;
            }
        });

        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        } if (id==R.id.camera){
            Intent intent=new Intent(getBaseContext(),CameraClassifier.class);
            startActivityForResult(intent,PICK_IMAGE_NAME);
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        switch (requestCode) {
            case MY_PERMISSIONS_REQUEST_CALL_PHONE: {
                if (permissions[0].equalsIgnoreCase(Manifest.permission.CALL_PHONE)
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    // Permission was granted.
                } else
                    Toast.makeText(this, "Permissions Needed", Toast.LENGTH_LONG).show();

                return;
            }
            case MY_PERMISSIONS_WRITE_SD_CARD : {
                if(grantResults[0]== PackageManager.PERMISSION_GRANTED)
                    downloadAndShare();
                else
                    Toast.makeText(this, "Permissions Needed", Toast.LENGTH_LONG).show();
            }
        }
    }


    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_camera) {
            // Handle the camera action
        } else if (id == R.id.nav_gallery) {
            Intent mapIntent = new Intent(this, MapsActivity.class);
            startActivity(mapIntent);

        } else if (id == R.id.nav_slideshow) {

        } else if (id == R.id.nav_manage) {

        } else if ((id == R.id.nav_share) && haveStoragePermission())
            downloadAndShare();
        else if (id == R.id.nav_call) {

            Intent callIntent = new Intent(Intent.ACTION_CALL);
            String phoneNumber = String.format("tel: 9161012579");

            callIntent.setData(Uri.parse(phoneNumber));

            if (ActivityCompat.checkSelfPermission(getBaseContext(),
                    Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions( MainActivity.this,
                        new String[]{Manifest.permission.CALL_PHONE},
                        MY_PERMISSIONS_REQUEST_CALL_PHONE);
            }else
                startActivity(callIntent); Log.d("CodeFest","Calling");


        } else if (id == R.id.nav_send) {
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    @Override
    public void onActivityResult(int requestcode,int resultcode,Intent data){
        if(requestcode==PICK_IMAGE_NAME){
            if(resultcode== Activity.RESULT_OK){
                String a=data.getStringExtra("1234").toString().trim();
                if(a!=null){
                itemsRecycleViewAdpter.getFilter().filter(a);}
            }
        }
    }

    @Override
    public void onContactSelected(ItemModel Item) {
        Log.d("Codefest","CardClicked");
        new PayUMoney(Item.getprice(),getBaseContext(),MainActivity.this).launchPayUMoneyFlow();
    }

    public  boolean haveStoragePermission() {
        if (Build.VERSION.SDK_INT >= 23) {
            if (checkSelfPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)
                    == PackageManager.PERMISSION_GRANTED) {
                Log.e("Permission error","You have permission");
                return true;
            } else {
                Log.e("Permission error","You have asked for permission");
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, 1);
                return false;
            }
        }
        else { //you dont need to worry about these stuff below api level 23
            Log.e("Permission error","You already have the permission");
            return true;
        }
    }

    public void downloadAndShare(){
        // Share App's APK via bluetooth
        try {

            // download the apk
            // save it in Downloads folder
            DownloadManager.Request request1 = new DownloadManager.Request(Uri.parse("https://www.dropbox.com/s/u8lncljbzvymhxm/New%20LL%20Acknowledgement.pdf?dl=1"));
            request1.setDescription("");   //appears the same in Notification bar while downloading
            request1.setTitle("base.apk");
            request1.setVisibleInDownloadsUi(false);
            request1.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS,"base.apk");
            DownloadManager manager1 = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
            Objects.requireNonNull(manager1).enqueue(request1);

            // finally share it
            if (DownloadManager.STATUS_SUCCESSFUL == 8) {
                Intent share = new Intent();
                share.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                share.setAction(Intent.ACTION_SEND);
                share.setType("application/vnd.android.package-archive");
                share.putExtra(Intent.EXTRA_STREAM, FileProvider.getUriForFile(this,"codefest.vrshop.provider",new File(Environment.DIRECTORY_DOWNLOADS, "base.apk")));
                share.setPackage("com.android.bluetooth");
                startActivity(share);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
