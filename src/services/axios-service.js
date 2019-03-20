import axios from "axios";

const axiosInstances = {
    korie: axios.create({
        baseURL: "http://localhost:8081"
    })
};

export default axiosInstances;