package com.dapp.dapp.signUp

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.dapp.dapp.R
import com.dapp.dapp.helper.PrefManager
import com.dapp.dapp.helper.TransactionHelper
import com.dapp.dapp.home.GroupListFragment

class SignUp : Fragment() {

    companion object {
        fun newInstance() = SignUp()
    }

    private lateinit var viewModel: SignUpViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.sign_up_fragment, container, false)
        val editText: EditText = view.findViewById(R.id.phone)
        val signUp: Button = view.findViewById(R.id.signUp)
        signUp.setOnClickListener(View.OnClickListener {
            if(!editText.text.toString().trim().isEmpty()) {
                viewModel.signUp(editText.text.toString())
            }
        })
        return view
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProviders.of(this).get(SignUpViewModel::class.java)
        viewModel.response.observe(this, Observer {
            if(PrefManager.getBoolean("sign_up",false)) {
                TransactionHelper.startFragment(
                    R.id.fragment_container,
                    fragmentManager as FragmentManager,
                    GroupListFragment.newInstance()
                )
            }
            PrefManager.saveBoolean("sign_up",true)

        })
    }

}
