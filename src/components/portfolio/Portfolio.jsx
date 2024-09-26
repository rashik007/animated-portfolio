import "./portfolio.scss"
import React, {useRef} from 'react'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"


const items = [
    {
        id: 1,
        title: "React Commerce",
        img:"https://images.pexels.com/photos/16997066/pexels-photo-16997066/free-photo-of-ancient-stone-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, perspiciatis.",
    },
    {
        id: 2,
        title: "Next.js Commerce",
        img:"https://images.pexels.com/photos/27489412/pexels-photo-27489412/free-photo-of-pottan-theyyam-kerala-ritual-dance-indian-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, perspiciatis.",
    },
    {
        id: 3,
        title: "Vanilla Js App",
        img:"https://images.pexels.com/photos/26976681/pexels-photo-26976681/free-photo-of-100-people-praying.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, perspiciatis.",
    },
    {
        id: 4,
        title: "Music App",
        img:"https://images.pexels.com/photos/12883002/pexels-photo-12883002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, perspiciatis.",
    },
]



const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
    <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt={item.desc} />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset:["end end" , "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Work</h1>
            <motion.div className="progressBar" style= {{scaleX}}></motion.div>
        </div>
        {items.map((item) => (
            <Single item = {item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio