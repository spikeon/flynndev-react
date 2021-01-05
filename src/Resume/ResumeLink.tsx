import React from "react";

type Props = {
    href: string,
    text: string
}
export default function ResumeLink(props: Props) {
    return (
        <li><a target="_blank" rel="noreferrer" href={props.href}>{props.text}</a></li>
    );
}