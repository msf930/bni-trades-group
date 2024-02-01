import Image from "next/image";
import Hero from "../public/Hero2.jpg"
import Hero2 from "../public/Hero3.jpg"
import CardItem from "@/components/CardItem/CardItem";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import QRCode from "react-qr-code";
import React from "react";
import Link from "next/link";




    async function getData() {
        const res = await fetch(
            'https://6d4z77yv.api.sanity.io/v2024-01-22/data/query/production?query=*' +
            '[_type%20==%20%22business%22]' +
            '{' +
            'businessName,' +
            'email,' +
            'idealCustomer,' +
            'ownerName,' +
            'phone,' +
            'services,' +
            'website,' +
            '_rev,' +
            '%22imageUrl%22:%20logo.asset-%3Eurl}')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }
    async function getQrData() {
        const res = await fetch(
            'https://6d4z77yv.api.sanity.io/v2024-01-22/data/query/production?query=*[_type%20==%20%22qrCode%22]')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }
export default async function Home() {
    const dataRaw = await getData();
    const data = dataRaw.result;
    const qrDataRaw = await getQrData();
    const qrData = qrDataRaw.result;
    return (
        <div className="pageContainer">
            <div className="subNavBtns">
                <a className="subNavBtn1" href="#services">Our Services</a>
                <a className="subNavBtn2" href="#businesses">Our Businesses</a>
            </div>
            <div className="heroContainer">
                <Image
                    src={Hero}
                    alt="hero"
                    placeholder="blur"
                    className="heroImg"
                >
                </Image>
                <h1 className="heroText">West<br/>Denver<br/>Home<br/>Services</h1>
            </div>
            <div className="heroContainerMd">
                <Image
                    src={Hero2}
                    alt="hero"
                    placeholder="blur"
                    className="heroImg"
                >
                </Image>
                <div className="heroItemsContainer">
                    <h1 className="heroText">West Denver<br/>Home Services</h1>
                    <div className="subNavBtnsMd">
                        <Link className="subNavBtn1Md" href="#services">Our Services</Link>
                        <Link className="subNavBtn2Md" href="#businesses">Our Businesses</Link>
                    </div>
                </div>
            </div>
            <div id="about" className="aboutContainer">
                <h1 className="aboutTitle">About Us</h1>
                <p className="aboutBody">
                    Welcome to West Denver Home Services, your trusted partner for all your home needs.
                    With a dedication to excellence and a commitment to customer satisfaction,
                    we offer a wide range of services to ensure your home remains a haven of comfort and
                    functionality. From repairs and maintenance to renovations and installations, our
                    experienced team is here to help you create the home of your dreams.
                    Trust us to deliver quality service with a personal touch, every step of the way.
                </p>
            </div>

            <div id="businesses" className="businessesContainer">
                <h1 className="businessesTitle">Our Businesses</h1>
                <div className="businessItemsContainer">
                    {data.map(item => (
                        <div key={item._rev} id={item._rev}>
                            <CardItem
                                key={item.businessName}
                                logo={item.imageUrl}
                                businessName={item.businessName}
                                ownerName={item.ownerName}
                                phone={item.phone}
                                email={item.email}
                                website={item.website}
                                services={item.services}
                                idealCustomer={item.idealCustomer}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div id="services" className="servicesContainer">
                <h1 className="servicesTitle">Our Services</h1>
                <div className="serviceItemsContainer">
                    {data.map(item => (
                        <ServiceCard
                            key={item.businessName}
                            rev={item._rev}
                            businessName={item.businessName}
                            services={item.services}
                        />
                    ))}
                </div>
            </div>
            <div id="qr" className="qrContainer">
                <h1>Visit West Denver Home Services</h1>
                <div className="qrImgCont">
                    <QRCode value={qrData[0].siteUrl} size={150}/>
                </div>
                <h2>Thank You!</h2>
            </div>

        </div>
    );
}


