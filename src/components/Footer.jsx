import { useTheme } from "../store/store"
import "../assets/stylesheets/footer.css"


const Footer = () => {
    const { theme } = useTheme();
    return (
        <>
            <footer style={{backgroundColor: theme ? "#F0F8FF" : "#011933", color: theme ? "#011933" : "#F0F8FF"}}>
                <h1>Muhammad Nauman</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6802.1706287006955!2d74.26497756992805!3d31.521816678945076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919031cae328c1f%3A0x54044a41d402d79e!2sLiaqat%20Chowk%20Bus%20Stop!5e0!3m2!1sen!2s!4v1700548151468!5m2!1sen!2s"
                        allowFullScreen=""
                        loading="lazy"
                        style={{width:"100%"}}
                        referrerPolicy="no-referrer-when-downgrade"
                        title='map'
                    >
                    </iframe>
                    <h5>copyright 2022<sup>&#169; </sup>Made By <span className='underline font-extrabold'>MUHAMMAD NAUMAN</span></h5>
              
            </footer>
        </>
    )
}

export default Footer
