import React from "react";
import "./Education.scss";

export function Education() {
    return (
        <div className="education">
            <h3>Education</h3>

            <div className="school">
                <h4 className="name">Allan Hancock College</h4>
                <div className="location">Santa Maria, CA</div>
                <div className="degree">Associates of Arts in Computer Science</div>
                <div className="accolades">
                    <h4>Accolades</h4>
                    <ul>
                        <li>Online Coordinator for the Science and Engineering Club for 2 years</li>
                        <li>Member of Alpha Gamma Sigma (Honors Society)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}