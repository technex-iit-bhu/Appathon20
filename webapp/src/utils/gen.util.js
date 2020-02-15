class GenUtil {
    static accessToken = "";

    static getAccessToken() {
        return this.accessToken || localStorage.getItem("access_token") || "";
    }

    static setAccessToken(token) {
        localStorage.setItem("access_token", token);
        this.accessToken = token;
    }

    static getHeaders() {
        return {
            "Authorization": `Token ${GenUtil.getAccessToken()}`,
            "Content-Type": "application/json"
        };
    }
}

export default GenUtil;
