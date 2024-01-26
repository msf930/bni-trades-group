import Image from "next/image";
import Hero from "../public/Hero2.jpg"
import { createClient } from "next-sanity";

export default function Home({props}) {

  return (
    <div>
      <div className="subNavBtns">
        <a className="subNavBtn1">Our Services</a>
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
        <div id="about" className="aboutContainer">
            <h1 className="aboutTitle">About Us</h1>
            <p className="aboutBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div id="businesses" className="businessesContainer">
            <h1 className="businessesTitle">Our Businesses</h1>


        </div>

    </div>
  );
}

const client = createClient({
    projectId: "6d4z77yv",
    dataset: "production",
    apiVersion: "2024-01-22",
    useCdn: false
});

export async function getStaticProps() {
    const businesses = await client.fetch(`*[_type == "business"]`);

    return {
        props: {
            businesses
        }
    };
}

