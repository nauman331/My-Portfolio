/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-3d-carousel';
import { useTheme } from "../store/store"
import { motion } from 'framer-motion';

const ClientCard = ({ data }) => {

const { theme } = useTheme();

    return (
        <>     

             <Carousel showArrows={false}>
                {
                    data.map((item, index) => {
                        return (
                            <motion.div 
                            initial = {{y: 300, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{
                                ease: "linear",
                                duration: .8,
                                delay: .5
                              }}
                            key={index} className='client-card' style={{backgroundColor: theme ? "#FAFAFA" : "#011933", color: theme ? "#011933" : "#FAFAFA"}}>
                                <div className="name-img">
                                <img src={item.imgurl} alt={item.name} />
                                <h3>{item.name}</h3>
                                </div>
                                <p>{item.description}</p>
                            </motion.div>
                      )
                    })
                }
                </Carousel>   
            
        </>
    )
}

export default ClientCard
