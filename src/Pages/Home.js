import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Custom.sass';
import './fonts.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn } from './Variants';
import Footer from './Footer';
import Lottie  from 'lottie-react';
import nasadeveloper from "../Animation/nasadeveloper.json"
import Worktogether from './Worktogether';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); 

    const navigate = useNavigate();
    const ToContactUs = () => {
        navigate('Contact')
    };
    
    return ( 
        <>
        <div className="header-body mt-4">
            <Container>
                <Row className="py-4 align-items-center mx-auto">
                    <Col lg={5} md={12} className="d-flex justify-content-center align-items-center">
                        <motion.div
                        variants={fadeIn("down", 0.1)}
                        initial={"hidden"}
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2}} 
                        className="image-wrapper">
                            <Lottie className="custom-width" animationData={nasadeveloper}></Lottie>
                        </motion.div>          
                    </Col>
                    <Col lg={7} md={12} className="text-mid-center mt-4">
                        <motion.div>
                        <motion.p 
                        variants={fadeIn("up", 0.1)}
                        initial={"hidden"}
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2}} className="h4 lh-1 display-md text-primary ubuntu-medium">Hello I'm Tetant</motion.p>
                        <motion.p 
                        variants={fadeIn("up", 0.5)}
                        initial={"hidden"}
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2}} className="display-2 lh-sm text-secondary h4-md roboto-regular">Web Developer</motion.p>
                        <motion.p variants={fadeIn("up", 0.5)}
                        initial={"hidden"}
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2}} className="fs-5 text-secondary text-mid-custom roboto-regular">As a web developer, I create websites that enhance user experiences and meet client goals. I enjoy collaborating with the coding community to drive innovation for businesses.</motion.p>
                        <Row className="mt-3">
                            <Col xs={12} md={12} lg="auto">
                                <motion.div
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}}><Button onClick={ToContactUs} className="w-100 ubuntu-regular" variant="primary" size="lg">Get In Touch</Button></motion.div>
                            </Col>
                        </Row>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="bg-dark py-5">
            <Container className="p-3 d-flex justify-content-center flex-lg-nowrap flex-wrap">
                <motion.div>
                    <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.2}}>
                        <Card className="my-3 my-md-2 bg-black p-2 card-shadow-two" >
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon className="fs-icon text-secondary" icon={faPencil} /></Card.Title>
                            <Card.Subtitle className="mb-3 fs-3 text-secondary ubuntu-medium">UI Design</Card.Subtitle>
                            <Card.Text className="text-secondary fs-6 roboto-regular">
                            Clean, modern UI design showcasing my web development skills, 
                            featuring intuitive navigation, responsive layouts, and engaging visuals for user experience.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </motion.div>
                </motion.div>
                <motion.div>
                    <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.2}}>
                        <Card className="my-3 my-md-2 mx-lg-4 mx-md-0 bg-primary p-2 card-shadow-two" >
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon className="fs-icon text-dark" icon={faCode} /></Card.Title>
                            <Card.Subtitle className="mb-3 fs-3 text-dark ubuntu-medium">Front-End</Card.Subtitle>
                            <Card.Text className="fs-6 text-dark roboto-regular">
                            Dynamic, interactive web experiences showcasing my front-end development skills, 
                            emphasizing performance, accessibility, and seamless user engagement across devices.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </motion.div>
                </motion.div>
                <motion.div
                variants={fadeIn("up", 0.5)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}}>
                    <Card className="my-3 my-md-2 bg-black p-2 card-shadow-two" >
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon className="fs-icon text-secondary" icon={faDatabase} /></Card.Title>
                        <Card.Subtitle className="mb-3 fs-3 text-secondary ubuntu-medium">Back-End</Card.Subtitle>
                        <Card.Text className="text-secondary fs-6 roboto-regular">
                        Robust, scalable server solutions demonstrating my back-end development expertise, 
                        focusing on efficient data handling, security, and API integration for seamless functionality.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </motion.div>
                
            </Container>
        </div>
        <Worktogether />
        <Footer />
        </>
    );
}
 
export default Home;