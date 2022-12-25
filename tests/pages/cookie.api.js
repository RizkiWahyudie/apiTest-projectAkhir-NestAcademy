import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const CookieApi = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cookie": "token=f4ec5fb63b75fb7"
    },
    validateStatus: function () {
        return true;
    }
})

export default CookieApi;