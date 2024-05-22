import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import GreenButton from "../greenButton";
import './style.css';

const GetQuote = () => {
    return (
        <section className="quote-form section bg-light" id="contactRef">
            <div className="quote-shape">
                <img src={'/assets/images/table-leaves-shape.png'} alt="Decorative Table Leaves Shape" />
            </div>
            <div className="quote-shape quote-shape2">
                <img src={'/assets/images/table-leaves-shape.png'} alt="Decorative Table Leaves Shape" />
            </div>
            <div className="section-wrapper">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="section-title text-center mb-5">
                                <h2 className="h2-title">Get a Quote</h2>
                                <div className="section-title-shape mb-4">
                                    <img src={'/assets/images/title-shape.svg'} alt="Title Shape" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Form className="quote-form">
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={4}>
                                <div className="input-wrapper">
                                    <Form.Label>Full name*</Form.Label>
                                    <Form.Control type="text" className="input-field" required name="name" />
                                </div>
                                <div className="input-wrapper">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" className="input-field" required name="email" />
                                </div>
                                <div className="input-wrapper">
                                    <Form.Label>Phone*</Form.Label>
                                    <Form.Control type="number" className="input-field" required name="phone" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="input-wrapper">
                                    <Form.Label>Number of Samosas</Form.Label>
                                    <Form.Control type="text" className="input-field" name="quantity" />
                                </div>
                                <div className="input-wrapper">
                                    <Form.Label>When Required?</Form.Label>
                                    <Form.Control type="datetime-local" className="input-field date-container" name="date" />
                                </div>
                                <div className="input-wrapper">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" className="input-field" name="location" />
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="input-wrapper">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" spellCheck="false" className="input-field" />
                                </div>
                                <div className="submit-btn">
                                    <GreenButton text="Submit" />
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </section>
    );
};

export default GetQuote;
