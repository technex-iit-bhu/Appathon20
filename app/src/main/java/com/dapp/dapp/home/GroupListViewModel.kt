package com.dapp.dapp.home

import android.widget.Toast
import androidx.lifecycle.ViewModel
import com.dapp.dapp.MainApplication
import com.dapp.dapp.blockHelper.Block
import com.dapp.dapp.helper.PrefManager
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener

class GroupListViewModel : ViewModel() {
    val repository:ListRepository= ListRepository()
    fun sendYo() {
        val block = Block(MainApplication.currentHash.value.toString(), null, "Yo!", PrefManager.getString("phone","me"))
        block.currentHash=block.hashCode().toString()
        repository.sendYo(block)
    }

    fun observeChanges() {

    }
}
