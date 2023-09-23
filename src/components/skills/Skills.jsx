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
    <section id='skills'>
      <motion.h1 className="container md:w-[50%] head-after font-MorabbaB text-center text-4xl md:text-5xl my-10 pb-5 text-white" variants={item}>
        مهارت های من
      </motion.h1>
      
      <div className=" mx-auto flex flex-col mt-10">
        <motion.p className="text-secondary text-lg text-center font-Dana" variants={item}>
          تکنولوژی هایی که در کنار توسعه پروژه ها یاد گرفتم
        </motion.p>

        <motion.div className="w-[80%] mx-auto" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{ once: false }}>
          <div className="flex flex-wrap w-full md:w-[65%] xl:w-[55%] justify-center gap-4  mx-auto mt-12">
            {technologies.map((technology) => (
              <>
                <motion.a variants={item} className='w-[120px] flex flex-col justify-center items-center text-center py-1 skills-item border border-orange-300'>
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

    </section>
  )
}

export default Skills;