import React from "react";
import Menu from "./pages/home/Menu";
import BannerImage from "./pages/home/BannerImage";
import BannerCTA from "./pages/home/BannerCta";
import Creators from "./pages/home/Creators";
import About from "./pages/home/About";
import FloatingCTA from "./pages/home/FloatingCta";
import TermsConditions from "./pages/home/TermsConditions";
import Footer from "./pages/home/Footer";
import styled from "styled-components";
import "../globals"

import "./assets/style";
import { Col, Container, Row } from "reactstrap";

function Index(props) {

  return (
    <div className="container-center-horizontal">
      <div className="w1-a1-cue-detail screen">

        <div className="FlexCol">
            <Menu/>
            <br/>
              <Container fluid="md">
                <Row>
                  <Col lg="8">
                    <BannerImage/>
                  </Col>
                  <Col lg="4">
                    <BannerCTA />
                  </Col>
                </Row>
              </Container>
        </div>
        
        <Container>
        <div className="row">
            <div className="col-6">
                  <Creators/>
                  <About/>
          </div>
        </div>
        </Container>

        <div className="FlexCol2">
          <Container>
            <Col md="8" xs="12">
                <TermsConditions />
            </Col>
          </Container>
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default Index;
