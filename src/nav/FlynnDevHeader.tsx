import React from 'react';
import "./FlynnDevHeader.scss";
import {Link} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";

function FlynnDevHeader() {
    return (
        <Navbar fixed="top" className="navbar-default">
            <Container>
                <div className="navbar-header">
                    <Link className="navbar-brand" id="brand" to="/">
                        FlynnDev
                    </Link>
                </div>
            </Container>
        </Navbar>
    );
}

export default FlynnDevHeader;