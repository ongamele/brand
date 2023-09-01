import React, { useState, useEffect } from "react";

// reactstrap components
import { Row, Col, FormGroup, Input, Label, Container } from "reactstrap";
import { useQuery } from "@apollo/client";
import { GET_BRANDS } from "../../Graphql/Queries";

// core components
import "./sections.css";

const useRadioChange = (initialValue) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return [selectedValue, handleRadioChange];
};

function Brands() {
  const [selectedValue, handleRadioChange] = useRadioChange("ascending");
  const { loading, data, refetch } = useQuery(GET_BRANDS, {
    pollInterval: 4000,
    variables: {
      sortBy: selectedValue, // Pass the selected radio value as the sortBy variable
    },
  });

  useEffect(() => {
    refetch();
  }, [selectedValue]);

  const SVGComponent = ({ imageName }) => {
    // Dynamically import the SVG using require
    const svg = require(`../../assets/img/brands/${imageName}`);

    return (
      <Col lg="2" sm="6">
        {" "}
        <img src={svg} alt="SVG" />
      </Col>
    );
  };

  return (
    <>
      <div className="section-h">
        <h6 className="section-heading">You’ll be in good company</h6>
      </div>

      <h6 className="title">Sort Alphabetically </h6>
      <Container>
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
              value="ascending"
              checked={selectedValue === "ascending"}
              onChange={handleRadioChange}
            />
            <Label check>Ascending Order</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
              value="descending"
              checked={selectedValue === "descending"}
              onChange={handleRadioChange}
            />
            <Label check>Descending order</Label>
          </FormGroup>
        </FormGroup>
      </Container>

      <Row>
        {data &&
          data.getBrands.map((brand, index) => (
            <SVGComponent key={index} imageName={brand.name} />
          ))}
      </Row>
    </>
  );
}

export default Brands;
