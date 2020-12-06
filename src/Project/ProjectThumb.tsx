import React from 'react';
import './ProjectThumb.scss';

type ProjectThumbProps = {
    name: String,
    src: String
};

export const ProjectThumb = ({name, src}: ProjectThumbProps) =>
            <div className="project_thumb">
                <img alt="placeholder" src={src.toString()}/>
                <div className="title">
                    <p>{name}</p>
                </div>
            </div>

export default ProjectThumb;