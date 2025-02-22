import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Custom.sass';
import './fonts.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { fadeIn } from './Variants';
import { useNavigate } from 'react-router-dom';

const Worktogether = () => {
    const navigate = useNavigate();
    const ToContactUs = () => {
        navigate('/Contact')
    };

    return (
    <motion.div
    className="bg-black py-5">
        <Container className="d-flex align-items-center">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.2}}>
                <Card className="col-12 col-lg-10 mx-auto p-2 bg-dark card-shadow">
                    <Card.Body>
                        <Card.Title className="h1 fs-2 mb-3 text-secondary ubuntu-medium">Let's work together on <br /> your next project</Card.Title>
                        <Card.Text className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column align-items-center">
                            <div className="w-auto pe-lg-5 pe-md-0 pe-sm-0 pe-0 text-secondary text-start mb-3 roboto-regular">
                                We thrive on collaboration, where innovation meets expertise. By working closely with our clients and 
                                the coding community, we transform ideas into impactful solutions. Let’s build something extraordinary together!
                            </div>
                            <div className="mx-auto col-12 col-lg-2">
                                <Button onClick={ToContactUs} className="fs-6 ubuntu-regular" variant="primary">Contact</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </motion.div>
        </Container>
    </motion.div>
    );
}

export default Worktogether;