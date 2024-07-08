import { NavLink } from "react-router-dom"
import "../assets/stylesheets/navbar.css"
import { useTheme } from "../store/store"
import { useHoverRegister } from 'react-cursorify'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"


const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const { theme, StoreTheme, StoreNav, show } = useTheme();
  const register = useHoverRegister()
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const HandleTheme = () => {
    StoreTheme(!theme)
  }
  const HandleShow = () => {
    StoreNav(!show)
  }


  return (
    <>
      <motion.header
      variants={{
        visible : { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ backgroundColor: theme ? "#240750" : "#fafafa" }}>
        <NavLink to='/' {...register('pointer')} style={{color: theme ? "#fafafa" : "#240750"}}>Muhammad Nauman</NavLink>
        <div className="desktop-nav">
        <NavLink
        style={{color: theme ? "#fafafa" : "#240750"}}
        to="/" {...register('pointer')}>
              HomePage
            </NavLink>
            <NavLink
            style={{color: theme ? "#fafafa" : "#240750"}}
            to="/aboutme" {...register('pointer')}>
              About
            </NavLink>
            <NavLink
            style={{color: theme ? "#fafafa" : "#240750"}}
            to="/projects" {...register('pointer')}>
              Projects
            </NavLink>
            <NavLink
            style={{color: theme ? "#fafafa" : "#240750"}}
            to="/clients" {...register('pointer')}>
              Clients
            </NavLink>
        
            <NavLink
            style={{color: theme ? "#fafafa" : "#240750"}}
            to="/contact" {...register('pointer')}>
              Contact
            </NavLink>
            </div>
        <ul>
          <motion.button
            {...register('pointer')}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%"
            }}
            onClick={(() => {
              HandleTheme()
            })}><i className={theme ? "fa fa-sun" : "fa fa-moon"} aria-hidden="true"></i></motion.button>
        </ul>
      </motion.header>
      <motion.nav
      variants={{
        visible : { y: "-50%" },
        hidden: { y: "100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={theme ? "nav" : "nav nav-light"}>
        <motion.input
        id={theme ? "menu" : "menu menu-light"} type="checkbox" />
        <motion.label htmlFor={theme ? "menu" : "menu menu-light"}  {...register('pointer')}
          onClick={HandleShow}
        ><i className="fas fa-plus" aria-hidden="true"
          style={{ transform: show ? 'rotate(45deg)' : 'rotate(0deg)', transition: '.5s transform ease', scale: '1.5' }}
        ></i></motion.label>
        <ul className={theme ? "menu" : "menu menu-light"}>
          <li>
            <NavLink to="/aboutme" {...register('pointer')}>
              <span>About</span>
              <i className="fas fa-address-card" aria-hidden="true"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" {...register('pointer')}>
              <span>Projects</span>
              <i className="fas fa-tasks" aria-hidden="true"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" {...register('pointer')}>
              <span>Clients</span>
              <i className="fas fa-users" aria-hidden="true"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" {...register('pointer')}>
              <span>Contact</span>
              <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
            </NavLink>
          </li>
        </ul>
      </motion.nav>
    </>
  )
}

export default Navbar
