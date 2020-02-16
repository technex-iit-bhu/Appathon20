package com.dapp.dapp

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import com.dapp.dapp.blockHelper.Block
import com.dapp.dapp.helper.PrefManager
import com.google.firebase.database.FirebaseDatabase

class EditHash : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_edit_hash)
        val editText:EditText=findViewById(R.id.hash)
        val submit:Button=findViewById(R.id.submit)
        submit.setOnClickListener {
            if (editText.text.toString().trim().isNotEmpty()) {
                MainApplication.blockChain.addBlock(
                    Block(
                        MainApplication.currentHash.value.toString(),
                        editText.text.toString(),
                        "Yo!",
                        "Someone"
                    )
                )
            }
            MainApplication.currentHash.value=editText.text.toString()
            FirebaseDatabase.getInstance()
                .getReference(PrefManager.getString("phone","somevalue")).setValue(editText.text.toString())
            finish()
        }
    }
}
