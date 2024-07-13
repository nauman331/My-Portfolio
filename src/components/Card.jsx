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
                initial = {{scale: 0, opacity: 0, rotate: 0}}
                whileInView={{scale: 1, opacity: 1, rotate: 360}}
                transition={{
                    ease: "linear",
                    duration: .8,
                  }}
                >
             <StackedCarousel height={containerHeight}>
                {data.map((item, i) => {
                    return (
                        <motion.div key={i} className="project" style={{backgroundColor: theme ? "#fafafa" : "#240750", color: theme ? "#240750" : "#fafafa"}}>
                            <img src={item.imgurl} alt={item.name} />
                            <h2>{item.name}</h2>
                            <h5>{item.description}</h5>
                            <NavLink
                            {...register('pointer')}
                            to={item.projectlink} style={{backgroundColor: theme ? "#240750" : "#fafafa", color: theme ? "#fafafa" : "#240750", padding: "5px 10px", marginTop: "10px"}}>See Demo</NavLink>
                        </motion.div>
                    )
                })}
            </StackedCarousel>
            </motion.div>
        </>
    )
}

export default Card
