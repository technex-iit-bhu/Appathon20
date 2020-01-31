package com.dapp.dapp.home

import android.net.Uri
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.dapp.dapp.R
import com.dapp.dapp.helper.PrefManager
import com.dapp.dapp.helper.TransactionHelper
import com.dapp.dapp.signUp.SignUp

class GroupListingActivity : AppCompatActivity(){

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_group_listing)
        if(!PrefManager.getBoolean("sign_up",false)) {
            TransactionHelper.startFragment(
                R.id.fragment_container,
                supportFragmentManager,
                SignUp.newInstance()
            )
        }
        else{
            TransactionHelper.startFragment(
                R.id.fragment_container,
                supportFragmentManager,
                GroupListFragment.newInstance()
            )
        }
    }


}
