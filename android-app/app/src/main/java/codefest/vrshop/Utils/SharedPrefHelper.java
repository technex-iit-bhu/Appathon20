package codefest.vrshop.Utils;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

public class SharedPrefHelper {
    public static final String PREF_FCM_TOKEN = "pref_fcm_token";
    public static final String PREF_IS_FCM_REGISTERED = "pref_is_fcm_registered";

    //User Details
    public static final String PREF_USER_NAME = "pref_user_name";
    public static final String PREF_USER_UUID = "pref_user_uuid";
    public static final String PREF_USER_FCM_TOKEN = "pref_user_fcm_token";

    /**
     * Sets string preference.
     *
     * @param context   Activity context
     * @param key       Preference key
     * @param value     Preference value
     */
    public static void setStringPreference(Context context, String key, String value) {
        SharedPreferences sharedPreferences = PreferenceManager
                .getDefaultSharedPreferences(context);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(key,value);
        editor.apply();
    }

    /**
     * Sets boolean preference.
     *
     * @param context   Activity context
     * @param key       Preference key
     * @param value     Preference value
     */
    public static void setBooleanPreference(Context context, String key, Boolean value) {
        SharedPreferences sharedPreferences = PreferenceManager
                .getDefaultSharedPreferences(context);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putBoolean(key,value);
        editor.apply();
    }

    /**
     * Gets boolean preference.
     *
     * @param context   Activity context
     * @param key       Preference key
     * @return          boolean value
     */
    public static boolean getBooleanPreference(Context context, String key) {
        SharedPreferences sharedPreferences = PreferenceManager
                .getDefaultSharedPreferences(context);
        return sharedPreferences.getBoolean(key,false);
    }

    /**
     * Gets string preference.
     *
     * @param context   Activity context
     * @param key       Preference key
     * @return          string value
     */
    public static String getStringPreference(Context context, String key) {
        SharedPreferences sharedPreferences = PreferenceManager
                .getDefaultSharedPreferences(context);
        return sharedPreferences.getString(key,"");
    }

    public static void setIntegerPreference(Context context, String key,
                                            int value) {
        SharedPreferences preferences = PreferenceManager
                .getDefaultSharedPreferences(context);
        if (preferences != null) {
            SharedPreferences.Editor editor = preferences.edit();
            editor.putInt(key, value);
            editor.apply();
        }
    }

    public static int getIntegerPreference(Context context, String key) {
        SharedPreferences sharedPreferences = PreferenceManager
                .getDefaultSharedPreferences(context);
        return sharedPreferences.getInt(key,0);
    }
}

