import Head from "next/head";
import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import Map from "../components/common/Map";
import ContactCards from "../components/contact/ContactCards";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Real Estate Site My Oliver Elias. Contact"
        />
      </Head>
      <BreadCrumb text="Contact Us" />
      <div className="main-content px-10 py-20 container mx-auto">
        <ContactCards />
        <div className="mt-8 mb-40" id="map">
          <Map
            zoom={13}
            height="670px"
            center={{
              lat: 48.1351,
              lng: 11.5820,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default contact;
