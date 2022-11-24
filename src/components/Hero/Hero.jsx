import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import Hero_image from '../../assets/hero_image.png';
import Hero_image_back from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';
import './Hero.css';


import { motion } from 'framer-motion';

const Hero = () => {
    const transition = {type: 'spring', duration: 3}

    return (
        <section className="hero">
            <div className="blur hero-blur"></div>
            <div className="legt-h">
                <Header/>

                <div className="the-best-ad">
                    <motion.div
                        initial={{left: '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div 
                className="heart-rate"
                initial={{right: '-1rem'}}
                whileInView={{right: '2rem'}}
                transition={transition}>
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={Hero_image} alt="Hero_image" className='hero_image'/>
                <motion.img 
                    initial={{right: '10rem'}}
                    whileInView={{right: '18rem'}}
                    transition={transition}
                    src={Hero_image_back} alt="Hero_image_back" className='hero_image_back'/>

                <motion.div 
                  className="calories"
                  initial={{right: '37rem'}}
                  whileInView={{right: '28rem'}}
                  transition={transition}>
                    <img src={Calories} alt="Calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Hero