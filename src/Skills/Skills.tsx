import React, {Component} from 'react';
import './Skills.scss';
import {Container} from "react-bootstrap";
import Skill from "./Skill";
import {SkillModel} from "../shared/SkillModel";

type SkillsProps = {
    skills?: SkillModel[]
};

export default class Skills extends Component<SkillsProps> {

    sortByAgeDesc(a: SkillModel, b: SkillModel) {
        if (a.now > b.now) return -1;
        else if (a.now === b.now) return 0;
        else return 1;
    }

    render() {
        let skillElements: JSX.Element[] = [];

        if (this.props.skills) {
            const skills = this.props.skills.slice();
            let max = 10;

            skills.forEach((skill) => {
                if (skill.now + 2 > max) max = skill.now + 2;
            })

            skillElements = skills.sort((a, b) => this.sortByAgeDesc(a, b)).map((skill: SkillModel) => (
                <Skill now={skill.now} max={max} name={skill.name} key={skill.name}/>
            ));
        }

        return (
            <div className="skills_outer">
                <Container>
                    <h2>My Skills</h2>
                    <div className="skills">
                        {skillElements}
                    </div>
                </Container>
            </div>
        );
    }
}
