import React, { useEffect, useRef, useState } from "react";
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
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const Homepage = () => {
  const { theme } = useTheme();
  const register = useHoverRegister();
  const sectionRef = useRef(null);
  const [currentRole, setCurrentRole] = useState("FRONTEND");
  const [loading, setLoading] = useState(true);

  const roles = ["FRONTEND", "BACKEND", "FULL STACK", "ANDROID", "IOS"];

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
      scaleMobile: 1.00,
      color: front,
      color2: front,
      size: 0.7,
      backgroundColor: bg,
    });
    // Delay hiding the loading screen for at least 2 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      clearTimeout(loadingTimeout);  // Clear timeout if the component unmounts early
    };
  }, [theme]);

  useEffect(() => {
    // Change role every 2 seconds
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const nextIndex = (roles.indexOf(prevRole) + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(roleInterval); // Clear interval on unmount
  }, []);

  return (
    <>
      <section className="home-section">
        <div ref={sectionRef} className="homer">
          {/* Background overlay for mobile mode */}
          <div className="homer-overlay"></div>

          <SocialBox />
          <div className="name" style={{ marginTop: "5rem" }}>
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 0.8,
                delay: 0.5,
              }}
            >
              Hello,
            </motion.h3>
            <motion.h3
              initial={{ rotate: "0deg" }}
              whileInView={{ rotate: "360deg" }}
              transition={{
                delay: 0.5,
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
                duration: 0.8,
                delay: 0.5,
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
                duration: 0.8,
                delay: 0.5,
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
                duration: 0.8,
                delay: 0.5,
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
                duration: 0.8,
                delay: 0.5,
              }}
              className="home-para"
            >
              I am a{" "}
              <motion.span
                key={currentRole}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: "large",
                  fontWeight: "bolder",
                  borderBottom: "2px solid",
                }}
              >
                {currentRole}
              </motion.span>{" "}
              developer with 2+ years of freelancing experience.
            </motion.p>
            <motion.div
              initial={{ y: -300 }}
              whileInView={{ y: 50 }}
              transition={{
                ease: "linear",
                duration: 0.8,
                delay: 0.5,
              }}
            >
              <NavLink
                to="/cvpage"
                className={theme ? "cv-dark-button cv" : "cv-light-button cv"}
                {...register("pointer")}
              >
                Show Cv
              </NavLink>
            </motion.div>
          </div>
          <div style={{ marginTop: "5rem" }}>
            <SvgAnimation id={1} />
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div>
            <About />
            <SvgAnimation id={2} />
            <Projects />
            <SvgAnimation id={3} />
            <Clients />
            <SvgAnimation id={4} />
            <Contact />
            <Footer />
          </div>
        )}
      </section>
    </>
  );
};

export default Homepage;
