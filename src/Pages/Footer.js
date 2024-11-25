import 'bootstrap/dist/css/bootstrap.min.css';
import './Toggler.css';
import './Custom.sass';
import './fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from './Variants';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <>
            <motion.div 
            className='bg-dark d-flex p-2 flex-wrap'>
                    <section className='p-4 space-between-footer'>
                        <div>
                            <motion.h5 
                            variants={fadeIn("up", 0.1)}
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{once: false, amount: 0.2}} className='text-secondary ubuntu-regular mb-4 text-nowrap'><FontAwesomeIcon style={{color: "#364CE4",}} icon={faConnectdevelop} /> Developed by Thet Tetant Aung</motion.h5>
                            <motion.p 
                            variants={fadeIn("up", 0.5)}
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{once: false, amount: 0.2}} className='text-secondary mb-2 roboto-regular'><FontAwesomeIcon icon={faLocationDot} /> North Dagon, Yangon</motion.p>
                            <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{once: false, amount: 0.2}} className='text-secondary mb-2 roboto-regular'><FontAwesomeIcon icon={faEnvelope} /> thettetantaung@gmail.com</motion.p>
                            <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{once: false, amount: 0.2}} className='text-secondary roboto-regular'><FontAwesomeIcon icon={faPhone} /> +959 782 887 963</motion.p>
                        </div>
                    </section>
                    <section className='p-4 d-flex justify-content-lg-evenly justify-content-md-start justify-content-sm-start w-50'>
                            <div>
                                <motion.h5 
                                variants={fadeIn("up", 0.1)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className='text-secondary ubuntu-regular mb-3 text-nowrap'>Social Media</motion.h5>
                                <a href="https://www.facebook.com/thettetant.aung.3?mibextid=LQQJ4d" target='_blank' className='text-decoration-none'><motion.p
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className='text-secondary mb-1 text-nowrap roboto-regular'><FontAwesomeIcon icon={faSquareFacebook} /> Facebook</motion.p></a>
                                <a href="https://www.instagram.com/its_tetant?igsh=MXFwcDdsang0NjVkaw%3D%3D&utm_source=qr" target='_blank' className='text-decoration-none'><motion.p
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className='text-secondary mb-1 text-nowrap roboto-regular'><FontAwesomeIcon icon={faSquareInstagram} /> Instagram</motion.p></a>
                                <a href="https://www.linkedin.com/in/thet-tetant-aung-6b4bb7251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' className='text-decoration-none'><motion.p
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className='text-secondary mb-1 text-nowrap roboto-regular'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</motion.p></a>
                                <a href="https://github.com/TeTant555/Personal.git" target='_blank' className='text-decoration-none'><motion.p
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className='text-secondary mb-1 text-nowrap roboto-regular'><FontAwesomeIcon icon={faSquareGithub} /> Github</motion.p></a>
                            </div>
                            <div className='ms-5'>
                                <motion.h5 
                                variants={fadeIn("up", 0.1)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className="text-secondary mb-3 ubuntu-regular text-nowrap">Support</motion.h5>
                                <motion.p
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className="text-secondary mb-1 text-nowrap roboto-regular">Contact</motion.p>
                                <motion.p
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className="text-secondary mb-1 text-nowrap roboto-regular">About</motion.p>
                                <motion.p
                                variants={fadeIn("up", 0.5)}
                                initial={"hidden"}
                                whileInView={"show"}
                                viewport={{once: false, amount: 0.2}} className="text-secondary mb-1 text-nowrap roboto-regular">Experience</motion.p>
                            </div>
                    </section>
            </motion.div>
        </>
    );
};

export default Footer;