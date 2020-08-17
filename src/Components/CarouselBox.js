import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ForestImg1 from '../Assets/Forest1.png';
import ForestImg2 from '../Assets/Forest2.png';
import ForestImg3 from '../Assets/Forest3.png';
import './CarouseleBox.css';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="carouseleItem">
                    <img 
                        className="d-block w-100"
                        src={ForestImg1}
                        alt="Forest1"
                    />
                    <Carousel.Caption>
                        <h3>Forest 1</h3>
                        <p> lorem </p>
                    </Carousel.Caption>
                </Carousel.Item>
            
                <Carousel.Item className="carouseleItem">
                    <img 
                        className="d-block w-100"
                        src={ForestImg2}
                        alt="Forest2"
                    />
                    <Carousel.Caption>
                        <h3>Forest 2</h3>
                        <p> lorem </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carouseleItem">
                    <img 
                        className="d-block w-100"
                        src={ForestImg3}
                        alt="Forest3"
                    />
                    <Carousel.Caption>
                        <h3>Forest 3</h3>
                        <p> lorem </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                
        )
    }
}
