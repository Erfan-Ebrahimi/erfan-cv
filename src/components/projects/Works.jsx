/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants/index.js";
import { fadeIn } from "../../utils/motion";
import { MdVisibility } from "react-icons/md";

import "./projects.scss";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450, }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>

        <div className='absolute bottom-0 right-3 flex justify-end m-3 card-img_hover'>
          <div onClick={() => window.open(source_code_link, "_blank")} className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>

        <div className='absolute bottom-0 right-10 flex justify-end m-3 card-img_hover'>
          <div onClick={() => window.open(source_code_link, "_blank")} className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <MdVisibility />
          </div>
        </div>

        <div className='relative w-full h-[230px]'>
          <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
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
    <section id='projects' className=" h-[100vh]">

      <motion.div  variants={item}>
        <div className='w-full flex flex-col mb-10'>
          <h1 className="relative head-after4 font-MorabbaB text-5xl mb-5 ">پروژه های من</h1>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary font-DanaB text-base max-w-xl leading-[30px]'>
            این پروژه ها همونایی ان که گفتم توسعه دادم و خیلی باحالن. به طور خلاصه هر پروژه رو با تگ هایی معرفی کردم.لینک دمو و گیت هاب هر پروژه رو هم گذاشتم.
          </motion.p>
        </div>
      </motion.div>

      <div className='grid grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
