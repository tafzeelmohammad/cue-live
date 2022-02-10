import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from "styled-components";
import { ValignTextMiddle, PoppinsNormalWhite14px, Poppins2NormalPeachCream18px } from "../../../styledMixins";
import hedaerImage from '../../assets/images/headerImage.png';
import '../../../components/assets/EnterOTP.css';

function Header(){

    return (
    <Container fluid className="topHedear">
        <div className="CueBooking1">
          <Row>
            <Col md="8"  className="mobile-w-100">
              <div className="Frame38824">
                  <div className="BannerImage1" style={{ backgroundImage: `url(${hedaerImage})` }}></div>;
                  <div className="CardTitle">
                  <div className="TimeTag1">
                      <div className="Address">08 Aug 21&nbsp;&nbsp; l&nbsp;&nbsp; 09:30 PM</div>
                  </div>
                  <h1 className="Title">Ka se Kitab 18- Balbeer Punj in conversation with Himanshu Bajpai</h1>
                  </div>
              </div>
            </Col>
              <Col md="4"  className="mobile-w-100">
              <div className="CardButtons">
                  <div className="BuyPass5000">Pass ₹450</div>
              </div>
            </Col>
            </Row>

            </div>
    </Container>
    )
}

export default Header