import axiosService from "./axios-service";

export default {
    sendMail(data) {
        return axiosService.korie.post("/sendmail", data);
    }
};