/* eslint-disable react/no-unescaped-entities */
import './home.scss';
import { IconContext } from "react-icons";
import { motion } from 'framer-motion';
import me from "../../assets/erer22.png";
import CV from "../../assets/ECV.pdf";
//ICONS//
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import Swal from 'sweetalert2'


let easeing = [0.6, -0.05, 0.01, 0.99];
const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
}
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};
const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};

function Home() {

  const btnHandle = (e) => {
    e.preventDefault();
    Swal.fire("Call & Hire me * 09918790969")
  }
  return (
    <motion.div initial='initial' animate='animate' className='home-container w-full' id="home">

      <motion.div className="content_wrapper w-full flex flex-col justify-between items-center bg-none rounded-2xl p-[3%] text-center" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: easeing }}>

        <div className="w-full">
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} className='w-full font-extrabold text-2xl md:text-5xl text-sky-200'>
            <span className='head'>من</span> <span className='relative text-4xl md:text-8xl second tracking-widest text-teal-100 '>عرفان  <span className='head text-2xl md:text-4xl tracking-normal'>هستم</span></span><span className='block mt-2 head'>یک توسعه دهنده ی فرانت</span>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row justify-center items-center " variants={stagger}>
            <motion.a href={CV} download className="btn btn-primary max-w-max inline-block px-5 py-1.5 rounded-lg mt-5 mr-2 font-bold tracking-wider" variants={btnGroup} whileHover={{ scale: 1.05, backgroundColor: "#fefefe" }} whileTap={{ scale: 0.95 }}>
              دانلود رزومه
              {/* <BsGithub /> */}
            </motion.a>
            <motion.a href='09918790969' className="btn max-w-max inline-block px-5 py-1.5 rounded-lg mt-5 mr-2 font-bold tracking-wide" variants={btnGroup} whileHover={{ scale: 1.05, backgroundColor: "#fefefe" }} whileTap={{ scale: 0.95 }} onClick={btnHandle}>
              زنگ بزن گپی بزنیم
            </motion.a>
          </motion.div>

          <motion.div className="review_container mt-2.5 absolute top-[100px] xl:top-[250px] right-0 xl:right-[20px] flex flex-col" variants={stagger}>
            <IconContext.Provider value={{ size: "22px" }}>
              <motion.a href='http://www.instagram.com/__erfan__ebrahimi' target="_blank" rel="noreferrer" className='link-socials  text-[#dfeff6d9] w-10 h-10 bg-none rounded-lg mt-2.5 ml-2.5 ' variants={star} whileHover={{ scale: 1.3, borderRadius: '100%' }}><BsInstagram  /></motion.a>
              <motion.a href='https://t.me/ME_7676' target="_blank" rel="noreferrer" className='link-socials text-[#dfeff6d9] w-10 h-10 bg-none rounded-lg mt-2.5 ml-2.5 ' variants={star} whileHover={{ scale: 1.3, borderRadius: '100%' }}><BsTelegram /></motion.a>
              <motion.a href='https://github.com/Erfan-Ebrahimi' target="_blank" rel="noreferrer" className='link-socials  text-[#dfeff6d9] w-10 h-10 bg-none rounded-lg mt-2.5 ml-2.5 ' variants={star} whileHover={{ scale: 1.3, borderRadius: '100%' }}><BsGithub/></motion.a>
            </IconContext.Provider>
            <div className='w-[25px] h-[54px] absolute top-[220px] right-4  rounded-3xl border-2 border-[#dfeff6d9] hidden md:flex justify-center items-start p-2'>
              <motion.div animate={{ y: [0, 24, 0], }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", }} className='w-3 h-3 rounded-full bg-secondary'/>
            </div>
          </motion.div>
        </div>

        <motion.div className="me w-[90%]  md:w-auto mx-auto flex justify-end items-center overflow-hidden">
          <motion.img className='w-full' src={me} alt="bg" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
        </motion.div>

      </motion.div>

    </motion.div>

  );
}

export default Home;