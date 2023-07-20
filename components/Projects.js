import ProjectCard from './ProjectCard';
import { FaJsSquare, FaReact, FaFire } from 'react-icons/fa';
import AeshManagerMain from '../public/AeshManagerMain.png';
import Aesh1 from '../public/Aesh1.png';
import Aesh2 from '../public/Aesh2.png';
import Aesh3 from '../public/Aesh3.png';
import Aesh4 from '../public/Aesh4.png';

const Projects = () => {
    const projects = [
        {
            title: 'AeshManager',
            mainImage: 'AeshManagerMain.png',
            techIcons: [FaJsSquare, FaReact, FaFire],
            shortDescription: 'Aesh Manager est un Saas permettant la création de plannings croisés pour les AESH et les Enfants',
            description: 'AeshManager est une solution en ligne destinée aux directeurs d\'école et aux responsables de l\'éducation. En quelques clics, vous pouvez assigner des AESH aux élèves et vice versa, calculer leurs heures réelles ainsi que la différence avec leurs contrats ou leurs heures accordées.',
            githubLink: 'https://github.com/wdreyer/aeshV2', 
            projectLink: 'https://AeshManager.com', 
            carouselImages: ['Aesh1.png', 'Aesh2.png', 'Aesh3.png', 'Aesh4.png']
        },
       
        // Ajoutez plus de projets ici
    ];

    return (
        <div className="h-[38rem] pt-14 flex flex-col items-center bg-slate-100 bg-opacity-10 shadow">
            <h2 className="text-3xl font-bold mb-4">Projects :</h2>
            <p className="text-lg">Here are some of my recent projects:</p>
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
