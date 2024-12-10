import React from 'react';
import './Content.css';

function Content(props) {
    return (
        <div className="content-container">
            <h2 className="content-heading">AK47</h2>
            <p className="content-paragraph">AK47 is a selective-fire, gas-operated 7.62×39mm assault rifle, developed in the Soviet Union by Mikhail Kalashnikov.</p>
            <p className="content-paragraph">It was officially accepted by the Soviet Armed Forces in 1949 and used by the majority of the member states of the Warsaw Pact .</p>
            <h1 className="content-paragraph">{props.vp}</h1>
        </div>
    );
}

export default Content;