import axios from 'axios'

export const requester = axios.create({
    baseURL: 'http://localhost:8080/v1'
})