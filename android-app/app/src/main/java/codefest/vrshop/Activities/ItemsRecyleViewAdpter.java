package codefest.vrshop.Activities;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

import codefest.vrshop.R;

public class ItemsRecyleViewAdpter extends  RecyclerView.Adapter<ItemsRecyleViewAdpter.MyViewHolder> implements Filterable {

    private ArrayList<ItemModel> ItemModelArrayList;
    private Context mContext;
    private List<ItemModel> ItemsListFiltered;
    private ContactsAdapterListener listener;
    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
           View itemView = LayoutInflater.from(parent.getContext())
           .inflate(R.layout.cardrow_item, parent, false);
           mContext=parent.getContext();
          return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {

        ItemModel mItemModel=ItemsListFiltered.get(position);
        Picasso.with(mContext).load(mItemModel.geturl()).into(holder.mItemImage);
        holder.mItemdescription.setText(mItemModel.getdescription());
        holder.mItemprice.setText(mItemModel.getprice());
        holder.mItemName.setText(mItemModel.getname());
    }

    @Override
    public int getItemCount() {
        return ItemsListFiltered.size();
    }
    @Override
    public Filter getFilter() {
        return new Filter() {
            @Override
            protected FilterResults performFiltering(CharSequence charSequence) {
                String charString = charSequence.toString();
                if (charString.isEmpty()) {
                    ItemsListFiltered = ItemModelArrayList;
                } else {
                    List<ItemModel> filteredList = new ArrayList<>();
                    for (ItemModel row : ItemModelArrayList) {

                        // name match condition. this might differ depending on your requirement
                        // here we are looking for name or phone number match
                        if (row.getname().toLowerCase().contains(charString.toLowerCase()) || row.getdescription().contains(charSequence)) {
                            filteredList.add(row);
                        }
                    }

                    ItemsListFiltered = filteredList;
                }

                FilterResults filterResults = new FilterResults();
                filterResults.values = ItemsListFiltered;
                return filterResults;
            }

            @Override
            protected void publishResults(CharSequence charSequence, FilterResults filterResults) {
                ItemsListFiltered = (ArrayList<ItemModel>) filterResults.values;
                if(ItemsListFiltered.size()==0) Toast.makeText(mContext,"Object not In DB",Toast.LENGTH_LONG).show();
                notifyDataSetChanged();
            }
        };
    }
    public ItemModel getItematPosition(int position){
        return  ItemModelArrayList.get(position);
    }

    public class MyViewHolder extends RecyclerView.ViewHolder{
    public TextView mItemdescription,mItemprice,mItemName;
    public ImageView mItemImage;


    public MyViewHolder(View view) {
        super(view);
        mItemName = (TextView) view.findViewById(R.id.productname);
            mItemprice = (TextView) view.findViewById(R.id.productprice);
        mItemdescription = (TextView) view.findViewById(R.id.productdesc);
        mItemImage=(ImageView)view.findViewById(R.id.productimage);

        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // send selected contact in callback
                listener.onContactSelected(ItemsListFiltered.get(getAdapterPosition()));
            }
        });
    }

    }

    public ItemsRecyleViewAdpter(ArrayList<ItemModel> x,ContactsAdapterListener li){
        this.ItemModelArrayList=x;
        this.ItemsListFiltered=x;
        this.listener=li;
    }


public interface ContactsAdapterListener {
    void onContactSelected(ItemModel contact);
}

}