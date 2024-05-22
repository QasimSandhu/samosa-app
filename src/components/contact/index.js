import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const UpdatedContact = () => {
    return (
        <section className="contact-section section" id="aboutRef">
            <div className="section-wrapper">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Row>
                                <Col lg={12}>
                                    <div className="section-title text-center mb-5">
                                        <h2 className="title">Contact Us</h2>
                                        <div className="title-shape mb-4">
                                            <img src={'/assets/images/title-shape.svg'} alt="Title Shape" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="contact-info-wrapper">
                                <div className="contact-section-info bg-light">
                                    <Row>
                                        <Col lg={4}>
                                            <div className="contact-details text-center">
                                                <i className="fas fa-map-marker-alt" data-scroll="" data-scroll-repeat="" data-scroll-target="#icon" aria-hidden="true"></i>
                                                <a title="Bülowstraße 44, 10783 Berlin" href="https://www.google.com/maps/place/SPICE+JUNCTION/@52.495504,13.3629964,17z/data=!3m1!4b1!4m6!3m5!1s0x47a851b764e344a7:0x39f9df011eae255d!8m2!3d52.495504!4d13.3655713!16s%2Fg%2F11vlsn1cfj?entry=ttu" target="_blank">
                                                    Bülowstraße 44, 10783 Berlin
                                                </a>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="contact-details call-now text-center">
                                                <i className="fas fa-phone-alt" data-scroll="" data-scroll-repeat="" data-scroll-target="#icon" aria-hidden="true"></i>
                                                <a title="+49 (1)76 768 905 23" href="tel:+4917676890523">+49 (1)76 768 905 23</a>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="contact-details text-center">
                                                <i className="fas fa-envelope" data-scroll="" data-scroll-repeat="" data-scroll-target="#icon" aria-hidden="true"></i>
                                                <a title="info@samosafactory.de" href="mailto:info@samosafactory.de">info@samosafactory.de</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default UpdatedContact;
