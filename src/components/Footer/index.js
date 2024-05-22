import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top section">
                <div className="footer__shape rellax" data-rellax-speed="1" data-rellax-percentage="0.5">
                    <img src="assets/images/leaf.png" alt="Leaf" />
                </div>
                <div className="footer__content-wrapper">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="footer__info">
                                    <div className="footer__logo">
                                        <a href="/"><img src="assets/images/logo.png" alt="Logo" /></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="footer__flex-box">
                                    <div className="footer__menu">
                                        <h3 className="footer__title">Links</h3>
                                        <ul className="footer__list">
                                            <li><button className="footer__link btn">Menu</button></li>
                                            <li><button className="footer__link btn">Why Us</button></li>
                                            <li><button className="footer__link btn">Get an Offer</button></li>
                                        </ul>
                                    </div>
                                    <div className="footer__menu">
                                        <h3 className="footer__title">Company</h3>
                                        <ul className="footer__list">
                                            <li><a className="footer__link btn" href="/imprint">Imprint</a></li>
                                            <li><a className="footer__link btn" href="/privacy-policy">Privacy Policy</a></li>
                                            <li><a className="footer__link btn" href="/terms-and-conditions">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="footer__copyright">
                                <p>Copyright © 2024 Mahadev Foods GmbH. All Rights Reserved.</p>
                            </div>
                        </Col>
                        <Col lg={6} className="text-end">
                            <div className="footer__credits">
                                <p>Designed & developed by <a href="https://gordiansol.com/" title="Gordian Solutions" target="_blank" rel="noopener noreferrer">Gordian Solutions</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
