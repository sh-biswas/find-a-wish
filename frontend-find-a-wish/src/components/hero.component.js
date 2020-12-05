import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import logo from '../images/earth_heart_logo.png';

function Hero(props) {
    const jumb_styles = {
        backgroundImage: 'URL("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-028-plum-plate.png")',
        backgroundSize: 'cover'
    };
    return (
        <Jumbotron fluid style={jumb_styles}>
            <Container fluid>
                <Row className="justify-content-center px-5 align-items-center">
                    <Col md={8} sm={12} lg={6} className="py-5">
                        { props.title && <h1 className="display-1 font-weight-bolder text-light">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light text-light">{props.subTitle}</h3> }
                        <br></br>
                        <p className="lead">
                            <Button variant="light" href="/signup" className="btn btn-lg">Get Started</Button>
                        </p>
                    </Col>
                    <Col lg={6}>
                        <img src={logo} alt="Logo"></img>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};
export default Hero;
