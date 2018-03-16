import axios from "axios";

export default {
    getSenators: (stateAbr) => {
        return axios.get("/api/opensecrets", {params: {stateAbr: stateAbr}});
    },
    getIndustries: (senator) => {
        return axios.get("/api/opensecrets/industries", {params: {senator: senator}});
    },
    getIndividuals: (senator) => {
        return axios.get("/api/opensecrets/individuals", {params: {senator: senator}})
    },
    getBillsCo: (memID) => {
        return axios.get("/api/propublica/billsCo", {params: {memID: memID}})
    },
    getBillsIntroduced: (memID) => {
        return axios.get("/api/propublica/billsIntroduced", {params: {memID: memID}})
    },
    newLogin: (loginData) => {
        return axios.post("/api/login", loginData)
    }
};
