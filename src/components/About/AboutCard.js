import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",justifyContent: "center"}}>
            Hi Everyone, I am <span className="purple">Naveenkumar Palani </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am currently employed as a software developer at HCL Technologies.
            <br />
            I have completed Bachelor of Engineering (BE) in Electrical and Electronics Engineering at Karpagam College of Engineering, Tamilnadu.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Restoration
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
