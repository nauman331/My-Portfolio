/* eslint-disable react/prop-types */
import { StackedCarousel } from "react-card-stack-carousel";
import "react-card-stack-carousel/styles/styles.css";
import "../assets/stylesheets/card.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../store/store";
import { useHoverRegister } from 'react-cursorify';
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({ data }) => {
  const { theme } = useTheme();
  const register = useHoverRegister();
  const [category, setCategory] = useState("all");
  const containerHeight = 300;

  const filteredData = data.filter(item => category === "all" || item.category === category);

  return (
    <>
      <div className="filter-buttons">
        {["all", "frontend", "fullstack"].map(cat => (
          <button
            key={cat}
            style={{ backgroundColor: theme ? "#FAFAFA" : "#011933", color: theme ? "#011933" : "#FAFAFA" }}
            onClick={() => setCategory(cat)}
            {...register('pointer')}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/stack/, ' Stack')}
          </button>
        ))}
      </div>
      <motion.div
        style={{ margin: "10rem 0rem" }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 0.8, delay: 0.5 }}
      >
        <StackedCarousel height={containerHeight}>
          {filteredData.map((item, i) => (
            <motion.div key={i} className="project" style={{ backgroundColor: theme ? "#FAFAFA" : "#011933", color: theme ? "#011933" : "#FAFAFA" }}>
              <img src={item.imgurl} alt={item.name} />
              <h2>{item.name}</h2>
              <h5>{item.description}</h5>
              <NavLink
                {...register('pointer')}
                to={item.projectlink}
                style={{ backgroundColor: theme ? "#011933" : "#FAFAFA", color: theme ? "#FAFAFA" : "#011933", padding: "5px 10px", marginTop: "10px" }}
              >
                See Demo
              </NavLink>
            </motion.div>
          ))}
        </StackedCarousel>
      </motion.div>
    </>
  );
};

export default Card;
