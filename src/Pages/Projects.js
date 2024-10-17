import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              // imgPath="https://user-images.githubusercontent.com/91063960/139678548-e58c550e-51c5-4695-a0c3-d6563737548a.png"
              title="GetScore"
              description="GetScore is a cricket scorecard application which provides real-time updates and detailed statistics on cricket matches. It tracks scores, wickets, overs, and individual player performances. Users can follow live matches, view historical data, and analyze match progress with ball-by-ball commentary, making it an essential tool for cricket enthusiasts and analysts."             
              link="https://github.com/gauravsharma25404/GetScore"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              // imgPath="https://user-images.githubusercontent.com/91063960/139376405-043d6cfd-93b3-4486-a07a-2ff3382846d8.png"
              title="Tweet-prediction model"
              description="This tweet prediction model designed using R programming leverages natural language processing (NLP) and machine learning techniques to predict the success or engagement level of a tweet. By analyzing historical tweet data, such as likes, retweets, and replies, the model identifies patterns and trends. It uses techniques like sentiment analysis, text mining, and regression models to forecast the potential impact of new tweets. This model aids in optimizing social media strategies, helping users create more engaging and impactful content."
              link="https://github.com/gauravsharma25404/Tweet_like_pridiction"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png"
              title="Netflix-clone"
              description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."             
              // link="https://github.com/sijeeshmiziha/netflix"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
