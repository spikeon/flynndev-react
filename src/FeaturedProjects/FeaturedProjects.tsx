import React, {Component} from 'react';
import './FeaturedProjects.scss';
import {Button, Container} from "react-bootstrap";
import ProjectThumb from "../Project/ProjectThumb";
import {ProjectModel} from "../shared/ProjectModel";

type FeaturedProjectsProps = {
    projects: ProjectModel[]
}

export default class FeaturedProjects extends Component<FeaturedProjectsProps> {
    render() {
        let featuredProjectThumbElements: JSX.Element[] = [];

        if (this.props.projects) {
            const projects = this.props.projects.slice();
            featuredProjectThumbElements = projects.map((project) => (
                <ProjectThumb src={project.imageSrc} name={project.name}/>
            ));
        }

        return (
            <div className="featured_projects_outer">
                <Container>
                    <h2>
                        Featured Projects
                        <Button variant="outline-info" className="view-all">View All</Button>
                    </h2>
                    <div className="featured_projects">
                        {featuredProjectThumbElements}
                    </div>
                </Container>
            </div>
        );
    }
}