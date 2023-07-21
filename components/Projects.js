import React from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import { FaJsSquare, FaReact, FaFire } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'AeshManager',
      mainImage: 'AeshManagerMain.png',
      techIcons: [FaJsSquare, FaReact, FaFire],
      shortDescription: t('projects.aeshManager.shortDescription'),
      description: t('projects.aeshManager.description'),
      githubLink: 'https://github.com/wdreyer/aeshV2',
      projectLink: 'https://AeshManager.com',
      features: [
        t('projects.aeshManager.features.authentication'),
        t('projects.aeshManager.features.schoolCreation'),
        t('projects.aeshManager.features.scheduleManagement'),
        t('projects.aeshManager.features.timeTracking')
      ],
      carouselImages: ['Aesh1.png', 'Aesh2.png', 'Aesh3.png', 'Aesh4.png']
    },
    {
      title: 'ColoCrew',
      mainImage: 'ColoCrewMain.jpg',
      techIcons: [FaJsSquare, FaReact, FaFire],
      shortDescription: t('projects.ColoCrew.shortDescription'),
      description: t('projects.ColoCrew.description'),
      githubLink: 'https://github.com/wdreyer/colocrew',
      projectLink: 'https://colocrew.com',
      features: [
        t('projects.ColoCrew.features.searching'),
        t('projects.ColoCrew.features.2'),
        t('projects.ColoCrew.features.3'),
        t('projects.ColoCrew.features.4')
      ],
      carouselImages: ['ColoCrew1.jpg', 'ColoCrew2.jpg', 'ColoCrew3.jpg', 'ColoCrew4.jpg']
    }
  ]
  

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
      <p className="text-lg">{t('projects.intro')}</p>
      <div className="mt-10 flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="m-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
