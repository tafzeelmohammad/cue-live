import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../../assets/images/logo.png";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function Menu() {

    const googleplayA1B4Ed6211C913 = "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/googleplay-a1b4ed6211c9--1--3@2x.png";
    const appstore6F955D329Ad713 =  "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/appstore-6f955d329ad7--1--3@2x.png";

return (
    <Container fluid="md" fluid>
        <Row>
            <div className="menu">
                <Col lg="12" xs="12" className="text-align">
                    <img className="logo" src={logo} />
                </Col>
                {/* <Col lg="8" xs="12">
                    <div className="group-38186">
                        <img className="googleplaya1b4ed6211c9-1-3" src={googleplayA1B4Ed6211C913} />
                        <img className="appstore6f955d329ad7-1-3" src={appstore6F955D329Ad713} />

                        <img
                        className="support"
                        src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/support@2x.png"
                    />
                    </div>
                </Col> */}
            </div>
        </Row>
    </Container>
  )
}
export default Menu;