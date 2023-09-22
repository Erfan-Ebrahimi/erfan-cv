/* eslint-disable react/no-unescaped-entities */
import './home.scss';
import { IconContext } from "react-icons";
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import CV from "../../assets/ECV.pdf";
//ICONS//
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import Swal from 'sweetalert2'
import me1 from "../../assets/ME.gif";


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
  const clickHandle = (e) => {
    e.preventDefault();
    Swal.fire("Call & Hire me * 09918790969")

  }
  return (
    <motion.div initial='initial' animate='animate' className='bg-home md:bg-center relative w-full md:h-[100vh]' id="home">
      <a href="#09918790969" className='absolute left-8 top-5' onClick={clickHandle}><img className='w-10 h-10 rounded-lg' src={me1} alt="me" /></a>

      <motion.div className="review_container absolute bottom-[20%] md:top-[250px] right-4 flex flex-col" variants={stagger}>
        <IconContext.Provider value={{ size: "22px" }}>
          <motion.a href='http://www.instagram.com/__erfan__ebrahimi' target="_blank" rel="noreferrer" className='link-socials  text-[#dfeff6d9] w-10 h-10 bg-none rounded-lg mt-2.5 ml-2.5 ' variants={star} whileHover={{ scale: 1.3, borderRadius: '100%' }}><BsInstagram /></motion.a>
          <motion.a href='https://t.me/ME_7676' target="_blank" rel="noreferrer" className='link-socials text-[#dfeff6d9] w-10 h-10 bg-none rounded-lg mt-2.5 ml-2.5 ' variants={star} whileHover={{ scale: 1.3, borderRadius: '100%' }}><BsTelegram /></motion.a>
          <motion.a href='https://github.com/Erfan-Ebrahimi' target="_blank" rel="noreferrer" className='link-socials  text-[#dfeff6d9] w-10 h-10 bg-none rounded-lg mt-2.5 ml-2.5 ' variants={star} whileHover={{ scale: 1.3, borderRadius: '100%' }}><BsGithub /></motion.a>
        </IconContext.Provider>
      </motion.div>

      <div className='w-[25px] h-[54px] absolute bottom-5 right-[50%]  rounded-3xl border-2 border-[#dfeff6d9] flex justify-center items-start p-2'>
        <motion.div animate={{ y: [0, 24, 0], }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", }} className='w-3 h-3 rounded-full bg-secondary' />
      </div>

      <motion.div className="content_wrapper w-full flex flex-col justify-between items-center bg-none rounded-2xl p-2 mt-20 md:mt-1 text-center" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: easeing }}>

        <div className="w-full home-head ">
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} className='w-full flex flex-col text-white'>
            <h1 className='font-MorabbaB flex justify-center md:justify-start font-extrabold text-transparent text-5xl md:text-7xl xl:text-8xl bg-clip-text bg-gradient-to-b from-yellow-700 to-sky-400'>سلام . . .  </h1>
            <h1 className='font-MorabbaB text-4xl md:text-5xl'>من <span className='font-MorabbaB text-4xl md:text-8xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-t from-yellow-400 to-sky-600'>عرفـــــــان</span> هستم</h1>
            <h1 className='h-20 font-MorabbaB text-2xl md:text-5xl mt-12 md:mt-20'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<h1 className="block font-MorabbaB text-2xl md:text-5xl mt-4">یک توسعه دهنده ی فرانت</h1>')
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('<h1 className="font-MorabbaB text-2xl md:text-5xl mt-4">یک برنامه نویس با انگیزه</h1>')
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('<h1 className="font-MorabbaB text-2xl md:text-5xl mt-4">عشق کد</h1>')
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('<h1 className="font-MorabbaB text-2xl md:text-5xl mt-4">پیگیر کار تیمی</h1>')
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('<h1 className="font-MorabbaB text-2xl md:text-5xl mt-4">عاشق فیکس باگ</h1>')
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('<h1 className="font-MorabbaB text-2xl md:text-5xl mt-10">یک برنامه نویس منظم</h1>')
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                }}
                options={{
                  loop: true
                }}
                
              />
            </h1>
          </motion.div>

        </div>

        <motion.div className="flex flex-col md:flex-row  items-center mt-40 mb-28  sm:mb-0" variants={stagger}>
          <motion.a href={CV} download className="btn btn-primary max-w-max inline-block px-5 py-1.5 rounded-lg mt-5 mr-2 font-bold font-DanaB tracking-wider" variants={btnGroup} whileHover={{ scale: 1.05, backgroundColor: "#fefefe" }} whileTap={{ scale: 0.95 }}>
            دانلود رزومه
          </motion.a>
          <motion.a href='09918790969' className="btn max-w-max inline-block px-5 py-1.5 rounded-lg mt-5 mr-2 font-DanaB tracking-wide" variants={btnGroup} whileHover={{ scale: 1.05, backgroundColor: "#fefefe" }} whileTap={{ scale: 0.95 }} onClick={btnHandle}>
            زنگ بزن گپی بزنیم
          </motion.a>
        </motion.div>

      </motion.div>
    </motion.div>

  );
}

export default Home;