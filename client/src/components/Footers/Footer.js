/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="section-h">
          <h6 className="section-heading">Contact us</h6>
        </div>
        <div className="space-70"></div>
        <div className="top-section">
          {" "}
          {/* Corrected class name */}
          <h3 className="footer-header">
            Have a project in mind? Let's make it happen
          </h3>
          <p className="address">
            22 Street Name, Suburb, 8000, Cape Town, South Africa +27 21 431
            0001 enquirie@website.co.za
          </p>
        </div>
        <div className="space-70"></div>
        <div className="bottom-div-section">
          <Row>
            <Col>
              <p className="bottom-footer-text">
                Terms of service Privacy policy Impressum
              </p>
            </Col>
            <Col>
              <p className="bottom-footer-text">Facebook Instagram Twitter</p>
            </Col>
            <Col>
              <p className="bottom-footer-text">Github Linkedin Teams</p>
            </Col>
            <Col>
              <p className="bottom-footer-text">Youtube Behance Dribbble</p>
            </Col>
            <Col>
              <p className="bottom-footer-text">
                Explore open jobs ©2000—2023 Company Name
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
