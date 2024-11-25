import Footer from "./Footer";
import './fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.sass';
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Lottie from "lottie-react";
import email from "../Animation/email.json"
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import emailjs from '@emailjs/browser';

const Contact = () => {

    // Emailjs api
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); 
    
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('Your Message');

    // Human Check
    const [your_name, setyour_name] = useState('Your Name');
    const [email_add, setemail_add] = useState('Email Address');
    const [danger, set_danger] = useState('#2A2A2E');

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_kftdjwa';
        const templateId = 'template_q1htzqo';
        const publicKey = 'YInoOJskkqtNeJHN1';

        const templateParams = {
            from_name: name,
            from_email: mail,
            to_name: 'Thet Tetant Aung',
            message: message,
        };

        if (name === "" && mail === "") {
            set_danger("#dc3545");
            setyour_name("Please enter the name");
            setemail_add("Please enter the email address");
        } else if (name === "" && mail !== "") {
            set_danger("#dc3545");
            setyour_name("Please enter the name");
        } else if (name !== "" && mail === "") {
            set_danger("#dc3545");
            setemail_add("Please enter the email addess");
        } else {
            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setMail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
        }
    }

    return ( 
    <>
    <div className="bg-black">
        <Container className="bg-black mt-2 pt-5 d-flex flex-wrap-reverse flex-lg-nowrap flex-md-wrap-reverse flex-sm-wrap-reverse">
            <div className="w-100">
                <motion.h1 variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}}  className="text-secondary mt-3 h1 ubuntu-regular">Contact us</motion.h1>
                <motion.p variants={fadeIn("up", 0.1)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}}  className="text-secondary roboto-regular">Get in touch and let us know how we can help</motion.p>
                <motion.div variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} >
                    <Form onSubmit={handleSubmit}>
                        <Row className="g-2 mb-3">
                            <Col sm>
                                <FloatingLabel style={{color: danger}} className="roboto-regular" controlId="floatingInputGrid" label={your_name}>
                                <Form.Control className="form-bg text-secondary cursor" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                            <Col sm>
                                <FloatingLabel style={{color: danger}} className="roboto-regular" controlId="floatingInputGrid" label={email_add}>
                                <Form.Control type="email" className="form-bg cursor text-secondary" placeholder="name@gmail.com" value={mail} onChange={(e) => setMail(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3 roboto-regular" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" className="form-bg cursor text-secondary" value={message} rows={6} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" size="md" type="submit" className="mb-4 w-100 roboto-regular">Send Email</Button>
                    </Form>
                </motion.div>
            </div>
            <motion.div variants={fadeIn("up", 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.2}} >
                <Lottie className="w-75 mx-auto" animationData={email}></Lottie>
            </motion.div>
        </Container>
    </div>
    <Footer/>
    </>
    );
}

export default Contact;