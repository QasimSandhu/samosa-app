import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WhiteButton from "../whiteButton";
import './style.css';

const SamosaSection = () => {
    return (
        <section className="two-col-sec section">
            <div className="food-shape rellax" data-rellax-speed="0.5" data-rellax-percentage="-1">
                <img src={'/assets/images/food-shape.png'} alt="Decorative food shape" />
            </div>
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} className='mt-5'>
                        <div className="sec-img mt-5">
                            <img src={'/assets/images/pizza.png'} alt="Customized samosa pizza" />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="sec-text">
                            <h2 className="xxl-title">Customized Samosa Factory</h2>
                            <p>
                                We understand that everyone has their own unique tastes and preferences.
                                That's why we offer a personalized samosa experience unlike any other.
                                Whether you prefer traditional fillings like potato and pea or crave something
                                more adventurous like spicy chicken or cheesy spinach, we've got you covered.
                                Our customized samosas are sure to impress.
                            </p>
                            <div className="banner-btn mt-2">
                                <WhiteButton text="Explore more" title="Check Our menu" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SamosaSection;
