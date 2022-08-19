import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typical from "react-typical";
import "./Banner.css";
import BannerAnimation from "../BannerAnimation/BannerAnimation.jsx";
const Banner = () => {
  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col sm={12} md={6}>
          <h4 className="fw-bold Parent-container">
            <Typical
              steps={[
                "Best Whatch house",
                1000,
                "Bangladesh Limited",
                1000,
                "Import from Japan, Dubai, India, Pakistan, Russia.",
                1000,
                "Cross Platform all business policy",
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h4>
          <p>
            Set of silver smart watches or fitness tracker isolated on white
            background. Pink Modern Smart Watch Mockup with Strap in Duotone
            Style. 3d Rendering.
          </p>
        </Col>
        <Col sm={12} md={6}>
          <div className="ms-5" style={{ width: "400px" }}>
            <BannerAnimation></BannerAnimation>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
