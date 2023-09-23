/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../../constants/index.js";
import { fadeIn } from "../../utils/motion";
import { BsGithub } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";

import "./projects.scss";


const ProjectCard = ({ index, name, description, tags, image, source_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450, }} className='bg-slate-950 shadow-sm text-center shadow-purple-400/70 p-5 rounded-2xl sm:w-[360px] w-full'>

        <div className='w-full'>
          <img src={image} alt='project_image' className='w-[300px] h-[200px] mx-auto rounded-2xl' />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold font-MorabbaB tracking-wider text-[24px] h-9'>{name}</h3>
          <p className='mt-2  w-[90%] text-secondary text-justify text-[14px] h-24 font-DanaB'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              {tag.name}#
            </p>
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <div className='card-img_hover'>
            <div onClick={() => window.open(source_link, "_blank")} className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <BsGithub className="text-4xl text-orange-400" />
            </div>
          </div>
          {
            demo_link && 
          
          <div className='card-img_hover'>
            <div onClick={() => window.open(demo_link, "_blank")} className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <MdVisibility className="text-3xl text-orange-400" />
            </div>
          </div>
          }
        </div>

      </Tilt>
    </motion.div>
  );
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  }
}


const Works = () => {
  return (
    <section id='projects' className="mt-20">
      <motion.h1 className="container md:w-[50%] head-after font-MorabbaB text-center text-4xl md:text-5xl my-10 pb-5 text-white" variants={item}>
        پروژه های من
      </motion.h1>
      <div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='md:w-1/2 mx-auto  mb-9 text-center text-secondary font-DanaB '>
          این پروژه ها همونایی ان که گفتم توسعه دادم و خیلی باحالن.هر پروژه رو به طور خلاصه معرفی کردم.لینک دمو و گیت هاب هر پروژه رو هم گذاشتم.<br/>
          <span className="font-Dana text-xs text-purple-400">برای مشاهده حتما از Vpn استفاده کنید.</span>
        </motion.p>

        <div className='grid gap-y-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;
