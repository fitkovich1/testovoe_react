import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.co/api'
});

export const actorsApi = {
    getActors() {
        return instance.get(`/people`);
    }
};