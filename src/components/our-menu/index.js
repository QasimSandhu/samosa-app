import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WhiteButton from "../whiteButton";

import './style.css';

const menuItems = [
    {
        id: 1,
        category: 'breakfast',
        image: '/assets/images/dish-7.jpeg',
        title: 'Plain Samosa',
        description: 'Boiled potatoes with spices, wrap in dough, and fry until golden.',
    },
    {
        id: 2,
        category: 'breakfast',
        image: 'assets/images/dish-8.webp',
        title: 'Chicken Samosa',
        description: 'Cook spiced chicken filling, enclose in dough, and fry to perfection.',
    },
    {
        id: 3,
        category: 'breakfast',
        image: 'assets/images/dish-9.webp',
        title: 'Butter Chicken Samosa',
        description: 'Cook spiced chicken in butter, enclose in dough, and fry to perfection.',
    },
    {
        id: 4,
        category: 'breakfast',
        image: 'assets/images/dish-1.webp',
        title: 'Mix Vegetable Samosa',
        description: 'Boiled vegetables with spices, wrap in dough, and fry until golden.',
    },
    {
        id: 5,
        category: 'dinner',
        image: 'assets/images/dish-6.webp',
        title: 'Customized Samosa',
        description: 'Combine the flavors you want <br>according to your taste.',
    },
    {
        id: 6,
        category: 'breakfast',
        image: 'assets/images/dish-2.webp',
        title: 'Corn and Cheese Samosa',
        description: 'Combine corn, cheese, and jalapeno, wrap in dough, and fry.',
    },
    {
        id: 7,
        category: 'lunch',
        image: 'assets/images/dish-3.webp',
        title: 'Spinach & Paneer Samosa',
        description: 'Mix boiled spinach and crumbled paneer, fill in dough, and fry.',
    },
    {
        id: 8,
        category: 'lunch',
        image: 'assets/images/dish-4.webp',
        title: 'Spinach & Cheese Samosa',
        description: 'Cooked Spinach with cheese, enclose in dough, and fry to perfection.',
    },
];

const OurMenuSection = () => {
    return (
        <section className="bg-img our-menu section bg-light repeat-img" id="menuRef">
            <div className="our-menu-mashroom rellax" data-rellax-speed="1" data-rellax-percentage="-0.5">
                <img width="600" src={'/assets/images/mashroom.png'} alt="Mashroom" />
            </div>
            <div className="sec-menu">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <div className="sec-title mb-5">
                                <h2 className="h2-title">We offer a large variety of Samosas, <span>Customization is also available!</span></h2>
                                <div className="sec-title-shape mb-4">
                                    <img src={'/assets/images/title-shape.svg'} alt="Title Shape" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-xxl-5">
                        {menuItems.map(item => (
                            <Col key={item.id} lg={4} sm={6} className={`dish-box-wp ${item.category}`}>
                                <div className="dish-box justify-content-center">
                                    <div className="dist-img">
                                        <img src={'/assets/images/dish-7.jpeg'} alt={item.title} />
                                    </div>
                                    <div className="dish-title">
                                        <h3 className="h3-title">{item.title}</h3>
                                        <p className='mt-0 mb-3'>{item.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="justify-content-center d-flex mt-5">
                        <WhiteButton title="Check Our menu" className="button-center" text="Order Now" />
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default OurMenuSection;
