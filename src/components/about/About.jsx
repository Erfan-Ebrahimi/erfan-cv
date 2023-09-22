/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./about.scss";
import { motion } from "framer-motion";
import me from "../../assets/erer22.png";
import { web } from "../../assets"
import { creator } from "../../assets"


const container = {
  show: {
    transition: {
      staggerChildren: 0.6
    }
  }
};
const item = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  },
  whileHover: {
    scale: 1.1

  },
  whileHover2: {
    scale: 1.1, rotate: 10
  },
  whileTap: {
    scale: .8
  },

}



const About = () => {
  return (
    <section id="about" className="md:h-[100vh] pt-20">
      <motion.h1 className="container md:w-[50%] head-after font-MorabbaB text-center text-4xl md:text-5xl mb-10 pb-5 text-white" variants={item}>
        درباره ی من
      </motion.h1>
      <motion.div className="w-full flex flex-col xl:flex-row items-center justify-between gap-y-6 text-white" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{ once: false }} >
          <p className='md:w-[700px] px-1 text-justify text-secondary text-xl md:text-2xl font-Dana'>
            از بچگی خیلی علاقه به کامپیوتر داشتم تا اینکه یه جرقه توی ذهنم بهونه شد تا برم دنبال علاقه ی کودکیم. تابستان 1400 برنامه نویسی رو شروع کردم.رفتم خدمت و بعد از پایان خدمت از تابستان 1401 در حال کسب تجربه و یادگیری هستم.چندتا پروژه باحال توسعه دادم و در کنارش چیزای جدید هم یاد گرفتم.امیدوارم بتونیم در کنار هم پیشرفت کنیم.<span>&#128151;</span>
          </p>
        <motion.div variants={item}>
          <motion.div className="me h-[400px] overflow-hidden">
            <motion.img className='w-full' src={me} alt="bg" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
          </motion.div>
        </motion.div>
      </motion.div>

    </section>

  )
}

export default About;