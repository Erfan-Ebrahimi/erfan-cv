import "./skills.scss";
import { motion } from "framer-motion";
import { technologies } from "../../constants/index.js";


const container = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  }
}


const Skills = () => {
  return (
    <div id='skills' className="h-[100vh] w-full mx-auto">
      <motion.div variants={item}>
      <div className='w-full flex flex-col mb-10'>
        <h1 className="relative head-after3 font-MorabbaB text-5xl mb-10 ">مهارت های من</h1>
        <p className="text-secondary text-lg font-Dana" >همون تکنولوژی هایی که در کنار توسعه پروژه ها یاد گرفتم . . .</p>
      </div>
      </motion.div>

      <motion.div className="w-[80%] mx-auto" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{ once: false }}>
        <div className="flex flex-wrap justify-center gap-4 w-[70%] mx-auto">
          {technologies.map((technology) => (
            <>
              <motion.a variants={item} className='w-[120px] flex flex-col justify-center items-center text-center py-1 skills-item border border-sky-900'>
                <div className="h-22">
                  <img className="w-20 h-20" src={technology.icon} alt="img" />
                </div>
                <div className="w-full ">
                  <h4 className="w-full text-green-100 f1 font-medium text-lg">{technology.name}</h4>
                  <small className='font-mono text-purple-400 text-lg'>%{technology.percent}</small>

                </div>
              </motion.a>
            </>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

export default Skills;