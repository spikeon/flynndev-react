import React from 'react';
import "./FlynnDevHeader.scss";
import {Link} from "react-router-dom";
import {Col, Container, Navbar, Row} from "react-bootstrap";

import meCircle from "../img/me_circle.png";

function FlynnDevHeader() {
    return (
        <Container>
            <div className="header">
                <Link id="brand" to="/">FlynnDev</Link>
                <Row>
                    <Col md={6}>
                        <h1>Mike Flynn</h1>
                        <h3>Software Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia risus id efficitur efficitur. Nulla ullamcorper urna at turpis gravida, et ornare justo dignissim. Cras consectetur posuere justo, non efficitur sem porttitor quis. Fusce ut nibh magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis pellentesque libero. In eget tempus ipsum.</p>
                    </Col>
                    <Col md={6}>
                        <div className="me_container">
                        <img src={meCircle} className="me" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default FlynnDevHeader;