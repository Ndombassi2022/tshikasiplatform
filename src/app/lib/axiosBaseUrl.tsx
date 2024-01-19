
import axios from "axios";

const BASE_URL_COMMERCIAL_LOCAL = "http://192.168.1.51:8080/v1/comercial/svc/comercial/";
const BASE_URL_EAONDE_LOCAL = "http://192.168.1.51:8080/v1/eaonde/svc/eaonde/";
const BASE_URL = "https://pokeapi.co/api/v2/";

export const axiosCommercialBaseUrl = axios.create({
    baseURL: BASE_URL_COMMERCIAL_LOCAL,
    headers: {
        
        "Content-Type" : "application/json",

       

    }
})

export const axiosEaondeBaseUrl = axios.create({
    baseURL: BASE_URL_EAONDE_LOCAL,
    headers: {
       
        "Content-Type" : "application/json",
       
     
        
    }
})