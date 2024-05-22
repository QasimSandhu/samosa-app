import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const AboutSection = () => {
    return (
        <section className="about-sec section" id="menuRef">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center">
                        <div className="sec-title mb-5">
                            <h2 className="h2-title">discover our story</h2>
                            <div className="sec-title-shape mb-4">
                                <img src={'/assets/images/title-shape.svg'} alt="Title Shape" />
                            </div>
                            <p className='pb-3'>
                                At Samosa Factory, we're passionate about bringing the savory delight of samosas right to your doorstep. Our journey began with a simple mission: to craft the most delicious and authentic samosas using time-honored recipes passed down through generations.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="g-xxl-5">
                    <Col lg={8} className="m-auto">
                        <div className="about-video">
                            <div className="about-video-img">
                                <video preload="auto" loop poster={'/assets/images/samosa-thumbnail.png'}>
                                    <source src="https://spicejunction.s3.eu-central-1.amazonaws.com/assets/samosa.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="play-btn-wp play-btn">
                                <svg width="24" height="30" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1021 10.9331L3.19255 0.344479C1.83572 -0.560077 0 0.424293 0 2.04717V23.1978C0 24.8473 1.83572 25.8051 3.19255 24.9005L19.1021 14.3119C20.2993 13.5404 20.2993 11.7312 19.1021 10.9331Z" fill="var(--primary-color)" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
