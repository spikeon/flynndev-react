import React from "react";
import {ProjectFileModel} from "../../shared/ProjectFileModel";
import {Col, Row} from "react-bootstrap";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./FileViewer.scss";
import {faFile, faFolder} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type Props = { files: ProjectFileModel[] };
type State = { files: TreeFileType[], file: ProjectFileModel };

type TreeFileType = {
    name: string
    file: ProjectFileModel | null,
    children: TreeFileType[],
    id: string
}

class TreeFile implements TreeFileType {
    name: string;
    file: ProjectFileModel | null = null;
    children: TreeFileType[] = [];
    id: string;

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }
}

function arrangeIntoTree(paths: ProjectFileModel[]): TreeFileType[] {
    let tree: TreeFileType[] = [];

    for (const file of paths) {
        const path = file.path;
        let currentLevel = tree;
        let parts = [];
        for (const part of path.split("/")) {
            parts.push(part);
            const findByName = (tree: TreeFileType[], name: string) => {
                for (const item of tree) if (item.name === name) return item;
                return false;
            }
            const existingPath = findByName(currentLevel, part);

            if (existingPath) {
                currentLevel = existingPath.children;
            } else {
                const newPart = new TreeFile(part, parts.join("/"));
                if (path.endsWith("/" + part) || path === part) newPart.file = file;

                currentLevel.push(newPart);
                currentLevel = newPart.children;
            }
        }

    }
    return tree;
}

class FileTreeItem extends React.Component<{ file: TreeFileType, selected: ProjectFileModel, onSelect: any }> {
    render() {
        let file = this.props.file;
        let icon = file.file === null ? <FontAwesomeIcon icon={faFolder}/> : <FontAwesomeIcon icon={faFile} />;
        let isSelected = file.file === this.props.selected;
        let className = `file_tree_item ${isSelected ? "selected" : ""}`;

        let onClick = () => {
            if (file.file !== null) this.props.onSelect(file.file);
        };

        return (
            <div className={className} onClick={onClick}>
                <div className="title">{icon} {file.name}</div>
                <FileTree selected={this.props.selected} data={file.children} onSelect={this.props.onSelect} />
            </div>
        );
    }
}

class FileTree extends React.Component<{ selected: ProjectFileModel, data: TreeFileType[], onSelect: any }> {
    render() {
        let items = [];
        for (const file of this.props.data) {
            items.push(
                <FileTreeItem file={file} selected={this.props.selected} onSelect={this.props.onSelect} key={file.id} />
            );
        }
        return (
            <div className="file_tree">
                {items}
            </div>
        );
    }
}

export class FileViewer extends React.Component<Props, State> {

    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            file: this.props.files[0],
            files: arrangeIntoTree(this.props.files)
        }
    }

    render() {

        let getLang = (path: string) => {
            let parts = path.split(".");
            let ext = parts.pop();
            return ext === undefined ? "txt" : ext;
        }

        return (
            <div className="files">
                <Row>
                    <Col md={3} className="fileslist">
                        <FileTree data={this.state.files} selected={this.state.file}
                                  onSelect={(file: ProjectFileModel) => {
                                      this.setState({file})
                                  }}/>
                    </Col>
                    <Col md={9}>
                        <h5>{this.state.file.name}</h5>
                        <SyntaxHighlighter style={darcula}
                                           language={getLang(this.state.file.name)}
                                           showLineNumbers={true}>{this.state.file.content}</SyntaxHighlighter>
                    </Col>
                </Row>
            </div>
        );
    }
}