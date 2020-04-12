import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero subtitle={props.title} />
      <Content>
        <img
          src="https://www.w3schools.com/w3css/img_avatar3.png"
          className="profilePic"
        ></img>
        <p className="about-text">
          Exceptionally creative and dependable Entry Level Web Developer with a
          stellar customer service record and superb work ethic. Broadly and
          deeply knowledgeable in a wide variety of computer languages as well
          as the principles and techniques of website construction and
          maintenance. <br />I am incredibly passionate about approaching
          programming challenges from different angles and collaborating with
          others to create meaningful web applications.
          <br /> I am excited to develop responsive websites and leverage skills
          as part of fast-paced, quality-driven teamwork to build better
          experiences on the web.This simple Portfolio is build using React.js.
          For detailed information about my work, please visit <br />
          <a
            href="https://nikola4work.github.io/Niko_Final_Portfolio/"
            target="_blank"
            className="g-card-link"
          >
            Here
          </a>
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
