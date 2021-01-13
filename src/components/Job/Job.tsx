import React from "react";
import {JobModel} from "../../shared/JobModel";
import {Col, Row} from "react-bootstrap";
import "./Job.scss";

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
                <h4>Duties</h4>
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
                <h4>Accomplishments</h4>
                <ul>
                    {accomplishmentItems}
                </ul>
            </div>
        }


        return (
            <div className="job">
                <Row>
                    <Col md={6}>
                        <h3 className="company_name">
                            {job.company.name}
                        </h3>
                    </Col>
                    <Col md={6}>
                        <div className="position">
                            {job.position}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="tenure">
                            {job.start_date} - {job.end_date}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="location">
                            {job.company.city}, {job.company.state}
                        </div>
                    </Col>
                </Row>
                {duties}
                {accomplishments}
            </div>
        );
    }
}