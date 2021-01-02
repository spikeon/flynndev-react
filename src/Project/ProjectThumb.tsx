import React from 'react';
import './ProjectThumb.scss';
import {useHistory} from "react-router-dom";

type ProjectThumbProps = {
    id: string,
    name: string,
    src?: string,
    size?: number
};

export const ProjectThumb = ({id, name, src, size = 200}: ProjectThumbProps) => {

    const history = useHistory();
    const navigate = () => history.push(`/project/${id}`);

    const thumb = src !== "" ? <img alt="placeholder" src={`${src}/${size}`}/> : "";

    return <div className={`project_thumb size-${size}`} style={ {height:size, width: size} } onClick={navigate}>
        {thumb}
        <div className="title">
            <p>{name}</p>
        </div>
    </div>
}

export default ProjectThumb;