import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.co/api',
    headers: {'Content-Type': 'application/json'}
});

export const actorsApi = {
    getActors() {
        return instance.get(`/people`);
    }
};