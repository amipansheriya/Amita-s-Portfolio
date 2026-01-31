// Home.jsx
import React, { useRef } from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import { IoMdDownload } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import homeImg from "../Images/myimg/homeImg.JPG";
import { useEffect } from "react";

import figma from "../Images/skills img/figma.png";
import html from "../Images/skills img/html.svg";
import css from "../Images/skills img/css.svg";
import js from "../Images/skills img/js.svg";
import bootstrap from "../Images/skills img/bootstrap.png";
import react from "../Images/skills img/reactjs.svg";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";


const Home = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_a2qp5as",
                "AP060702",
                form.current,
                "FiBP1Q0W5RrmdqUDC"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message, try again.");
                }
            );
    }


    useEffect(() => {
        const cursorDot = document.querySelector(".cursor-dot");
        const cursorRing = document.querySelector(".cursor-ring");

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;

            cursorDot.style.left = `${clientX}px`;
            cursorDot.style.top = `${clientY}px`;

            cursorRing.style.left = `${clientX}px`;
            cursorRing.style.top = `${clientY}px`;
        });
    }, []);

    return (
        <>
            {/* Background Blurs */}
            <div className="bg-blur blur-one"></div>
            <div className="bg-blur blur-two"></div>

            <div className="spider-cursor">
                <div className="cursor-dot"></div>
                <div className="cursor-ring"></div>
            </div>

            <Container>
                <Header />
            </Container>
            <div>

                <div className="">
                    <section id="home" className="section home">
                        <Container>
                            <Row>
                                <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                                    <div className="name">
                                        I am Amita
                                    </div>
                                    <div className="">
                                        <h1 className="designation">Experienced Web<br></br>Developer.</h1>
                                    </div>
                                    <div className="description">
                                        Building skills today to create something meaningful tomorrow—one challenge, one lesson, and one line of code at a time.
                                    </div>
                                    <div className="btns">
                                        <span className="hbtn">
                                            <button className="CVbtn"><a href="/CV.pdf" download>Download CV <IoMdDownload className="Downloadicon" /></a></button>
                                        </span>
                                        <span className="SMbtn hbtn">
                                            <button><a href=""><FaTiktok /></a></button>
                                            <button><a href=""><FaLinkedinIn /></a></button>
                                            <button><a href=""><FaInstagram /></a></button>
                                            <button><a href=""><FaYoutube /></a></button>
                                        </span>
                                    </div>
                                </Col>
                                <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                                    <div className="Imagesection">
                                        <div className="image">
                                            <img src={homeImg} alt="myimg" />
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>

                    <section id="about" className="section about">
                        <Container>
                            <Row>
                                <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                    <div className="SectionName">
                                        About
                                    </div>
                                    <div className="SectionSubName">
                                        My Resume
                                    </div>

                                    <p className="about-text">
                                        I am a passionate Full Stack Web Developer with a strong foundation in design and development.
                                        I enjoy building clean, responsive, and user-friendly websites that solve real-world problems.
                                        With experience in modern technologies and a continuous learning mindset, I always strive
                                        to improve my skills and deliver high-quality digital solutions.
                                    </p>

                                </Col>
                            </Row>
                            <Row>
                                <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                                    <div className="subSectionL m-5">
                                        Education
                                    </div>
                                    <ul className="vertical-list">
                                        <li>
                                            <h5>Bachelor of Computer Applications (BCA)</h5>
                                            <p>Saurashtra University</p>
                                        </li>

                                        <li>
                                            <h5>Master’s Degree (Running)</h5>
                                            <p>Frankfurt University of Applied Sciences</p>
                                        </li>

                                        <li>
                                            <h5>School</h5>
                                            <p>Gajera Vidhyabhavan, Utran</p>
                                        </li>
                                    </ul>

                                </Col>
                                <Col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                                    <div className="subSectionR m-5">
                                        Work Experience
                                    </div>

                                    <ul className="vertical-list right">
                                        <li>
                                            <h5>Full Stack Web Developer</h5>
                                            <p>Snepitech Infotech</p>
                                            <span>1.5 Years</span>
                                        </li>

                                        <li>
                                            <h5>Trainer</h5>
                                            <p>Pari Design and Multimedia Institute</p>
                                        </li>

                                        <li>
                                            <h5>Trainee</h5>
                                            <p>Creative Design and Multimedia Institute</p>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section id="services" className="section services">
                        <Container>
                            <Row>
                                <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                    <div className="SectionName">
                                        Services
                                    </div>
                                    <div className="SectionSubName">
                                        My Skills
                                    </div>
                                    <div>
                                        <center>
                                            <p className="HeadParagraph">Continuously learning, building, and refining skills to deliver smarter and more meaningful digital solutions.</p>
                                        </center>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-5">
                                <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                    <div className="skills-grid">

                                        <div className="skill-card">
                                            <img src={figma} alt="Figma" />
                                            <p>Figma</p>
                                        </div>

                                        <div className="skill-card">
                                            <img src={html} alt="HTML" />
                                            <p>HTML</p>
                                        </div>

                                        <div className="skill-card">
                                            <img src={css} alt="CSS" />
                                            <p>CSS</p>
                                        </div>

                                        <div className="skill-card">
                                            <img src={js} alt="JavaScript" />
                                            <p>JavaScript</p>
                                        </div>

                                        <div className="skill-card">
                                            <img src={bootstrap} alt="Bootstrap" />
                                            <p>Bootstrap</p>
                                        </div>

                                        <div className="skill-card">
                                            <img src={react} alt="React" />
                                            <p>React</p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section id="contact" className="section contact">
                        <Container>
                            <Row>
                                <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
                                    <div className="SectionName">
                                        Contact
                                    </div>
                                    <div className="SectionSubName">
                                        Let’s work together!
                                    </div>
                                    <center>
                                        <p className="HeadParagraph">
                                            Have an idea or a project in mind? Let’s connect and build something meaningful together.
                                        </p>
                                    </center>
                                </Col>
                            </Row>

                            <Row className="mt-5 align-items-center">

                                {/* Left: Contact Info */}
                                <Col xxl="5" xl="5" lg="5" md="12" sm="12" xs="12">
                                    <div className="visiting-card">

                                        <div className="vc-header">
                                            <h3>Amita Pansheriya</h3>
                                            <span>Full Stack Web Developer</span>
                                        </div>

                                        <div className="vc-body">

                                            <div className="vc-item">
                                                <i className="fas fa-envelope"></i>
                                                <p><a href="mailto:amipansheriya2002@gmail.com?subject=Contact from Website">amipansheriya2002@gmail.com</a></p>
                                            </div>

                                            <div className="vc-item">
                                                <i className="fas fa-phone-alt"></i>
                                                <p><a href="tel:+49 176">+49 176 31420054</a></p>
                                            </div>

                                            <div className="vc-item">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <p><a href="https://www.google.com/maps?q=Frankfurt+Germany"
                                                    target="_blank"
                                                    rel="noopener noreferrer">Germany / India</a></p>
                                            </div>

                                        </div>

                                        <div className="vc-footer">
                                            <span>Let’s build something meaningful 🚀</span>
                                        </div>

                                    </div>
                                </Col>



                                {/* Right: Contact Form */}
                                <Col xxl="7" xl="7" lg="7" md="12" sm="12" xs="12">
                                    <form className="contact-form" ref={form} onSubmit={sendEmail}>

                                        <Row>
                                            <Col md="6">
                                                <input type="text" name="user_name" placeholder="Your Name" />
                                            </Col>

                                            <Col md="6">
                                                <input type="email" name="user_email" placeholder="Your Email" />
                                            </Col>
                                        </Row>

                                        <input type="text" placeholder="Subject" />

                                        <textarea rows="5" name="message" placeholder="Your Message"></textarea>

                                        <button type="submit" className="contact-btn">
                                            Send Message
                                        </button>

                                    </form>
                                </Col>

                            </Row>
                        </Container>
                    </section>
                </div>

            </div>

            <Container>
                <Footer />
            </Container>
        </>
    );
};

export default Home;
