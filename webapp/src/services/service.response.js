class ServiceResponse {
    success;
    data;
    httpCode;
    message;

    constructor(success, data, message, httpCode) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.httpCode = httpCode;
    }

    static error(message, data, httpCode) {
        return new ServiceResponse(false, data || {}, message, httpCode || 400);
    }

    static success(data, message, httpCode) {
        return new ServiceResponse(true, data, message || "", httpCode || 200);
    }
}

export default ServiceResponse;
