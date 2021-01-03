import React from "react";
import {JobModel} from "../shared/JobModel";

type Props = { job: JobModel };

export class Job extends React.Component<Props> {

    render() {
        let job = this.props.job;
        let duties;
        let accomplishments;

        if (job.duties.length > 0) {

            let dutyItems = [];
            for (let duty of job.duties) {
                dutyItems.push(<li key={duty}>{duty}</li>);
            }

            duties = <div className="duties">
                <h3>Duties</h3>
                <ul>
                    {dutyItems}
                </ul>
            </div>
        }

        if (job.accomplishments.length > 0) {

            let accomplishmentItems = [];
            for (let accomplishment of job.accomplishments) {
                accomplishmentItems.push(<li key={accomplishment}>{accomplishment}</li>);
            }

            accomplishments = <div className="accomplishments">
                <h3>Accomplishments</h3>
                <ul>
                    {accomplishmentItems}
                </ul>
            </div>
        }


        return (
            <div className="job">
                <div className="company_name">
                    {job.company.name}
                </div>
                <div className="position">
                    {job.position}
                </div>
                <div className="tenure">
                    {job.start_date} - {job.end_date}
                </div>
                <div className="location">
                    {job.company.city}, {job.company.state}
                </div>
                {duties}
                {accomplishments}
            </div>
        );
    }
}