import {CompanyModel} from "./CompanyModel";

export class JobModel {
    position: string = "";
    start_date: string = "";
    end_date: string = "";
    company: CompanyModel;
    duties: string[] = [];
    accomplishments: string[] = [];

    constructor(name: string, position: string, start_date: string, end_date: string, companyName: string, companyCity: string, companyState: string, duties: string[] = [], accomplishments: string[] = []) {
        this.position = position;
        this.start_date = start_date;
        this.end_date = end_date;
        this.company = new CompanyModel(companyName, companyCity, companyState);
        this.duties = duties;
        this.accomplishments = accomplishments;
    }
}