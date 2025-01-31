import React from "react";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.sass';
import './fonts.css';
import Lottie from "lottie-react"
import codescreen from "../Animation/codescreen.json"
import nasadeveloper from "../Animation/nasadeveloper.json"
import js from "../Animation/js.json"
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faCode, faG } from "@fortawesome/free-solid-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import Worktogether from "./Worktogether";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Experience = () => {
  const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); 

    return ( 
    <>
    <div className="bg-black">
        <Container className="mt-4 pt-5">
            <figure class="text-center">
                <motion.blockquote
                variants={fadeIn("up", 0.1)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}} class="blockquote">
                    <p className="h2 roboto-regular">"First, solve the problem. Then, write the code."</p>
                </motion.blockquote>
                <motion.p
                variants={fadeIn("up", 0.1)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}} className="h4 ubuntu-medium text-primary">John Johnson</motion.p>
            </figure>
            <motion.div
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.2}}>
              <Row className="py-5">
                  <Col className="d-flex align-items-center justify-content-end"><Lottie className="animation-custom" animationData={nasadeveloper}></Lottie></Col>
                  <Col className="d-flex align-items-center justify-content-start"><Lottie className="animation-custom" animationData={codescreen}></Lottie></Col>
              </Row>
            </motion.div>
        </Container>
    </div>
    <div className="bg-dark">
        <Container className="bg-dark">
            <motion.h1
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.2}}
            className="h2 bg-dark text-center text-primary pt-4 ubuntu-medium">Skills</motion.h1>
            
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{once: false, amount: 0.2}}
              className="d-flex flex-wrap justify-content-center py-4">
              
              {[
                { icon: faCode, name: "HTML" },
                { icon: faCss3, name: "CSS" },
                { icon: faJs, name: "JS" },
                { icon: faReact, name: "REACT" },
                { icon: faPhp, name: "PHP" },
                { icon: faGit, name: "GIT" }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="card-shadow skillwidth p-4 m-2 lh-1 bg-secondary text-white rounded-4">
                  <p className="text-center text-black display-3">
                    <FontAwesomeIcon icon={skill.icon} />
                  </p>
                  <p className="h4 text-center roboto-regular">{skill.name}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.2}}
            className="d-flex align-items-center justify-content-center w-100 h-auto">
              <Lottie className="animation-custom" animationData={js}></Lottie>
            </motion.div>
        </Container>
    </div>
    <Worktogether/>
    <Footer/>
    </>
    );
}

export default Experience;