package com.dapp.dapp;

import android.app.Application;

import androidx.lifecycle.MutableLiveData;

import com.dapp.dapp.blockHelper.BlockChain;
import com.dapp.dapp.helper.PrefManager;

public class MainApplication extends Application {
    public static Application instance;
    public static MutableLiveData<String> currentHash;
    public static BlockChain blockChain;
    public static Application getInstance(){
        if(instance!=null){
            return instance;
        }
        else{
            return new MainApplication();
        }
    }

    @Override
    public void onCreate() {
        instance=this;
        currentHash=new MutableLiveData<>();
        currentHash.setValue(PrefManager.INSTANCE.getString("hash","false"));
        blockChain=new BlockChain();
        super.onCreate();

    }
}
