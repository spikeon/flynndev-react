import React from 'react';
import './ProjectThumb.scss';
import {useHistory} from "react-router-dom";

type ProjectThumbProps = {
    id: string,
    name: string,
    src?: string,
    size?: number
};

export const ProjectThumb = ({id, name, src, size}: ProjectThumbProps) => {

    const history = useHistory();
    const navigate = () => history.push(`/project/${id}`);

    const thumb = `${src}/${size ? size : 200}`;

    return <div className="project_thumb" onClick={navigate}>
        <img alt="placeholder" src={thumb}/>
        <div className="title">
            <p>{name}</p>
        </div>
    </div>
}

export default ProjectThumb;