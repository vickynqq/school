import axios from "axios";

const BASE_URL = "http://localhost:5000/"
const TOKEN = "825y8i3hnfjmsbv7gwajbl7fobqrjfvbs7gbfj2q3bgh8f42"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});