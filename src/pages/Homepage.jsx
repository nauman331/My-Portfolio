import React, { useEffect, useRef } from "react";
import "../assets/stylesheets/home.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../store/store";
import { useHoverRegister } from 'react-cursorify';
import About from './About';
import Projects from './Projects';
import Clients from './Clients';
import Contact from './Contact';
import SvgAnimation from "../components/SvgAnimation";
import SocialBox from "../components/SocialBox";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min'; 

const Homepage = () => {
  const { theme } = useTheme();
  const register = useHoverRegister();
  const sectionRef = useRef(null);
  var bg = theme ? "#011933" : "#FAFAFA";
  var front = theme ? '#FAFAFA' : "#011933";
  
  useEffect(() => {
    const vantaEffect = GLOBE({
      el: sectionRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 0.3,
      color: front,
      color2: front,
      size: 0.60,
      backgroundColor: bg,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]);

  return (
    <section  className="home-section">
      <div ref={sectionRef}>
      <SocialBox />
      <div className="name" style={{marginTop: "5rem"}}>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: .8,
            delay: .5,
          }}
        >
          Hello,
        </motion.h3>
        <motion.h3
          initial={{ rotate: "0deg" }}
          whileInView={{ rotate: "360deg" }}
          transition={{
            delay: .5,
          }}
          className="shake"
        >
          👋
        </motion.h3>
        <motion.h3
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: .8,
            delay: .5,
          }}
        >
          I am
        </motion.h3>
      </div>
      <div className="name">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: .8,
            delay: .5,
          }}
          className="first"
        >
          Muhammad
        </motion.h1>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: .8,
            delay: .5,
          }}
          className="second"

        >
          Nauman
        </motion.h1>
      </div>
      <div className="under">
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: .8,
          delay: .5,
        }}
        className="home-para"
      >
        I am a MERN FULL STACK web developer with 2+ years of freelancing experience in Frontend web development
      </motion.p>
      <motion.div
        initial={{ y: -300 }}
        whileInView={{ y: 50 }}
        transition={{
          ease: "linear",
          duration: .8,
          delay: .5,
        }}
      >
        <NavLink
          to="/cvpage"
          className={theme ? 'cv-dark-button cv' : 'cv-light-button cv'}
          {...register('pointer')}
        >
          Show Cv
        </NavLink>
      </motion.div>
      </div>
      <div style={{marginTop: "5rem"}}>
      <SvgAnimation id={1} />
      </div>
      </div>
      <About />
      <SvgAnimation id={2} />
      <Projects />
      <SvgAnimation id={3} />
      <Clients />
      <SvgAnimation id={4} />
      <Contact />
      <Footer />
    </section>
  );
};

export default Homepage;
