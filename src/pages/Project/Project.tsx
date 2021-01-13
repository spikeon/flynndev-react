import React from 'react';
import "./Project.scss";
import {RouteComponentProps} from 'react-router-dom';
import {Button, Container, Jumbotron, Tab, Tabs} from "react-bootstrap";
import {ProjectModel} from "../../shared/ProjectModel";
import ProjectThumb from "../../components/ProjectThumb/ProjectThumb";
import ProjectService from "../../shared/ProjectService";
import parse from "html-react-parser";
import {Gallery} from "../../components/Gallery/Gallery";
import {FileViewer} from "../../components/FileViewer/FileViewer";

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

    render() {
        if (this.state.project === null) return (<Container/>);
        const project = this.state.project;

        const thumb = project.thumb !== "" ?
            <ProjectThumb size={100} src={project.thumb} name={project.name} id={project.id}/> : "";
        const title = <h2>{project.name}</h2>;
        const links = [
            Project.ExternalButton(project.github, "GitHub"),
            Project.ExternalButton(project.apidoc, "APIdoc"),
            Project.ExternalButton(project.url, "Live"),
            Project.ExternalButton(project.npm, "NPM"),
            Project.ExternalButton(project.wordpress, "WordPress")
        ];

        let defaultActive = "";
        const tabs: JSX.Element[] = [];

        const makeTab = (key: string, title: string, show: boolean, content: JSX.Element[] | JSX.Element | string) => {
            if (!show) return "";
            if (defaultActive === "") defaultActive = key;

            tabs.push(<Tab eventKey={key} title={title} key={key} className={key}>
                <h2 className="tab_title">{title}</h2>
                {content}
            </Tab>);
        }

        makeTab("about", "About", project.about !== "", project.about ? parse(project.about, {trim: true}) : "");
        makeTab("readme", "Readme", project.readme !== "", project.readme ? parse(project.readme, {trim: true}) : "");


        let jumbotron: JSX.Element | string = "";
        if (project.gallery.length > 0) {
            jumbotron =
                <Jumbotron>
                    <Container>
                        <Gallery images={project.gallery}/>
                    </Container>
                </Jumbotron>;
        }

        let files: string | JSX.Element = "";
        if (project.files.length > 1) {
            files =
                <Jumbotron>
                    <Container>
                        <h2>Files</h2>
                        <FileViewer files={project.files}/>
                    </Container>
                </Jumbotron>;
        }

        return ([
            <Container>
                <div className="project_header">
                    {thumb}
                    {title}
                    {links}
                </div>
            </Container>,
            jumbotron,
            <Container>
                <div className={tabs.length == 1 ? "hide_tabs" : ""}>
                    <Tabs defaultActiveKey={defaultActive}>
                        {tabs}
                    </Tabs>
                </div>
            </Container>,
            files
        ]);
    }

    private getProject() {
        if (this.state.projectId === "") return;
        this.projectService.getItem(this.state.projectId).then(project => {
            this.setState({project});
        })
    }

    private static ExternalLink(href: string | undefined | null, text: JSX.Element | string): string | JSX.Element {
        if (!href) return "";
        return (
            <a target="_blank" rel="noreferrer" href={href} key={href}>
                {text}
            </a>
        );
    }

    private static ExternalButton(href: string | undefined | null, text: JSX.Element | string): string | JSX.Element {
        return Project.ExternalLink(href, <Button>{text}</Button>);
    }
}