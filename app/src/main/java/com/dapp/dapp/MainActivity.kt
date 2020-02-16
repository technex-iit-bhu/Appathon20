package com.dapp.dapp

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.FragmentManager
import androidx.viewpager.widget.PagerAdapter
import androidx.viewpager.widget.ViewPager
import com.dapp.dapp.helper.PrefManager
import com.dapp.dapp.home.GroupListingActivity

class MainActivity : AppCompatActivity() {

    private lateinit var mPager: ViewPager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (!PrefManager.getBoolean("first_time", true)) {
            val intent = Intent(this, GroupListingActivity::class.java)
            startActivity(intent)
            finish()
        }

        mPager = findViewById(R.id.pager)

        // The pager adapter, which provides the pages to the view pager widget.
        val pagerAdapter = ScreenSlidePagerAdapter(supportFragmentManager)
        mPager.adapter = pagerAdapter
    }

    override fun onBackPressed() {
        if (mPager.currentItem == 0) {
            // If the user is currently looking at the first step, allow the system to handle the
            // Back button. This calls finish() on this activity and pops the back stack.
            super.onBackPressed()
        } else {
            // Otherwise, select the previous step.
            mPager.currentItem = mPager.currentItem - 1
        }
    }

    private inner class ScreenSlidePagerAdapter(fm: FragmentManager) : PagerAdapter() {
        override fun isViewFromObject(view: View, `object`: Any): Boolean {
            return view == `object`
        }

        override fun getCount(): Int {
            return 5
        }

        override fun instantiateItem(container: ViewGroup, position: Int): Any {
            val layoutInflater = getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
            val view = layoutInflater.inflate(R.layout.fragment_viewpager, container, false)

            val textView: TextView = view.findViewById(R.id.tv_viewpager)
            if (position == 4) {
                val intent = Intent(view.context, GroupListingActivity::class.java)
                startActivity(intent)
                finish()
            }
            if(position==0) {
                textView.setText("A Fun Way to Visualise inner workings of blockChain")
            }
            if(position==1) {
                textView.setText("Share Your hash and Yo your friends")
            }
            if(position==2) {
                textView.setText("Entire blockchain of hashes is stored in cache of every node of every phone")
            }
            if(position==3) {
                textView.setText("Edit your hash to you fried hash and Yo each other")
            }
            container.addView(view)
            return view
        }

        override fun destroyItem(container: ViewGroup, position: Int, `object`: Any) {
            if (`object` is View) container.removeView(`object`)
        }
    }


}
