import {SkillProps} from "../Skills/Skill";


export default class SkillService {
    private readonly items: SkillProps[];

    constructor() {
        this.items = [
            {name: "PHP",        now: 12},
            {name: "HTML",       now: 14},
            {name: "CSS",        now: 14},
            {name: "JavaScript", now: 14},
            {name: "Java",       now: 3},
            {name: "SCSS",       now: 10},
            {name: "Node.js",    now: 8},
            {name: "Express",    now: 8},
            {name: "Angular",    now: 3},
            {name: "React",      now: 3},
            {name: "Bootstrap",  now: 7},
            {name: "WordPress",  now: 10},
            {name: "PHP",        now: 18},
        ];
    }

    async retrieveItems() {
        return Promise.resolve(this.items);
    }

}