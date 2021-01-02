import {ProjectModel} from "./ProjectModel";
import ProjectData from "./ProjectData";

export default class ProjectService {
    private readonly items: ProjectModel[];

    constructor() {
        this.items = ProjectData;
    }

    async retrieveItems() {
        return Promise.resolve(this.items);
    }

    async getItem(itemLink: string) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === itemLink) {
                return Promise.resolve(this.items[i]);
            }
        }
        return null;
    }
}