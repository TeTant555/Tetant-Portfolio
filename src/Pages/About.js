import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConnectdevelop, faLinkedin, faSquareGithub, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { faReact, faJs, faBootstrap, faCss3Alt, faHtml5, faFigma, faNodeJs, faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Thet from '../Images/Thet-Tetant-Aung.JPG';
import './fonts.css';
import { motion } from "framer-motion";
import { fadeIn } from './Variants';
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPaintbrush, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faLaravel, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); 

    return ( 
    <>
    <div className="mt-lg-4 mt-md-4 mt-sm-0 mt-0 bg-black">
        <Container className="pt-4 pb-1">
            <Row className="mt-4">
                <Col lg={7} md={7} sm={12} className="order-2 order-lg-1 order-md-1 order-sm-2">
                    <Row>
                        <motion.h1
                        variants={fadeIn("down", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                        className="h1 ubuntu-medium text-nowrap"><FontAwesomeIcon style={{color: "#364CE4",}} icon={faConnectdevelop} /> Developed by Tetant</motion.h1>
                        <Col lg={5} className="mt-3">
                            <motion.h3
                            variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="h5 primary-border ubuntu-regular">About Me</motion.h3>
                            <motion.p
                            variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="mt-2 roboto-regular">
                            I am a junior developer with over a year of programming experience, passionate about writing clean and efficient code.
                            Working on numerous projects and collaborating with teams has strengthened my problem-solving skills and adaptability, shaping me into a versatile developer eager to take on new challenges.
                            </motion.p>
                            <motion.p  
                            variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="roboto-regular">
                            My journey has equipped me with a solid understanding of web development and the ability to build dynamic and responsive applications.
                            </motion.p>
                            <motion.h3
                            variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="h5 primary-border ubuntu-regular">Featured Skills</motion.h3>
                            <motion.p 
                            variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="mt-2 fs-2 d-flex gap-3 flex-wrap">
                            <FontAwesomeIcon icon={faReact} /> 
                            <FontAwesomeIcon icon={faJs} /> 
                            <FontAwesomeIcon icon={faBootstrap} />
                            <FontAwesomeIcon icon={faHtml5} />  
                            <FontAwesomeIcon icon={faCss3Alt} />  
                            <FontAwesomeIcon icon={faFigma} /> {/* UI/UX using Figma icon */}  
                            <FontAwesomeIcon icon={faNodeJs} />
                            <FontAwesomeIcon icon={faPhp} />  
                            <FontAwesomeIcon icon={faDatabase} /> {/* MySQL/MongoDB can use generic DB icon */}  
                            <FontAwesomeIcon icon={faGit} />  
                            <FontAwesomeIcon icon={faGithub} />  
                            <FontAwesomeIcon icon={faCode} />
                            </motion.p>
                        </Col>
                        <Col lg={7} className="mt-lg-4 mt-md-4 mt-sm-0">
                            <motion.h3
                            variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="h5 primary-border ubuntu-regular">Education</motion.h3>
                            <motion.p
                            variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="mt-2 roboto-regular">NCC education diploma in computing level (4) <br />
                            Finished 2023-2024
                            </motion.p>
                            <motion.p  
                            variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="roboto-regular">
                            NCC education diploma in computing level (5) <br />
                            Finished 2024-2025
                            </motion.p>
                            <motion.p  
                            variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                            className="roboto-regular">
                            Matriculation Exam <br />
                            Passed
                            </motion.p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} md={5} sm={12} className="order-1 order-lg-2 order-md-2 order-sm-1 d-flex align-items-center">
                    <motion.div variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="mt-3 mt-lg-0 mt-md-0 mt-sm-3 w-100 h-75">
                        <Image className="rounded-5 card-shadow-two w-100 h-100 object-fit-cover" src={Thet} rounded fluid />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="d-flex justify-content-around p-4 bg-dark">
        <motion.p
        variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
        className="display-1 my-auto"><a className="text-secondary" href="https://www.facebook.com/thettetant.aung.3?mibextid=LQQJ4d" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></a></motion.p>
        <motion.p
        variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}}  
        className="display-1 my-auto"><a className="text-secondary" href="https://www.instagram.com/its_tetant?igsh=MXFwcDdsang0NjVkaw%3D%3D&utm_source=qr" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a></motion.p>
        <motion.p 
        variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
        className="display-1 my-auto"><a className="text-secondary" href="https://www.linkedin.com/in/thet-tetant-aung-6b4bb7251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></motion.p>
        <motion.p 
        variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
        className="display-1 my-auto"><a className="text-secondary" href="https://github.com/TeTant555" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /></a></motion.p>
    </div>
    <div className="bg-black pt-5 pb-4">
        <Container>
            <motion.h1
            variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
            className="h2 text-center pb-5 ubuntu-medium">Develop impactful solutions by partnering with brands and organizations.</motion.h1>
            <motion.h1 
            variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
            className="services mx-auto mt-5"><span className="px-2 ubuntu-medium">Services</span></motion.h1>
            <Row className="mt-5">
                <Col className="px-3 py-2" lg={3} md={6} sm={6} xs={6}>
                    <motion.p 
                    variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3"><FontAwesomeIcon icon={faPaintbrush} flip="horizontal" style={{color: "#2A2A2E",}} /><FontAwesomeIcon icon={faPencil} flip="horizontal" style={{color: "#2A2A2E",}} /></motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3 ubuntu-medium">UX</motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="roboto-regular">Enhancing user experience through intuitive design and innovative solutions.</motion.p>
                </Col>
                <Col className="px-3 py-2" lg={3} md={6} sm={6} xs={6}>
                    <motion.p 
                    variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3"><FontAwesomeIcon className="me-2" icon={faReact} /><FontAwesomeIcon icon={faJs} /></motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3 ubuntu-medium">Front-End</motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="roboto-regular">Creating stunning, responsive interfaces for seamless user interactions.</motion.p>
                </Col>
                <Col className="px-3 py-2" lg={3} md={6} sm={6} xs={12}>
                    <motion.p 
                    variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3"><FontAwesomeIcon className="me-2" icon={faLaravel} /><FontAwesomeIcon icon={faPhp} /></motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3 ubuntu-medium">Back-End</motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="roboto-regular">Building robust and scalable server-side applications that power dynamic websites, enhancing performance and data integrity.</motion.p>
                </Col>
                <Col className="px-3 py-2" lg={3} md={6} sm={6} xs={12}>
                    <motion.p 
                    variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3"><FontAwesomeIcon className="me-2" icon={faLightbulb} /><FontAwesomeIcon icon={faStar} /></motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="h3 ubuntu-medium">Innovation</motion.p>
                    <motion.p variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} 
                    className="roboto-regular">Integrating cutting-edge technologies to drive digital transformation, delivering creative solutions that redefine user engagement and satisfaction.</motion.p>
                </Col>
            </Row>
        </Container>
    </div>
    <Footer />
    </>
    );
}

export default About;