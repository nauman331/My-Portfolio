
import { useTheme } from "../store/store"
import { useHoverRegister } from 'react-cursorify'
import "../assets/stylesheets/socialbox.css"
import { motion } from "framer-motion"

const SocialBox = () => {
    const { theme } = useTheme();
    const register = useHoverRegister()
    return (
        <>
            <motion.div
            title="grab me and throw me"
            drag 
            dragConstraints={{ top: -125, left: -12, right: 400, bottom: 300 }}
             whileDrag={{ scale: 1.2 }}
             dragElastic={.1}
              whileHover={{ cursor: 'grabbing' }}
             dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: .5 }}
            className="social-media" style={{backgroundColor: theme ? "#011945" : "white"}}>
        <a href='https://github.com/nauman331' {...register('pointer')}>
        <i className="fa-brands fa-github" style={{color: theme ? "white" : "#011933"}}></i>
        </a>
        <a href='https://www.facebook.com/profile.php?id=100091209582055&mibextid=dZk1I5icssMIZk4L' {...register('pointer')}>
        <i className="fa-brands fa-facebook" style={{color: theme ? "white" : "#011933"}}></i>
        </a>
        <a href='https://www.linkedin.com/in/muhammad-nauman-72a2b2298?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=android_app' {...register('pointer')}>
        <i className="fa-brands fa-linkedin" style={{color: theme ? "white" : "#011933"}}></i>
        </a>
        <a href='https://wa.me/+923318388805' {...register('pointer')}>
        <i className="fa-brands fa-square-whatsapp" style={{color: theme ? "white" : "#011933"}}></i>
        </a>
      </motion.div>
        </>
    )
}

export default SocialBox
