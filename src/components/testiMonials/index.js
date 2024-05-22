// src/components/Testimonials.js
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './style.css';

const testimonials = [
    {
        id: 1,
        title: "Diverse Selection",
        description: "Explore a wide variety of fresh samosas, catering to all tastes."
    },
    {
        id: 2,
        title: "Proven Experience",
        description: "Over 28,000 samosas successfully delivered across Germany."
    },
    {
        id: 3,
        title: "Peak Freshness",
        description: "Daily prep with top local ingredients ensures unmatched flavor."
    },
    {
        id: 4,
        title: "Clean And Healthy",
        description: "Each samosa is fried in fresh, clean oil under strict hygiene standards."
    },
    {
        id: 5,
        title: "Exceptional Support",
        description: "Our team is always ready to ensure your satisfaction with every order."
    },
    {
        id: 6,
        title: "Nationwide Delivery",
        description: "Enjoy having fresh samosas delivered from Berlin to any location in Germany."
    },
    {
        id: 7,
        title: "Events Offers",
        description: "Customized samosas provided to more than 1500 events in Germany."
    },
    {
        id: 8,
        title: "Eco-Friendly Packaging",
        description: "Committed to sustainability, we use environmentally friendly packaging."
    }
];

const Testimonials = () => {
    return (
        <section className='testimonials section bg-color' id='whyRef'>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center">
                        <div className="sec-title mb-5">
                            <h2 className="h2-title">Why Choose Us for <span>Your Samosa Cravings?</span></h2>
                            <div className="sec-title-shape mb-4">
                                <img src={'/assets/images/title-shape.svg'} alt="Title Shape" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    {testimonials.map((testimonial) => (
                        <Col key={testimonial.id} sm={6} md={3} className='gargin-gap'>
                            <Card className="h-100 shadow-sm card-shadow">
                                {/* <Card.Body>
                                    <div className="card-box-top text-center">
                                        <div className="card-box-img">
                                            <h4 className="m-0">{testimonial.id}</h4>
                                        </div>
                                    </div>
                                    <Card.Title className="text-center">{testimonial.title}</Card.Title>
                                    <Card.Text className="text-center">
                                        {testimonial.description}
                                    </Card.Text>
                                </Card.Body> */}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
