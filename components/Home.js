import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Modal from 'react-modal';
import React from 'react';
import ContactMe from './ContactMe';



export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
    <div className="flex flex-col">
      <nav
        className={`fixed w-full z-10 text-gray-600 font-bold uppercase ${
          isScrolled ? "bg-white bg-opacity-80 backdrop-blur-lg shadow" : ""
        }`}
      >
        <div className="flex justify-center h-16 items-center ">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="hero"
                smooth={true}
                offset={-80}
                duration={500}
                className="hover-link hover:text-black cursor-pointer"
              >
                Home
                <span className="hover-line"></span>
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                offset={-50}
                duration={500}
                className="hover-link hover:text-black cursor-pointer"
              >
                Projects
                <span className="hover-line"></span>
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                offset={-50}
                duration={500}
                className="hover-link hover:text-black cursor-pointer"
              >
                Skills
                <span className="hover-line"></span>
              </Link>
            </li>
            <li>
              <Link
                to="experiences"
                smooth={true}
                duration={500}
                className="hover-link hover:text-black cursor-pointer"
              >
                Experiences
                <span className="hover-line"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="hero"
        className="h-[38rem] mt-16 bg-opacity-10 shadow flex flex-col items-center justify-center  "
      >
        <div className=" mx-auto w-2/3 flex flex-col md:flex-row gap-10    ">
          <motion.div
            className=" w-[300px] overflow-hidden rounded-full -translate-y-1/4 "
            variants={imageVariant}
            initial="hidden"
            animate="visible"
          >
            <img
              className="w-full h-full object-cover object-center bottom-20 "
              src="/heroImage.png"
              alt="your-name"
            />
          </motion.div>
          <motion.div
            className="md:w-2/3 text-center md:text-left mt-20"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold mb-4">Hello, I'm William</h2>
            <p className="text-xl ">
              I'm a full-stack developer specialized in Javascript and in React. I love creating interactive and dynamic web and mobile applications. My specialities includes the fields of associations, education, and social matters, but I am open to any proposal.

            </p>
          
            <div className=' flex flex-row'>
            <p className='text-xl font-bold mt-4'>
            You can find me on :
            </p>
            <div className="flex mt-3 ">
            <div className=' ml-4 flex flex-row gap-4'>
      <a href="https://www.linkedin.com/in/william-dreyer-b5121186/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
      </a>
      <a href="https://github.com/wdreyer" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
      </a>
      <a href="mailto:contact@williamdev.fr">
        <FaEnvelope size={32} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
      </a>
      </div>   
    </div> 
  </div>
  <p className='text-l font-bold mt-4'>
  <button onClick={openModal} className="text-gray-600 hover:text-gray-800 cursor-pointer" >Or write me directly here</button>
  </p>
          </motion.div>
        </div>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiences">
      <Experiences />
      </section>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Project Details"
      className="modal"
      overlayClassName="overlay"
    >
      <ContactMe closeModal={closeModal} />
    </Modal>
    </div>
    
    

  );
}


