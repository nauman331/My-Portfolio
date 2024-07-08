import "../assets/stylesheets/about.css"
import { useTheme } from "../store/store"
import { motion } from "framer-motion";


const About = () => {

const skills = ["REACT JS", "NEXTJS", "TAILWIND CSS", "NODEJS", "EXPRESS JS", "MONGO DB", "SOLIDITY JS", "FRAMER MOTION", "GIT/ GITHUB", "OOPS", "MVC PATTERN", "POSTMAN/ INSONMIA"]
const { theme } = useTheme();

    return (
        <>
        <section className="about-section">
            <div className="about">
            <h1>About Me</h1>
            <motion.p
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0,}}
             transition={{ type: "spring", stiffness: 100 }}
            className="about-para">
            Aside of tech i have 2+ years of Mathematics and Computer Science Teaching experience. I am also working as a freelancer and its my side hustle because currently I am a student of BS Computer Science at Punjab University Lahore and now I am learning new skills because I love to explore new technology.
            </motion.p>
            </div>
            <motion.div className="skills"
             initial={{ opacity: 0, x: 100 }}
             whileInView={{ opacity: 1, x: 0,}}
             transition={{ type: "spring", stiffness: 100 }}
            >
                {
                    skills.map(item => 
                        <div key={item}>
                        <motion.h3 className={ theme ? "skill-dark" : "skill-light"}
                        initial={{y: 20, opacity: 0}}
                        whileInView={{ y: 0, opacity: 1}}
                        >{item}</motion.h3>
                        </div>
                    )
                }
            </motion.div>
        </section>
        </>
    )
}

export default About
