import { useState } from "react";
import "./navbar.scss";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.6,
      staggerDirection: 1
    }
  }
}
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.2, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.2,
      ease: easeing
    }
  }
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false)




  return (
    <>
      <motion.div initial='initial' animate='animate'>
        <motion.div variants={stagger}>
          <nav className="fixed top-[43%] left-0 flex items-center bg-none z-50">
            <ul className="w-[110px] relative flex flex-col gap-y-10">
              <motion.li id="#home" style={{ "--clr": "#9ed8f0" }} variants={star}>
                <Link
                  to="home" spy={true} smooth={true} offset={-50} duration={500}
                  className={click === "" ? "active" : ""}
                  onClick={closeMenu}
                  href="#"
                >
                </Link>
              </motion.li>
              <motion.li id="#about" style={{ "--clr": "#ff6493" }} variants={star}>
                <Link
                  to="about" spy={true} smooth={true} offset={-10} duration={500}
                  variants={star}
                  className={click === "" ? "active" : ""}
                  onClick={closeMenu}
                  href="#about"
                >
                </Link>

              </motion.li>
              <motion.li id="#skills" style={{ "--clr": "#ffdd1c" }} variants={star}>
                <Link
                  to="skills" spy={true} smooth={true} offset={-10} duration={500}
                  variants={star}

                  className={click === "" ? "active" : ""}
                  onClick={closeMenu}
                  href="#skills"
                >
                </Link>
              </motion.li>
              <motion.li id="#projects" style={{ "--clr": "#dc00d4" }} variants={star}>
                <Link
                  to="projects" spy={true} smooth={true} offset={-10} duration={500}
                  variants={star}
                  className={click === "" ? "active" : ""}
                  onClick={closeMenu}
                  href="#projects"
                  data-text="&nbsp;پروژه ها"
                >
                </Link>
              </motion.li>
            </ul>

          </nav>
        </motion.div>
      </motion.div>

    </>
  )
}

export default Navbar;