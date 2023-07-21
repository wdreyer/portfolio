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
    // Ajoutez plus de projets ici
  ];

  return (
    <div className="h-[38rem] pt-14 flex flex-col items-center bg-slate-100 bg-opacity-10 shadow">
      <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
      <p className="text-lg">{t('projects.intro')}</p>
      <div className="mt-10 flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="m-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
