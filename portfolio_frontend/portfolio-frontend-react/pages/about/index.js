import styles from "../../styles/About.module.css";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import { getResumeData } from "../../lib/resumeData";
import Head from "next/head";

export default function About() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await getResumeData();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    var name = data.main.name;
    var profilepic = "images/" + data.main.image;
    var bio = data.main.bio;
    var street = data.main.address.street;
    var city = data.main.address.city;
    var state = data.main.address.state;
    var zip = data.main.address.zip;
    var phone = data.main.phone;
    var email = data.main.email;
  }
  return (
    <Layout>
      <Head>
        <title>Portfolio - About</title>
      </Head>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Portfolio Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <a href={"tel:" + phone}>{phone}</a>
                  <br />
                  <a href={"mailto:" + email}>{email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
