import React from "react";
import {JobModel} from "../../shared/JobModel";
import {Job} from "../Job/Job";
import "./Resume.scss"

type Props = {
    resume: JobModel[]
};

export default function Resume(props: Props) {

    let jobs: JSX.Element[] = [];

    for (let job of props.resume) {
        jobs.push(<Job key={job.company.name} job={job}/>)
    }

    return (
        <div className="resume">
            {jobs}
        </div>
    );
}