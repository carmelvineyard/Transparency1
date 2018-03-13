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
    },
    getBillsCo: (memID) => {
        return axios.get("/api/propublica/billsCo", {params: {memID: "B001260"}})
    },
    getBillsIntroduced: (memID) => {
        return axios.get("/api/propublica/billsIntroduced", {params: {memID: "B001260"}})
    }
};
