import Head from "next/head";
import React, { Component } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Header from "./header";
import Footer from "./footer";
import { getResumeData } from "../lib/resumeData";

export const siteTitle = "Portfolio";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  getData = async () => {
    const response = await getResumeData();
    this.setState({ data: response });
  };

  componentDidMount() {
    smoothscroll.polyfill();
    this.getData();
  }

  render() {
    return (
      <div id="layout">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="manifest.json" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="stylesheet" href="css/default.css" />
          <link rel="stylesheet" href="css/layout.css" />
          <link rel="stylesheet" href="css/media-queries.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />

          <title>Portfolio</title>
        </Head>
        <Header />
        <div id="content">
          <main>{this.props.children}</main>
        </div>
        <Footer data={this.state.data} />
      </div>
    );
  }
}
