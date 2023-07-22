import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Projects from "./Projects";
import Skills from "./Skills";
import Experiences from "./Experiences";

import React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "./Hero";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavLink = (to, label) => (
    <li>
      <Link to={to} smooth={true} offset={-50} duration={500} className="hover-link hover:text-black cursor-pointer">
        {label}
        <span className="hover-line"></span>
      </Link>
    </li>
  );

  const renderLanguageButton = (language, label) => (
    <button onClick={() => changeLanguage(language)} className="text-sm font-bold hover-link hover:text-black cursor-pointer">
      <span className={`${i18n.language === language ? "text-black font-bold" : "text-gray-600"}`}>{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col">
      <nav className={`fixed w-full z-10 text-gray-600 font-bold uppercase ${isScrolled ? "bg-white bg-opacity-80 backdrop-blur-lg shadow" : ""}`}>
        <div className="flex justify-between h-16 items-center px-2 md:px-10">
          <div>
            <Link to="hero" smooth={true} offset={-80} duration={500} className="hover-link hover:text-black cursor-pointer">
              <img className="w-12 bottom-10" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <ul className="flex space-x-2 md:space-x-8 text-sm md:text-base items-center">
            {renderNavLink("projects", t("header.projects"))}
            {renderNavLink("skills", t("header.skills"))}
            {renderNavLink("experiences", t("header.experiences"))}
          </ul>
          <div className="flex items-center gap-[1px]">
            {renderLanguageButton("fr", "FR")}/{renderLanguageButton("en", "EN")}
          </div>
        </div>
      </nav>
      <HeroSection  />
      <section id="projects" className="min-h-[38rem] pt-14 flex flex-col items-center bg-slate-100 bg-opacity-10 shadow">
        <Projects />
      </section>
      <section id="skills" className="min-h-[38rem] pt-14 flex flex-col items-center bg-slate-100 bg-opacity-10 shadow">
        <Skills />
      </section>
      <section id="experiences" className="min-h-[38rem] pt-14 flex flex-col items-center bg-slate-100 bg-opacity-10 shadow">
        <Experiences />
      </section>
      <section id="bottom" className="min-h-[10rem] bg-opacity-10 shadow flex flex-col items-center justify-center">
        <h2 className="text-l font-bold">{t("madeWithLove")}</h2>
        <h2 className="text-l font-bold">
          <a href="mailto:contact@williamdev.fr">contact@williamdev.fr</a>
        </h2>
      </section>

    </div>
  );
}
