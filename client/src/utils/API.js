import axios from "axios";

export default {
    getSenators: (params) => {
        return axios.get("/api/opensecrets", { params: this.state.value});
    }
};
