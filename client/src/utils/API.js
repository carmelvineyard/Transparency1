import axios from "axios";

export default {
    getSenators: (stateAbr) => {
        return axios.get("/api/opensecrets", {params: {stateAbr: stateAbr}});
    },
    getIndustries: (senator) => {
        return axios.get("/api/opensecrets/industries", {params: {senator: senator}});
    },
    getIndividuals: (senator) => {
        return axios.get("/api/opensecrets/individuals", {params: {senator: "N00009888"}})
    }
};
