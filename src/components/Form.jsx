import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from "../store/store"
import { useHoverRegister } from 'react-cursorify'
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Form = () => {

    const { theme } = useTheme();
    const register = useHoverRegister()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
       
        const serviceId = 'nauman3254';
        const templateId = 'nomiking3254';
        const publicKey = 'uF1Avn19LD8NOiuo5';
        
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Muhammad Nauman',
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                toast.success("email sent successfull", response);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                toast.error("error sending message, try again!", error)
            });
    };


    return (
        <>
            <form onSubmit={sendEmail}>
                <motion.input
                initial = {{x: -200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                    ease: "linear",
                    duration: .8,
                    delay: .5
                  }}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Your Name'
                    required
                    style={{ border: theme ? "2px solid #FAFAFA" : "2px solid #011933", backgroundColor: theme ? "#011933" : "#FAFAFA", color: theme ? "#FAFAFA" : "#011933" }}
                />
                <motion.input
                 initial = {{x: 200, opacity: 0}}
                 whileInView={{x: 0, opacity: 1}}
                 transition={{
                     ease: "linear",
                     duration: .8,
                     delay: .5
                   }}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Email'
                    required
                    style={{ border: theme ? "2px solid #FAFAFA" : "2px solid #011933", backgroundColor: theme ? "#011933" : "#FAFAFA", color: theme ? "#FAFAFA" : "#011933" }}
                />
                <motion.textarea
                 initial = {{y: 200, opacity: 0}}
                 whileInView={{y: 0, opacity: 1}}
                 transition={{
                     ease: "linear",
                     duration: .8,
                     delay: .5
                   }}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder='Write message...'
                    required
                    cols={30}
                    rows={10}
                    style={{ border: theme ? "2px solid #FAFAFA" : "2px solid #011933", backgroundColor: theme ? "#011933" : "#FAFAFA", color: theme ? "#FAFAFA" : "#011933" }}
                ></motion.textarea>
                <motion.button type="submit"
                 initial = {{scale: 0, opacity: 0}}
                 whileInView={{scale: 1, opacity: 1}}
                 whileHover={{ skew: 10 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
            }}
                 transition={{
                     ease: "linear",
                     duration: .8,
                     delay: .5
                   }}
                style={{ border: theme ? "2px solid #FAFAFA" : "2px solid #011933", backgroundColor: theme ? "#FAFAFA" : "#011933", color: theme ? "#011933" : "#FAFAFA" }}
                {...register('pointer')}
                >Send Message</motion.button>
            </form>
        </>
    )
}

export default Form
