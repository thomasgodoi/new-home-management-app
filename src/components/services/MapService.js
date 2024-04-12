import axios from "axios";

const BASE_URL = "http://localhost:8080/home/";

export const MapService = {
    findHomeList,
    saveHome,

};

function findHomeList() {
    return axios.get(BASE_URL + `find-all`);
}

function saveHome(dto) {
    return axios.post((BASE_URL + `save-home`), dto);
}