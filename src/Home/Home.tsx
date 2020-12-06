import React, {Component} from 'react';
import './Home.scss';
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Skills from "../Skills/Skills";
import {SkillProps} from "../Skills/Skill";
import {ProjectProps} from "../Project/Project";
import ProjectService from "../shared/MockProjectService";
import SkillService from "../shared/MockSkillsService";

type HomeProps = {}

type State = {
    projects: ProjectProps[],
    skills: SkillProps[]
}

export default class Home extends Component<HomeProps, State> {
    private projectService: ProjectService;
    private skillService: SkillService;

    constructor(props: HomeProps) {
        super(props);
        this.projectService = new ProjectService();
        this.skillService = new SkillService();
        this.state = {
            projects: [],
            skills: []
        }
    }

    componentDidMount() {
        this.getProjects();
        this.getSkills();
    }

    render() {
        return (
            <div className="Home">
                <FeaturedProjects projects={this.state.projects}/>
                <Skills skills={this.state.skills}/>
            </div>
        );
    }

    private getProjects() {
        this.projectService.retrieveItems().then(projects => {
            this.setState({projects});
        })
    }
    private getSkills() {
        this.skillService.retrieveItems().then(skills => {
            this.setState({skills});
        })
    }
}