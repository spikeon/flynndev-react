import React, {Component} from 'react';
import './Home.scss';
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Skills from "../Skills/Skills";
import SkillService from "../shared/MockSkillsService";
import {ProjectModel} from "../shared/ProjectModel";
import {SkillModel} from "../shared/SkillModel";
import ProjectService from "../shared/ProjectService";
import ResumeService from "../shared/MockResumeService";
import {JobModel} from "../shared/JobModel";
import me from "../img/me.png";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from "../Resume/Resume";

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

    render() {
        return (
            <div className="Home">
                <FeaturedProjects projects={this.state.projects}/>
                <Container>
                    <Skills skills={this.state.skills}/>
                </Container>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col md={2}>
                                <img src={me} alt="Mike Flynn" width="100%" />
                                <div className="info">
                                    <div className="name">Mike Flynn</div>
                                    <div className="job">Software Engineer</div>
                                    <div className="location">Orcutt, CA</div>
                                    <div className="contact">
                                        <a href="mailto:mflynn@flynndev.us">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            mflynn@flynndev.us
                                        </a>
                                    </div>

                                </div>
                            </Col>
                            <Col md={10}>
                                <h2>Career Objectives and Mission Statement</h2>
                                <p>I have always had a natural talent for writing code. I would like to use this natural talent to the benefit of both myself and my employer, while continuing to hone my skills and learn new things about software development. My best fit would be in a well-structured organization that has high development standards. Eventually, I see myself working as a senior level Software Engineer or in a programming/architecture role.</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <Resume resume={this.state.resume}></Resume>
                </Container>
            </div>
        );
    }
}