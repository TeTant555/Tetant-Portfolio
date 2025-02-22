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

    const skillSections = [
      {
        title: "Frontend & UI/UX",
        animation: js,
        skills: [
          { name: "HTML", icon: faCode },
          { name: "CSS", icon: faCss3 },
          { name: "JS", icon: faJs },
          { name: "TS", icon: faCode },
          { name: "React", icon: faReact },
          { name: "Redux", icon: faCode },
          { name: "TW", icon: faCss3 },
          { name: "UI/UX", icon: faCode },
        ]
      },
      {
        title: "Back-end Development and Database",
        animation: codescreen,
        skills: [
          { name: "Node.js", icon: faCode },
          { name: "Express", icon: faCode },
          { name: "PHP", icon: faPhp },
          { name: "MySQL", icon: faCode },
          { name: "MongoDB", icon: faCode },
          { name: "REST API", icon: faCode },
        ]
      }
    ];

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
    <div>
        <Container style={{ width: "100%", maxWidth: "75vw" }}>
            <motion.h1
            variants={fadeIn("up", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.2}}
            className="h2 text-center text-secondary pt-4 ubuntu-medium">Skills and Experiences</motion.h1>
            {skillSections.map((section, index) => (
                <div key={index}>
                    <motion.h1
                        variants={fadeIn("up", 0.1)}
                        initial={"hidden"}
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2}}
                        className="fs-3 text-left text-primary p-4 ubuntu-medium"
                    >
                        {section.title}
                    </motion.h1>
                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        initial={"hidden"}
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2}}
                        className="d-flex mb-4 justifty-content-center align-items-center flex-column p-3 flex-md-row poster-shadow"
                    >
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{once: false, amount: 0.2}}
                            className="w-100 w-md-50 p-4"
                        >
                            <Lottie className="animation-custom" animationData={section.animation}></Lottie>
                        </motion.div>
                        <motion.div className="w-100 w-md-50 p-4">
                            <p className="h4 text-center ubuntu-medium mb-4">
                                {section.title.split(" ")[0]}
                            </p>
                            <div className="tech-container d-flex flex-wrap justify-content-center gap-3">
                                {section.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="tech-box rounded-2 text-white">
                                        <FontAwesomeIcon icon={skill.icon} className="me-2" /> {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            ))}
        </Container>
    </div>
    <Worktogether/>
    <Footer/>
    </>
    );
}

export default Experience;