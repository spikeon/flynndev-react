import {JobModel} from "./JobModel";
import ResumeData from "./ResumeData.json";

export default class ResumeService {
    private readonly items: JobModel[];

    constructor() {
        this.items = ResumeData;
    }

    async retrieveItems() {
        return Promise.resolve(this.items);
    }

}