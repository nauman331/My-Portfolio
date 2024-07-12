import "../assets/stylesheets/home.css"
import { NavLink } from "react-router-dom"
import { useTheme } from "../store/store"
import { useHoverRegister } from 'react-cursorify'
import About from './About';
import Projects from './Projects';
import Clients from './Clients';
import Contact from './Contact';
import SvgAnimation from "../components/SvgAnimation"
import SocialBox from "../components/SocialBox"
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Homepage = () => {

    const { theme } = useTheme();
    const register = useHoverRegister()


    return (
        <>

            <section className="home-section">
                <SocialBox />
                <div className="name" style={{marginTop: "5rem"}}>
                    <motion.h3
                    initial = {{x: -100}}
                    whileInView={{x: 0}}
                    transition={{
                        ease: "linear",
                        duration: .8,
                      }}
                    >Hello, </motion.h3>
                    <motion.h3
                    initial = {{rotate: "0deg"}}
                    whileInView={{rotate: "360deg"}}
                    className="shake">👋</motion.h3>
                    <motion.h3
                    initial = {{x: 100}}
                    whileInView={{x: 0}}
                    transition={{
                        ease: "linear",
                        duration: .8,
                      }}
                    >I am</motion.h3>
                </div>
                <div className="name"><motion.h1
                initial = {{y: -100}}
                whileInView={{y: 0}}
                transition={{
                    ease: "linear",
                    duration: .8,
                  }}
                className="first">Muhammad</motion.h1><motion.h1 
                initial = {{y: 100}}
                whileInView={{y: 0}}
                transition={{
                    ease: "linear",
                    duration: .8,
                  }}
                className="second">Nauman</motion.h1></div>
           <motion.p
            initial = {{scale: 0, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{
                ease: "linear",
                duration: .8,
              }}
           className="home-para">I am a MERN FULL STACK web developer with 2+ years of freelancing experience in Frontend web development</motion.p>
           <NavLink
           to='/cvpage' className={theme ? 'cv-dark-button cv' : 'cv-light-button cv'}
           {...register('pointer')}
           >Show Cv</NavLink>
            
            <SvgAnimation id={1}/>
            <About />
            <SvgAnimation id={2}/>
            <Projects />
            <SvgAnimation id={3}/>
            <Clients />
            <SvgAnimation id={4}/>
            <Contact />
            <Footer />
            </section>
        </>
    )
}

export default Homepage
