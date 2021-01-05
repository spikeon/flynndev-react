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
import {faBuilding, faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from "../Resume/Resume";
import ResumeLink from "../Resume/ResumeLink";
import ResumeLinks from '../Resume/ResumeLinks';

type HomeProps = {}

type State = {
    projects: ProjectModel[],
    skills: SkillModel[],
    resume: JobModel[]
}

function Info() {
    return <div className="info">
        <img src={me} alt="Mike Flynn" width="100%"/>
        <div className="name">
            <FontAwesomeIcon icon={faUser}/>
            Mike Flynn
        </div>
        <div className="job">
            <FontAwesomeIcon icon={faBuilding}/>
            Software Engineer
        </div>
        <div className="location">
            <FontAwesomeIcon icon={faHome}/>
            Orcutt, CA
        </div>
        <div className="contact">
            <a href="mailto:mflynn@flynndev.us">
                <FontAwesomeIcon icon={faEnvelope}/>
                mflynn@flynndev.us
            </a>
        </div>

    </div>;
}

function Education() {
    return <>
        <h3>Education</h3>

        <div className="school">
            <h4 className="name">Allan Hancock College</h4>
            <div className="location">Santa Maria, CA</div>
            <div className="degree">Associates of Arts in Computer Science</div>
            <div className="accolades">
                <h4>Accolades</h4>
                <ul>
                    <li>Online Coordinator for the Science and Engineering Club for 2 years</li>
                    <li>Member of Alpha Gamma Sigma (Honors Society)</li>
                </ul>
            </div>
        </div>
    </>;
}

function Certifications() {
    return <>
        <h3>Certifications</h3>

        <ul>
            <li>Certified Vaadin 14 Developer</li>
        </ul>
    </>;
}

function Mission() {
    return <div className="mission">
        <h2>Career Objectives and Mission Statement</h2>
        <p>I have always had a natural talent for writing code. I would like to use this natural talent
            to the benefit of both myself and my employer, while continuing to hone my skills and learn
            new things about software development. My best fit would be in a well-structured
            organization that has high development standards. Eventually, I see myself working as a
            senior level Software Engineer or in a programming/architecture role.</p>
    </div>;
}

function Links(props: { links: ({ href: string; text: string } | { href: string; text: string } | { href: string; text: string } | { href: string; text: string })[] }) {
    return <>
        <h3>Links</h3>
        <ResumeLinks links={props.links}/>
    </>;
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

        let links = [
            { href:"https://www.hackerrank.com/spikeon", text:"Hacker Rank"},
            { href:"https://linkedin.com/in/spikeon", text:"LinkedIn"},
            { href:"https://stackoverflow.com/users/3347093/spikeon", text:"Stack Overflow"},
            { href:"https://github.com/spikeon", text:"GitHub"}
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
                                <Info/>
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
}