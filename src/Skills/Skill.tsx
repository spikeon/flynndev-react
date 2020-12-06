import React, {Component} from 'react';
import './Skill.scss';
import {ProgressBar} from "react-bootstrap";

export type SkillProps = {
    name: string,
    min?: number,
    now: number,
    max?: number
};

export default class Skill extends Component<SkillProps> {
    static defaultProps = {
        min: 0,
        max: 20
    }

    render() {
        return (
            <div className="skill">
                <h4 className="skill_title">
                    {this.props.name}
                    <span className="skill_years">{this.props.now} Years</span>
                </h4>
                <ProgressBar min={this.props.min} now={this.props.now} max={this.props.max} striped={true}
                             variant="danger"/>
            </div>
        );
    }
}
