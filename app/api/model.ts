import axios from "axios";

const BASEURL = "https://63f239144f17278c9a22d1cd.mockapi.io/api/v1/loggi"

const INSTANCE: any = axios.create({
    baseURL: BASEURL,
});

const API = (params?: string): any => {
    return INSTANCE
    .get(`?search=${params}`)
    .catch((e: Object) => {
        return {
                data: { error: 'not found!' }
            }
    })
}

export { API } 