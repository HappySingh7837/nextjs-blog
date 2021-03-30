import axios from "axios";
import { devUrl, prodUrl } from "./baseurls";

export const AUTHORIZATION = "authorization";
export const proxy = "https://cors-anywhere.herokuapp.com/";
export const API = axios.create({
    baseURL: process.env.NODE_ENV == "development" ? devUrl : prodUrl,
    headers: {
        "APP-NAME": "KRISHIFY_WEB",
    },
});
