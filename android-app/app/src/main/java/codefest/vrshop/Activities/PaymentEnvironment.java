package codefest.vrshop.Activities;



    /**
     * Created by tawrun on 10/1/18.
     */
    public enum PaymentEnvironment {

        PRODUCTION {
            @Override
            public String merchant_Key() {
                return "HJjXvMgn";
            }

            @Override
            public String merchant_ID() {
                return "6022864";
            }

            @Override
            public String furl() {
                return "https://www.payumoney.com/mobileapp/payumoney/failure.php";
            }

            @Override
            public String surl() {
                return "https://www.payumoney.com/mobileapp/payumoney/success.php";
            }

            @Override
            public String salt() {
                return "8LMOW81S4K";
            }


            @Override
            public boolean debug() {
                return false;
            }
        };

        public abstract String merchant_Key();

        public abstract String merchant_ID();

        public abstract String furl();

        public abstract String surl();

        public abstract String salt();

        public abstract boolean debug();


    }