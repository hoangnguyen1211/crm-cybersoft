import axios from 'axios';
import { API_URL_DOMAIN } from '../configs/UrlConfig';

export const get = (url, ...params) => {
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        params: params,
        method:'GET',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
            // 'Authorization': '',
            'Content-Type': 'application/json'
        }
    })
}

export const post = (url, data) => {
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method:'POST',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
            // 'Authorization': '',
            'Content-Type': 'application/json'
        },
        // timeout: 1000,
        data: JSON.stringify(data)
        
    })
}

export const put = (url, data) => {
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method:'PUT',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
            // 'Authorization': '',
            'Content-Type': 'application/json'
        },
        // timeout: 1000,
        data: JSON.stringify(data)
    })
}

export const remove = (url, ids) => {
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method:'DELETE',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
            // 'Authorization': '',
             'Content-Type': 'application/json'
        },
        data: JSON.stringify(ids)
        // timeout: 1000
    })
}

export const BaseApi = {
    get,
    post,
    put,
    remove
}