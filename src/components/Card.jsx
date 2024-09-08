/* eslint-disable react/prop-types */
import { StackedCarousel } from "react-card-stack-carousel";
import "react-card-stack-carousel/styles/styles.css";
import "../assets/stylesheets/card.css"
import { NavLink } from "react-router-dom";
import { useTheme } from "../store/store";
import { useHoverRegister } from 'react-cursorify'
import { motion } from "framer-motion";


const Card = ({ data }) => {
    const { theme } = useTheme();
    const register = useHoverRegister()

    const containerHeight = 300;
    return (
        <>
                <motion.div style={{margin: "10rem 0rem"}}
                initial = {{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    ease: "linear",
                    duration: .8,
                    delay: .5
                  }}
                >
             <StackedCarousel height={containerHeight}>
                {data.map((item, i) => {
                    return (
                        <motion.div key={i} className="project" style={{backgroundColor: theme ? "#FAFAFA" : "#011933", color: theme ? "#011933" : "#FAFAFA"}}>
                            <img src={item.imgurl} alt={item.name} />
                            <h2>{item.name}</h2>
                            <h5>{item.description}</h5>
                            <NavLink
                            {...register('pointer')}
                            to={item.projectlink} style={{backgroundColor: theme ? "#011933" : "#FAFAFA", color: theme ? "#FAFAFA" : "#011933", padding: "5px 10px", marginTop: "10px"}}>See Demo</NavLink>
                        </motion.div>
                    )
                })}
            </StackedCarousel>
            </motion.div>
        </>
    )
}

export default Card
