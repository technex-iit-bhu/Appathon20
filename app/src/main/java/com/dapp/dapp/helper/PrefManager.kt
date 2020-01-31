package com.dapp.dapp.helper

import android.content.Context
import android.preference.PreferenceManager
import com.dapp.dapp.MainApplication
import com.dapp.dapp.blockHelper.Block
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import java.lang.reflect.Type


object PrefManager {
    private val preferences by lazy { PreferenceManager.getDefaultSharedPreferences(context) }

    private val context: Context
        get() = MainApplication.instance.applicationContext

    fun saveBoolean(prefKey: String, prefValue: Boolean) {
        preferences.edit().putBoolean(prefKey, prefValue).apply()
    }

    fun saveString(prefKey: String, prefValue: String) {
        preferences.edit().putString(prefKey, prefValue).apply()
    }

    fun getString(prefKey: String, prefValue: String): String {
        return preferences.getString(prefKey, prefValue) as String
    }

    fun getBoolean(prefKey: String, defaultValue: Boolean): Boolean{
       return preferences.getBoolean(prefKey,defaultValue)
    }

    fun saveData(list: List<Block>) {
        val editor = preferences.edit()
        val gson = Gson()
        val json: String = gson.toJson(list)
        editor.putString("block_chain", json)
        editor.apply()
    }

    fun loadData(): ArrayList<Block> {
        var blockChain = ArrayList<Block>()
        val gson = Gson()
        val json = preferences.getString("block_chain", gson.toJson(blockChain))
        val type: Type = object : TypeToken<List<Block?>?>() {}.getType()
        blockChain = gson.fromJson(json, type)
        if (blockChain == null) {
            blockChain = ArrayList()
        }
        return blockChain
    }

}