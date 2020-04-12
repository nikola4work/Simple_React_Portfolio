import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../src/index.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Nikola Jovanovic",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],

      home: {
        title: "Full Stack Web Developer",
        subtitle: "Projects that make difference!",
      },
      about: {
        title: "AboutMe!",
      },
      contact: {
        title: "Let's Get In Touch!",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" id="navBar" fluid={true}>
          {/* navbar starts*/}
          <Navbar
            className="border-bottom"
            id="navBar"
            bg="transperent"
            expand="lg"
          >
            <Navbar.Brand id="name">Nikola Jovanovic</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <a href={"/"} className="nav-link">
                  Home
                </a>
                <a href={"/about"} className="nav-link">
                  About Me
                </a>
                <a href={"/contact"} className="nav-link">
                  Contact
                </a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* navbar ends*/}
          {/* adding paths to home, about, contact page*/}
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />

          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          {/* adding paths to home, about, contact page*/}
        </Container>
      </Router>
    );
  }
}

export default App;
