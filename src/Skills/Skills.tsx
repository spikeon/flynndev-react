import React, {Component} from 'react';
import './Skills.scss';
import {Container} from "react-bootstrap";
import Skill, {SkillProps} from "./Skill";

type SkillsProps = {
    skills?: SkillProps[]
};

export default class Skills extends Component<SkillsProps> {

    sortByAgeDesc(a: SkillProps, b: SkillProps) {
        if (a.now > b.now) return -1;
        else if (a.now === b.now) return 0;
        else return 1;
    }

    render() {
        let skillElements: JSX.Element[] = [];

        if (this.props.skills) {
            const skills = this.props.skills.slice();
            let max = 20;

            skills.forEach((skill) => {
                if (skill.now + 2 > max) max = skill.now + 2;
            })

            skillElements = skills.sort((a, b) => this.sortByAgeDesc(a, b)).map((skill: SkillProps) => (
                <Skill now={skill.now} min={0} max={max} name={skill.name}/>
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
