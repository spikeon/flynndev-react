export default class ProjectService {

    url = "http://api.flynndev.us";

    async retrieveItems() {
        return fetch(`${this.url}/projects/all`)
            .then(response => response.json());
    }

    async getItem(itemLink: string) {
        return fetch(`${this.url}/projects/${itemLink}`)
            .then(response => response.json());
    }
}