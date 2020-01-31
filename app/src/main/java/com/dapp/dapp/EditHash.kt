package com.dapp.dapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import com.dapp.dapp.helper.PrefManager
import com.google.firebase.database.FirebaseDatabase

class EditHash : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_edit_hash)
        val editText:EditText=findViewById(R.id.hash)
        val submit:Button=findViewById(R.id.submit)
        submit.setOnClickListener {
            MainApplication.currentHash.value=editText.text.toString()
            FirebaseDatabase.getInstance()
                .getReference(PrefManager.getString("phone","somevalue")).setValue(editText.text.toString())
            finish()
        }
    }
}
