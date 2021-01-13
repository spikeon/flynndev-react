import React, {Component} from 'react';
import './Home.scss';
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Skills from "../../components/Skills/Skills";
import SkillService from "../../shared/MockSkillsService";
import {ProjectModel} from "../../shared/ProjectModel";
import {SkillModel} from "../../shared/SkillModel";
import ProjectService from "../../shared/ProjectService";
import ResumeService from "../../shared/MockResumeService";
import {JobModel} from "../../shared/JobModel";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import Resume from "../../components/Resume/Resume";
import {Mission} from "../../components/Mission/Mission";
import {Certifications} from "../../components/Certifications/Certifications";
import {Education} from "../../components/Education/Education";
import {Info} from "../../components/Info/Info";
import {Links} from "../../components/Links/Links";

type HomeProps = {}

type State = {
    projects: ProjectModel[],
    skills: SkillModel[],
    resume: JobModel[]
}

export default class Home extends Component<HomeProps, State> {
    private projectService: ProjectService;
    private skillService: SkillService;
    private resumeService: ResumeService;

    constructor(props: HomeProps) {
        super(props);
        this.projectService = new ProjectService();
        this.skillService = new SkillService();
        this.resumeService = new ResumeService();
        this.state = {
            projects: [],
            skills: [],
            resume: []
        }

    }

    componentDidMount() {
        this.getProjects();
        this.getSkills();
        this.getResume();
    }

    render() {

        let links = [
            {href: "https://www.hackerrank.com/spikeon", text: "Hacker Rank"},
            {href: "https://linkedin.com/in/spikeon", text: "LinkedIn"},
            {href: "https://stackoverflow.com/users/3347093/spikeon", text: "Stack Overflow"},
            {href: "https://github.com/spikeon", text: "GitHub"}
        ];

        return (
            <div className="Home">
                <FeaturedProjects projects={this.state.projects}/>
                <Container>
                    <Mission/>
                </Container>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <Info name="Mike Flynn" jobTitle="Software Engineer" location="Orcutt, CA" email="mflynn@flynndev.us"/>
                            </Col>
                            <Col md={9}>
                                <div className="achievements">
                                    <Education/>
                                    <Certifications/>
                                    <Links links={links}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col md={8}>
                            <Resume resume={this.state.resume}/>
                        </Col>
                        <Col md={4}>
                            <Skills skills={this.state.skills}/>
                        </Col>
                    </Row>
                </Container>
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

    private getResume() {
        this.resumeService.retrieveItems().then(resume => {
            this.setState({resume});
        })
    }
}