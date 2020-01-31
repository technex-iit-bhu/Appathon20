package com.dapp.dapp.helper

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.lifecycle.MutableLiveData
import com.dapp.dapp.home.GroupListFragment

object TransactionHelper {

    fun startFragment(id: Int, fragmentManager: FragmentManager, fragment: Fragment) {
        fragmentManager.beginTransaction()
            .replace(id,fragment)
            .addToBackStack(null)
            .commit()

    }
}