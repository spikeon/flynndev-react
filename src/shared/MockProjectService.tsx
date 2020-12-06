import {ProjectProps} from "../Project/Project";

export default class ProjectService {
    private readonly items: ProjectProps[];
    constructor() {
        this.items = [
            {link: "jquery-calendar", name: "jQuery Calendar", imageSrc: "http://api.flynndev.us/projects/jquery-calendar/thumb/200"}
        ];
    }
    async retrieveItems() {
        return Promise.resolve(this.items);
    }

    async getItem(itemLink: string) {
        for(let i = 0; i < this.items.length; i++) {
            if ( this.items[i].link === itemLink) {
                return Promise.resolve(this.items[i]);
            }
        }
        return null;
    }
}