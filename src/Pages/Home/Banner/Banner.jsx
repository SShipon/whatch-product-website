import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typical from "react-typical";
const Banner = () => {
    return (
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col sm={12} md={6}>
            <h4>
              <Typical
                steps={[
                  "Best Whatch house",
                  1000,
                  "Bangladesh Limited",
                  1000,
                  "Import from Japan India Pakistan Russia",
                  1000,
                  "Cross Platform all business policy",
                  1000,
                  "",
                  1000,
                  "React Native/Developer",
                  1000,
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
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    );
};

export default Banner;