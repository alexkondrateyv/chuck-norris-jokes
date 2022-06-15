import axios from "axios";

export function Get(url) {
    return axios.get(url)
}