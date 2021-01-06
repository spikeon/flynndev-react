import ResumeLinkModel from "../shared/ResumeLinkModel";
import ResumeLinks from "../Resume/ResumeLinks";
import React from "react";
import "./Links.scss";

export function Links(props: { links: ResumeLinkModel[] }) {
    return (
        <div className="links">
            <h3>Links</h3>
            <ResumeLinks links={props.links}/>
        </div>
    );
}