import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Container} from "react-bootstrap";
import ProjectService from "../shared/MockProjectService";
import {ProjectModel} from "../shared/ProjectModel";

type ProjectProps = { name: string }

type State = {
    project: ProjectModel | null,
    projectId: string
}

export default class Project extends React.Component<RouteComponentProps<ProjectProps>, State> {
    private projectService: ProjectService;

    constructor(props: RouteComponentProps<ProjectProps>) {
        super(props);
        this.projectService = new ProjectService();
        this.state = {
            project: null,
            projectId: props.match.params.name
        }
    }

    componentDidMount() {
        this.getProject();
    }

    private getProject() {
        if(this.state.projectId === "") return;
        this.projectService.getItem(this.state.projectId).then(project => {
            this.setState({project});
        })
    }

    render() {
        if(this.state.project === null) return (<Container><h1>404: Project not found</h1></Container>);
        const project = this.state.project;
        return (
            <Container>
                <h1>{project.name}</h1>
            </Container>
        );
    }
}