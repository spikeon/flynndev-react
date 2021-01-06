import ResumeLinkModel from "../shared/ResumeLinkModel";
import ResumeLink from "./ResumeLink";
import React from "react";

type Props = {
    links: ResumeLinkModel[]
}
export default function ResumeLinks(props: Props) {
    let links = [];
    for (let link of props.links) {
        links.push(<ResumeLink href={link.href} text={link.text} key={link.text}/>);
    }
    return (
        <ul className="resume_links">
            {links}
        </ul>
    );
}