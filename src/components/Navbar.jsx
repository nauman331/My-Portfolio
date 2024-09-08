import { NavLink } from "react-router-dom"
import "../assets/stylesheets/navbar.css"
import { useTheme } from "../store/store"
import { useHoverRegister } from 'react-cursorify'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"


const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { theme, StoreTheme } = useTheme();
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
    StoreTheme(theme)
  }


  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  }

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }


  const MOBILE_NAV_ITEMS = [
    {
      id: 0,
      navTitle: "Home",
      link: "/"
    },
    {
      id: 1,
      navTitle: "About",
      link: "/aboutme"
    },
    {
      id: 2,
      navTitle: "Projects",
      link: "/projects"
    },
    {
      id: 3,
      navTitle: "Clients",
      link: "/clients"
    },
    {
      id: 4,
      navTitle: "Contact",
      link: "/contact"
    }
  ]

  return (
    <>
      <motion.header
      variants={{
        visible : { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ backgroundColor: theme ? "#011933" : "#FAFAFA" }}>
        <div className="menu-container">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
         <i class="fa-solid fa-bars-staggered"></i>
          </motion.div>
        </div>
        <NavLink className='name' to='/' {...register('pointer')} style={{color: theme ? "#FAFAFA" : "#011933"}}>Muhammad Nauman</NavLink>
        <div className="desktop-nav">
        <NavLink
        style={{color: theme ? "#FAFAFA" : "#011933"}}
        to="/" {...register('pointer')}>
              HomePage
            </NavLink>
            <NavLink
            style={{color: theme ? "#FAFAFA" : "#011933"}}
            to="/aboutme" {...register('pointer')}>
              About
            </NavLink>
            <NavLink
            style={{color: theme ? "#FAFAFA" : "#011933"}}
            to="/projects" {...register('pointer')}>
              Projects
            </NavLink>
            <NavLink
            style={{color: theme ? "#FAFAFA" : "#011933"}}
            to="/clients" {...register('pointer')}>
              Clients
            </NavLink>
        
            <NavLink
            style={{color: theme ? "#FAFAFA" : "#011933"}}
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
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        
        <motion.div variants={mobileMenuVariant} className="mobile-menu" style={{backgroundColor: theme ? "#FAFAFA" : "#011933"}}>
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <i className="fa-solid fa-circle-up" style={{color: theme ? "#011933" : "#FAFAFA"}}></i>
          </motion.button>
          <motion.ul variants={ulVariant}>
            {MOBILE_NAV_ITEMS.map(navItem => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <NavLink to={navItem.link} onClick={() => setMobileNavOpen(false)}><motion.div variants={liVariant} style={{color: theme ? "#011933" : "#FAFAFA"}}>{navItem.navTitle}</motion.div></NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInVariant} className="contact" style={{color: theme ? "#011933" : "#FAFAFA"}}>
            <h5>+92 331 83 888 05</h5>
            <h5>nauman33183@gmail.com</h5>
          </motion.div>
        </motion.div>
      </motion.nav>
   


    </>
  )
}

export default Navbar
