/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./about.scss";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { MdVisibility } from "react-icons/md";
import me from "../../assets/erer22.png";


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
    <motion.div className="w-full flex flex-col md:flex-row items-center justify-between h-[100vh] text-white " id="about" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{ once: false }} >

      <motion.div  variants={item}>
      <div className='w-full flex flex-col'>
        <h1 className="relative head-after2 font-MorabbaB text-5xl mb-10 ">درباره ی من</h1>
        <p  className='w-[500px] text-secondary text-[17px] font-Dana  '>
          از بچگی خیلی علاقه به کامپیوتر داشتم تا اینکه یه جرقه توی ذهنم بهونه شد تا برم دنبال علاقه ی کودکیم. تابستان 1400 برنامه نویسی رو شروع کردم.رفتم خدمت و بعد از پایان خدمت از تابستان 1401 در حال کسب تجربه و یادگیری هستم.چندتا پروژه باحال توسعه دادم و در کنارش چیزای جدید هم یاد گرفتم.امیدوارم بتونیم در کنار هم پیشرفت کنیم.<span>&#128151;</span>
        </p>
      </div>
      </motion.div>

      <motion.div variants={item}>
        <motion.div className="me w-[90%] md:w-auto mx-auto flex justify-end items-center shrink-0 overflow-hidden">
          <motion.img className='w-full' src={me} alt="bg" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About;