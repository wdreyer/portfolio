import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";
import Projects from './Projects';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const imageVariant = {
    hidden: { opacity: 0,  y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const textVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
  };


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  
  return (
    <div className='flex flex-col'>
    <nav className={`fixed w-full z-10 text-gray-600 font-bold uppercase ${isScrolled ? 'bg-white bg-opacity-80 backdrop-blur-lg shadow' : ''}`}>
    <div className="flex justify-center h-16 items-center ">
      <ul className="flex space-x-8">
        <li>
          <Link to="hero" smooth={true} offset={-80} duration={500} className="hover-link hover:text-black cursor-pointer">
            Home
            <span className="hover-line"></span>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-50} duration={500} className="hover-link hover:text-black cursor-pointer">
            Projects
            <span className="hover-line"></span>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="hover-link hover:text-black cursor-pointer">
            Skills
            <span className="hover-line"></span>
          </Link>
        </li>
        <li>
          <Link to="experiences" smooth={true} duration={500} className="hover-link hover:text-black cursor-pointer">
            Experiences
            <span className="hover-line"></span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>  
     
<section id="hero" className="h-[38rem] mt-16 bg-opacity-10 shadow flex flex-col items-center justify-center  ">
<div className=" mx-auto w-2/3 flex flex-col md:flex-row gap-10    ">
  <motion.div 
    className=" w-[300px] overflow-hidden rounded-full -translate-y-1/4 "
    variants={imageVariant}
    initial="hidden"
    animate="visible"
  >
    <img className="w-full h-full object-cover object-center bottom-20 " src="/heroImage.png" alt="your-name" />
  </motion.div>
  <motion.div 
    className="md:w-2/3 text-center md:text-left mt-20"
    variants={textVariant}
    initial="hidden"
    animate="visible"
  >
  <h2 className="text-3xl font-bold mb-4">Hello, I'm William</h2>
    <p className="text-xl">I'm a full-stack developer specialized in React and Node.js. I love creating interactive and dynamic web applications.</p>
  </motion.div>
</div>
</section>
<section id="projects">
<Projects/>
</section>
      <section id="skills" className="h-[38rem] flex items-center justify-center bg-white bg-opacity-10 shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-lg">Here are some of my skills:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </div>
      </section>
      <section id="experiences" className="h-[38rem] flex items-center justify-center bg-gray-100 bg-opacity-10 shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Experiences</h2>
          <p className="text-lg">Here are my past experiences:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Experience 1</li>
            <li>Experience 2</li>
            <li>Experience 3</li>
          </ul>
        </div>
      </section>
      </div>
  );
}


