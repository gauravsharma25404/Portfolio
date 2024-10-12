import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Gaurav Sharma </span>
            I am a computer science student from <span className="purple"> Jaipur, Rajasthan.</span>
            <br />
            
            <br />I'm pursuing Bachelor's degree in Computer Science from Swami keshvanand Institute Of Technology Jaipur 2021-2025<br /> <br />
           <br />
            
            ⚡ I have studied basic software engineering subjects like Data Structures, Algorithms, Oops, DBMS, OS, CN etc.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done courses on Data Science and Full Stack Development .
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;