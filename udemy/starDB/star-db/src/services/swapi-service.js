 export default class SwapiServise {

    _apiBase = 'https://swapi.co/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , received ${res.status}`);
        }
        const body = await res.json();
        return body
    };

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    async getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarShips() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    async getStarShip(id) {
        return this.getResource(`/starships/${id}/`);
    }
}
