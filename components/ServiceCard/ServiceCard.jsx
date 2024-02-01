import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className="serviceCardContainer">
            <h1>{props.businessName}</h1>
            <ul>
                {props.services.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <div className="serviceBtnCont">
                <a className="serviceBtn" href={`#${props.rev}`}>Go To Business</a>
            </div>
        </div>
    );
};

export default ServiceCard;