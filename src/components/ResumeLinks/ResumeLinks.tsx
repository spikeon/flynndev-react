import ResumeLinkModel from "../../shared/ResumeLinkModel";
import ResumeLink from "../ResumeLink/ResumeLink";
import React from "react";
import "./ResumeLinks.scss"

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