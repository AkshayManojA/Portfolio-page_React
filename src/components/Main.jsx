import React from "react";
import { Container, Row, Col, Image, ProgressBar,Button } from "react-bootstrap";
const Main = () => {
  return (
    <Container className="text-center my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4">Designer,Front-end developer</h1>
          <p></p>
          <Image src="akshay.jpeg" roundedCircle width="150" className="my-3" />
          <h1>Akshay Manoj.A</h1>
          <Button variant="outline-primary"><a href="https://drive.google.com/file/d/1If-lgEUh2xs7zWRLOjmEUEH_YnJKOKuV/view?usp=drive_link">Resume</a></Button>

          <br />
          <Container className="text-start my-5">
            <h2>Introduction</h2>
            <p>Front-end developer skilled in HTML, CSS, JavaScript, Bootstrap, and React. Passionate about building responsive, user-friendly interfaces that enhance the web experience. Dedicated to translating design into clean, efficient code with a focus on usability and performance.</p>
            <br />
          <h2>Skills</h2>
          <ul>
            <li>
              <h4>HTML</h4>
              <ProgressBar now={75} label={`${75}%`} />
           </li>
           <li>
              <h4>CSS</h4>
              <ProgressBar now={70} label={`${70}%`} />
           </li>
           <li>
              <h4>Bootstrap</h4>
              <ProgressBar now={80} label={`${80}%`} />
           </li>
           <li>
              <h4>JavaScript</h4>
              <ProgressBar now={70} label={`${70}%`} />
           </li>
           <li>
              <h4>REACT</h4>
              <ProgressBar now={60} label={`${60}%`} />
           </li>
        </ul>
        </Container>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
