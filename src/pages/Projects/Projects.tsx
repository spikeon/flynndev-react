import React from 'react';
import './Projects.scss';
import {Container} from "react-bootstrap";
import ProjectService from "../../shared/ProjectService";
import {ProjectModel} from "../../shared/ProjectModel";
import ProjectThumb from "../../components/ProjectThumb/ProjectThumb";

type Props = {};
type State = {
    projects: ProjectModel[]
};

class Projects extends React.Component<Props, State> {
    private projectService: ProjectService;

    constructor(props: Props) {
        super(props);
        this.projectService = new ProjectService();
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        this.getProjects();
    }

    render() {

        let projects: JSX.Element[] = [];
        for (const project of this.state.projects) {
            projects.push(<ProjectThumb id={project.id} name={project.name} key={project.id} src={project.thumb} size={150}/>);
        }

        return (
            <Container>
                <div className="projects_outer">
                    {projects}
                </div>
            </Container>
        );

    }

    private getProjects() {
        this.projectService.retrieveItems().then(projects => {
            this.setState({projects});
        })
    }
}

export default Projects;