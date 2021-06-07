import styles from "../../styles/Contact.module.css";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import { getResumeData } from "../../lib/resumeData";
import Head from "next/head";
import ContactForm from "../../components/contactForm";

export default function Contact() {
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
    var street = data.main.address.street;
    var city = data.main.address.city;
    var state = data.main.address.state;
    var zip = data.main.address.zip;
    var phone = data.main.phone;
    var email = data.main.email;
    var message = data.main.contactmessage;
  }

  return (
    <Layout>
      <Head>
        <title>Portfolio - Contact</title>
      </Head>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <ContactForm />
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <a href={"tel:" + phone}>{phone}</a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
