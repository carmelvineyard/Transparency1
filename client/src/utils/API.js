import axios from "axios";

export default {
    getSenators: (stateAbr) => {
        return axios.get("/api/opensecrets", {params: {stateAbr: "CA"}});
    }
};
