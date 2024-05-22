import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WhiteButton from "../whiteButton";
import './style.css';

const ExploreSamosaSection = () => {
    return (
        <section className="explore-samosa-section section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <div className="section-text">
                            <h2 className="extra-large-title">Explore Our Range Of Samosas!</h2>
                            <p>
                                At Samosa Factory, we take pride in offering a diverse selection of samosas to cater to every palate. Whether you're a fan of traditional classics, crave a spicy sensation, prefer vegetarian delights, indulge in meaty marvels, savor cheesy creations, or seek innovative fusion flavors, we have something for everyone. Experience the delicious world of samosas at Samosa Factory today!
                            </p>
                            <div className="banner-button mt-2">
                                <WhiteButton text="Explore more" title="Check Our menu" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} className='mt-5'>
                        <div className="section-image mt-5">
                            <img src={'/assets/images/breakfast-dish.png'} alt="Customized samosa pizza" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ExploreSamosaSection;
