import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Modal from "react-modal";
import ContactMe from "./ContactMe";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const imageVariant = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
      };
    
      const textVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
      };
      const { t, i18n } = useTranslation();


  return (
    <>
    <section id="hero" className="min-h-[38rem]   px-2 pb-4 pt-16 md:py-16 md:mt-16 bg-opacity-10 shadow flex flex-col items-center justify-center">
      <div className="mx-auto  md:w-3/4 item-center flex flex-col md:flex-row md:gap-10">
        <motion.div className="w-full md:w-1/3" variants={imageVariant} initial="hidden" animate="visible">
          <img className=" w-48 mx-auto md:mx-0 md:w-[300px] overflow-hidden rounded-full " src="/heroImage.png" alt="your-name" />
        </motion.div>
        <motion.div className="md:w-3/5 text-center md:text-left  mt-2 md:mt-10" variants={textVariant} initial="hidden" animate="visible">
          <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-4">{t("hello")}</h2>
          <p className=" text-l md:text-xl ">{t("welcome")}</p>
          <div className="flex flex-col items-center md:flex-row">
            <p className="text-xl font-bold md:mt-4">{t("findMeOn")}</p>
            <div className="flex md:mt-3 ">
              <div className="ml-2 md:ml-4 flex flex-row gap-4">
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
          <p className="text-l font-bold mt-4">
            <button onClick={openModal} className="text-gray-600 hover:text-gray-800 cursor-pointer">
              {t("writeMeHere")}
            </button>
          </p>
        </motion.div>
      </div>
    </section>
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Project Details" className="modal" overlayClassName="overlay">
    <ContactMe closeModal={closeModal} />
  </Modal>
  </>
    

  );
};

export default HeroSection;
