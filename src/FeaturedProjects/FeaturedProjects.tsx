import React from 'react';
import './FeaturedProjects.scss';
import {Button, Container} from "react-bootstrap";
import ProjectThumb from "../Project/ProjectThumb";
import {ProjectModel} from "../shared/ProjectModel";
import {useHistory} from "react-router-dom";

type FeaturedProjectsProps = {
    projects: ProjectModel[]
}

export default function FeaturedProjects(props: FeaturedProjectsProps) {
    const history = useHistory();
    let featuredProjectThumbElements: JSX.Element[] = [];

    if (props.projects) {
        const projects = props.projects.slice();
        featuredProjectThumbElements = projects.filter(project => project.featured).map((project) => (
            <ProjectThumb size={120} src={project.thumb} name={project.name} id={project.id} key={project.id} />
        ));
    }

    const navigateProjects = () => history.push("/projects");

    return (
        <div className="featured_projects_outer">
            <Container>
                <h2>
                    Featured Projects
                    <Button variant="outline-info" className="view-all" onClick={navigateProjects}>
                        View All
                    </Button>
                </h2>
                <div className="featured_projects">
                    {featuredProjectThumbElements}
                </div>
            </Container>
        </div>
    );
}