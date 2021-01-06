import me from "../img/me.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Info.scss";

type Props = {
    name: string,
    jobTitle: string,
    location: string,
    email: string
}

export function Info(props: Props) {

    return <div className="info">
        <img src={me} alt="Mike Flynn" width="100%"/>
        <div className="name">
            <FontAwesomeIcon icon={faUser}/>
            {props.name}
        </div>
        <div className="job">
            <FontAwesomeIcon icon={faBuilding}/>
            {props.jobTitle}
        </div>
        <div className="location">
            <FontAwesomeIcon icon={faHome}/>
            {props.location}
        </div>
        <div className="contact">
            <a href={`mailto:${props.email}`}>
                <FontAwesomeIcon icon={faEnvelope}/>
                {props.email}
            </a>
        </div>

    </div>;
}