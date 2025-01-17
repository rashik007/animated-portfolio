import React from 'react'
import { motion } from 'framer-motion'

const items = [
  "Homepage",
  "Services",
  "Portfolio",
  "Contact",
  "About",
]

const variants = {
  open: {
    transition: {
      staggerDirection: 0.1,
    }, 
  },

  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
}
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
       
  },

  closed: {
    y: 50,
    opacity: 0,
  }
}

const Links = () => {

  return (
    <motion.div className="links" variants={variants}>{items.map((item) => (
      <motion.a href={`#${item}`} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} key={item}>{item}</motion.a>
    ))}</motion.div>
  )
}

export default Links