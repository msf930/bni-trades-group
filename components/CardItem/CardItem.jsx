"use client"

import React, {useState} from 'react';
import Image from "next/image";
import {useCollapse} from "react-collapsed";
import QRCode from "react-qr-code";

const CardItem = (props) => {
    const [expanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const handleToggle = () => {
        setExpanded(!expanded);
    };


    return (
        <div className="itemContainer">
            <div className="defaultContainer" >
                <div className="itemImgContainer">
                    <Image
                        className="itemImage"
                        src={props.logo}
                        alt="logo"

                        fill={true}
                    >
                    </Image>
                </div>
                <h1>{props.businessName}</h1>
                <h2>{props.ownerName}</h2>
                <div className="linkContainer">
                    <a className="itemLink" href={`tel:+${props.phone}`}>{props.phone}</a>
                    <a className="itemLink" href={`mailto:${props.email}`}>{props.email}</a>
                    <div className="webLinkCont">
                        <a className="itemLinkWeb" href={props.website}>Visit Website</a>
                    </div>
                </div>
            </div>
            <div className="expandContainer" {...getCollapseProps()}>
                {props.services === undefined ? <div></div> :
                <div className="expandSectionServices">
                    <hr/>
                    <h1>Services</h1>
                    <ul>
                        {props.services.map((item,i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                }
                {props.idealCustomer === null ? <div></div> :
                <div className="expandSectionClients">
                    <hr/>
                    <h1>Ideal Client</h1>
                    <p>{props.idealCustomer}</p>
                </div>
                }
                <hr/>
                <div className="cardQrContainer">
                    <h1>Visit Website</h1>
                    <QRCode value={props.website} size={150}/>
                </div>
            </div>
            {props.services === undefined && props.idealCustomer === null ? <div></div> :
            <div className="itemBtnContainer">
                <button className="itemBtn" {...getToggleProps()}>{!isExpanded ? <div>More Info</div> : <div>Less</div>}</button>
            </div>
            }
        </div>
    );
};

export default CardItem;