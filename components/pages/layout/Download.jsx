import React from "react";
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import mobilebg from "../../assets/images/rectangle.png";
import mobile from "../../assets/images/mobile.png";
import '../../../globals.css';

function Download() {

    return (
        <Container fluid="md">
            <Row>
                    <div className="download-component">

                        <div className="overlap-group3">
                        <img className="img-responsive" src={mobilebg} />
                        <div className="image-1" style={{ backgroundImage: `url(${mobile})` }}></div>
                            
                        <div className="text">
                            <h1 className="download-cue-app-ho poppins-normal-white-32px">
                            download cue app!
                            <br />
                            home to interesting conversations with creators and communities
                            </h1>
                            <div className="your-bookings-will-b poppins-normal-white-18px">
                            Pass will be avaiable on cue app. Login app using the same number and find cue under calendar. happy cueing!
                            </div>
                        </div>
                        <img
                            className="googleplaya1b4ed6211c9-1-2"
                            src={playstore}
                        />
                        <img
                            className="appstore6f955d329ad7-1-2"
                            src={appstore}
                        />
                        </div>
                    </div>
            </Row>
        </Container>
        )
    }

export default Download