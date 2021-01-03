export class CompanyModel {
    name: string = "";
    city: string = "";
    state: string = "";

    constructor(name: string, city: string, state: string) {
        this.name = name;
        this.city = city;
        this.state = state;
    }
}