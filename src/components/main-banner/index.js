import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import WhiteButton from '../../components/whiteButton';

const MainBanner = () => {
    return (
        <section className="main-banner" id="homeRef">
            <div className="w-100 h-100">
                <div className="banner-shape-1 w-100" data-depth="0.30">
                    <img src={'assets/images/banner-shape-1.png'} alt="banner shape" />
                </div>
                <div className="banner-shape-2 w-100" data-depth="0.25">
                    <img src={'assets/images/plant.png'} alt="banner shape" />
                </div>
            </div>
            <div className="sec-wp h-100vh">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="banner-text">
                                <h1 className="banner-title">Samosas made with love in our <span>Samosa Factory</span></h1>
                                <div className="banner-btn mt-4">
                                    <WhiteButton  text="Our Specialties ✌️" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="banner-img-smosa">
                                <div alt="banner-img" className="banner-img"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default MainBanner;
