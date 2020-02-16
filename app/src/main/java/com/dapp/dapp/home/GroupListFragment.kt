package com.dapp.dapp.home

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.dapp.dapp.EditHash
import com.dapp.dapp.MainApplication
import com.dapp.dapp.R
import com.dapp.dapp.blockHelper.Block
import com.dapp.dapp.helper.PrefManager
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener

class GroupListFragment : Fragment() {

    lateinit var textView: TextView
    lateinit var button:Button
    lateinit var ll: LinearLayout
    companion object {
        fun newInstance() = GroupListFragment()
    }
    private lateinit var viewModel: GroupListViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        PrefManager.saveBoolean("first_time",false)
        val view: View = inflater.inflate(R.layout.group_list_fragment, container, false)
        textView = view.findViewById(R.id.hello)
        textView.setText(PrefManager.getString("hash", "first"))
        textView.setOnClickListener {
            val intent = Intent(context, EditHash::class.java)
            startActivity(intent)
        }
        ll = view.findViewById(R.id.ll)
        setView()
        button=view.findViewById(R.id.yo)
        button.setOnClickListener{
            viewModel.sendYo()
        }
        FirebaseDatabase.getInstance().getReference(PrefManager.getString("phone", "not"))
            .addValueEventListener(object : ValueEventListener {
                override fun onCancelled(p0: DatabaseError) {

                }

                override fun onDataChange(p0: DataSnapshot) {
                    if (!MainApplication.currentHash.value.toString().equals(p0.value.toString())) {
                        Toast.makeText(
                            MainApplication.instance,
                            "Someone just Yoed you",
                            Toast.LENGTH_LONG
                        ).show()
                        MainApplication.blockChain.addBlock(
                            Block(
                                MainApplication.currentHash.value.toString(),
                                p0.value.toString(),
                                "Yo!",
                                "Someone"
                            )
                        )
                        MainApplication.currentHash.value = p0.value.toString()
                        PrefManager.saveString("hash", p0.value.toString())
                    }
                }

            })
        return view
    }
    fun setView(){
        Toast.makeText(context,"Cicked",Toast.LENGTH_LONG).show()
        ll.removeAllViews()
        Log.d("hello"+MainApplication.blockChain.blockChain.size,"world")
        for (elements in MainApplication.blockChain.blockChain){
            ll.addView(setUpLinearLayout(elements.previousHash,elements.message,elements.from,elements.currentHash.toString()))
        }
    }

    private fun setUpLinearLayout(
        previousStr: String,
        messageStr: String,
        fromStr: String,
        nextStr: String
    ): View {
        val layoutInflater = LayoutInflater.from(context).inflate(R.layout.item_block, null)
        val previous: TextView = layoutInflater.findViewById(R.id.preHash)
        val message: TextView = layoutInflater.findViewById(R.id.mesage)
        val from: TextView = layoutInflater.findViewById(R.id.from)
        val next: TextView = layoutInflater.findViewById(R.id.nextHash)
        previous.setText(" Previous hash : $previousStr")
        next.setText(" Current hash : $nextStr")
        message.setText(" Message : $messageStr")
        from.setText(" From : $fromStr")

        return layoutInflater


    }


    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProviders.of(this).get(GroupListViewModel::class.java)
        MainApplication.currentHash.observe(this, Observer {
            PrefManager.saveString("hash",it)
            textView.setText(it + " click to change")
            setView()
        })
    }


}
