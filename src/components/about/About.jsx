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
          <p className='md:w-[700px] px-1 text-justify text-secondary text-xl font-Dana'>
          از کودکی به کامپیوتر و بازی های کامپیوتری علاقه داشتم. همیشه دوست داشتم بدونم که این بازی ها چطوری کار می کنند. در تابستان 1401 که خدمتم تموم شد، فرصت مناسبی بود تا به طور تمام وقت به یادگیری برنامه نویسی بپردازم.<br/>
          در این مدت، چند پروژه کاربردی توسعه دادم.توسعه این پروژه ها، به من کمک کرد تا مهارت های برنامه نویسی خودم رو بهبود ببخشم و با مفاهیم جدید آشنا بشوم. <br/>
          <span className="font-DanaB text-pink-400">من معتقدم که برنامه نویسی یک حرفه است که میتونه به من کمک کنه تا دنیا را به روشی بهتر تغییر بدم.</span><br/>
          امیدوارم بتونم در یک موقعیت شغلی مناسب مشغول به کار بشم و با همکاری با شما، به پیشرفت خودم ادامه بدم.
            <span>&#128151;</span>
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