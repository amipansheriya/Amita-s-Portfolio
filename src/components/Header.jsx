// Header.jsx
import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Header.css"
import DarkBrand from "../Images/Brand/dark.png";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [isSticky, setIsSticky] = useState(false);
    const [activeMenu, setActiveMenu] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    console.log(width);


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

            if (window.innerWidth > 768) {
                setMobileMenuOpen(false);
            }

        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150); // trigger after 80px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveMenu(id);
        }
    };

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);


    return (

        <>
            {/* Mobile Menu */}
            {width <= 768 && mobileMenuOpen && (
                <div className="MobileMenu">
                    <ul>
                        {["home", "about", "services", "contact"].map((item) => (
                            <li
                                key={item}
                                className={activeMenu === item ? "active" : ""}
                                onClick={() => {
                                    scrollToSection(item);
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            <div className={`Header ${isSticky ? "sticky fly-in container" : ""}`} F>
                <Row>

                    {/* Brand */}
                    <Col xxl="6" xl="6" lg="5" md="4" sm="6" xs="6"
                        className="d-flex align-items-center justify-content-start">
                        <div className='Brand'>
                            <img src={DarkBrand} alt="Brand" />
                        </div>
                    </Col>

                    {/* Menu / Hamburger */}
                    {width > 768 ? (
                        <>
                            <Col xxl="4" xl="4" lg="5" md="6" className="d-flex align-items-center justify-content-end">
                                <div className='MenuBar'>
                                    <ul>
                                        {["home", "about", "services", "contact"].map((item) => (
                                            <li
                                                key={item}
                                                className={activeMenu === item ? "active" : ""}
                                                onClick={() => scrollToSection(item)}
                                            >
                                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>

                            <Col xxl="2" xl="2" lg="2" md="2"
                                className="d-flex align-items-center justify-content-end">
                                <button className='Hirebtn'>Hire Me</button>
                            </Col>

                        </>
                    ) : (
                        <>

                            {/* Hire Button */}
                            <Col sm="5" xs="5"
                                className="d-flex align-items-center justify-content-end">
                                <button className='Hirebtn HirebtnS'>Hire Me</button>
                            </Col>
                            <Col sm="1" xs="1" className="d-flex align-items-center justify-content-end">
                                <div
                                    className="menu-icon"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                                </div>


                            </Col>
                        </>
                    )}



                </Row>
            </div>
        </>
    );
};

export default Header;
