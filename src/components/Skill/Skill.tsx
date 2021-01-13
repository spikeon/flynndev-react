import React, {Component} from 'react';
import './Skill.scss';
import {ProgressBar} from "react-bootstrap";
import {SkillModel} from "../../shared/SkillModel";

export default class Skill extends Component<SkillModel> {
    static defaultProps = {
        max: 20
    }

    render() {
        return (
            <div className="skill">
                <h4 className="skill_title">
                    {this.props.name}
                    <span className="skill_years">{this.props.now} Years</span>
                </h4>
                <ProgressBar min={0} now={this.props.now} max={this.props.max} striped={true} variant="danger"/>
            </div>
        );
    }
}
