import React from "react";
import {JobModel} from "../shared/JobModel";
import {Job} from "./Job";
import "./Resume.scss"

type Props = {
    resume: JobModel[]
};

export default function Resume(props: Props) {

    let jobs: JSX.Element[] = [];

    for(let job of props.resume){
        jobs.push(<Job job={job} />)
    }

    return (
        <div className="Resume">
            {jobs}
        </div>
    );
}