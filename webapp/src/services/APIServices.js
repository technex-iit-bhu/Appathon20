import ServiceResponse from "./service.response";
import Axios from "axios";

class APIServices {
    static async request(axiosConfig) {
        try {
            const response = await Axios.request(axiosConfig);
            if (response.status >= 200 && response.status < 400) {
                return ServiceResponse.success(response.data.data, response.data.message);
            } else {
                return ServiceResponse.error(response.data.message);
            }
        } catch (e) {
            console.log(e);
            return ServiceResponse.error(e.response.data.message);
        }
    }


}

export default APIServices;
