import React from 'react'
import "./hero.scss"
import { mirrorEasing, motion } from 'framer-motion'


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1, 
        },
    },

    scrollButton : {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },

    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            // staggerChildren: 0.1, 
        },
    },
}
const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>HRITIK ROSHAN</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                <div className="buttons">
                    <motion.button  variants={textVariants}>see the latest works</motion.button>
                    <motion.button  variants={textVariants}>contact me</motion.button>
                </div>

                <motion.img  variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Designer
            </motion.div>
            <div className="imgContainer">
                <img src="/hero__image.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero