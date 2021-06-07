import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import dynamic from "next/dynamic";
import { getResumeData } from "../lib/resumeData";
import { useState, useEffect } from "react";
import ContactForm from "../components/contactForm";

const HeroBackground = dynamic(() => import("../components/heroBackground"), {
  ssr: false,
  loading: () => <div style={{ height: "100vh", width: "100vw" }}>{"   "}</div>,
});

export default function Home() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await getResumeData();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    var project = data.main.project;
    var github = data.main.github;
    var name = data.main.name;
    var description = data.main.description;
  }

  return (
    <Layout>
      <div id="home">
        <section id="hero">
          <HeroBackground />
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{name}</h1>
              <h3>{description}.</h3>
              <hr />
              <ul className="social">
                <a
                  href={github}
                  target="_blank"
                  className="button btn github-btn"
                >
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#contact">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </div>
    </Layout>
  );
}
