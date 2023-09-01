import React, { useState } from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import "./sections.css";
import Brands from "./brands";

//Icons
import AppDevIcon from "../../assets/img/icons/App Dev Icon.svg";
import UXIcon from "../../assets/img/icons/UX Icon.svg";
import WebDevIcon from "../../assets/img/icons/Web Dev Icon.svg";
import icon from "../../assets/img/icons/icon.svg";

//Case Studies Images
import img1 from "../../assets/img/case-studies/img1.png";
import img2 from "../../assets/img/case-studies/img2.png";
import img3 from "../../assets/img/case-studies/img3.png";

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img1, img2, img3];
  const headerTexts = [
    "The Olympian",
    "The Savings Jar",
    "Skhokho seMali",
    "The Olympian",
    "The Savings Jar",
    "Skhokho seMali",
  ];

  const bodyTexts = [
    "The only athlete in the world to do her Olympic routine in 2020.",
    "Grow your savings treasure and grow your dragon.",
    "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
    "The only athlete in the world to do her Olympic routine in 2020.",
    "Grow your savings treasure and grow your dragon.",
    "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const Slide = ({ images, headerTexts, bodyTexts }) => {
    return (
      <div className="slide">
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <img src={image} alt={`Image ${index + 1}`} />
            <h4 className="text-overlay1">{headerTexts[index]}</h4>
            <p className="text-overlay2">{bodyTexts[index]}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="section">
        <div className="space-70"></div>
        <Container>
          <div className="section-h">
            <h6 className="section-heading">What we do</h6>
          </div>
          <h1 className="we-offer-text">
            We offer a complete range of bespoke design and development services
            to help you turn your ideas into digital masterpieces
          </h1>
          <div className="space-70"></div>
          <Row>
            <Col lg="3" sm="6">
              <img alt="..." className="AppDevIcon" src={WebDevIcon} />
              <h6 className="serviceHeaders">Web development</h6>
              <p className="serviceText">
                We use cutting-edge web development technologies to help our
                clients fulfill their business goals through functional,
                reliable solutions.
              </p>
            </Col>
            <Col lg="3" sm="6">
              <img alt="..." className="UUXIcon" src={UXIcon} />
              <h6 className="serviceHeaders">User experience & design</h6>
              <p className="serviceText">
                Our complete web design services will bring your ideas to life
                and provide you with a sleek, high-performing product that
                elevates your business.
              </p>
            </Col>
            <Col lg="3" sm="6">
              <img alt="..." className="UUXIcon" src={AppDevIcon} />
              <h6 className="serviceHeaders">Mobile app development</h6>
              <p className="serviceText">
                Our extensive mobile development experience allows us to create
                custom native and cross-platform iOS and Android mobile
                solutions for our clients.
              </p>
            </Col>
            <Col lg="3" sm="6">
              <img alt="..." className="UUXIcon" src={icon} />
              <h6 className="serviceHeaders">Blockchain solutions</h6>
              <p className="serviceText">
                We conduct market research to determine the optimal
                blockchain-based solutions to help you grow your company and
                achieve your business goals.
              </p>
            </Col>
          </Row>
          <div className="space-70"></div>
          <div className="section-h">
            <h6 className="section-heading">Case Studies</h6>
          </div>
          <br />
          <div className="App">
            <div className="slider">
              <Button className="prev-button" onClick={prevSlide}>
                Prev
              </Button>
              <Slide
                images={images.slice(currentIndex, currentIndex + 3)}
                headerTexts={headerTexts.slice(currentIndex, currentIndex + 3)}
                bodyTexts={bodyTexts.slice(currentIndex, currentIndex + 3)}
              />
              <Button className="next-button" onClick={nextSlide}>
                Next
              </Button>
            </div>
          </div>
          <div className="space-70"></div>
          <Brands />
          <div className="space-70"></div>
        </Container>
      </div>
    </>
  );
}

export default Main;
