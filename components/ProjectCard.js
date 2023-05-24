import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import { FaJsSquare, FaReact, FaFire } from 'react-icons/fa';


const ProjectCard = ({ title, mainImage, techIcons, shortDescription, description, githubLink, projectLink, carouselImages }) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="group relative rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer">
        <img src={mainImage} alt={title} className="w-full h-64 object-cover" onClick={openModal} />
        <div className="absolute bottom-0 w-full p-4 bg-white transition-all duration-200 transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-xl mb-2 text-center">{title}</h2>
            <p className="text-center">{shortDescription}</p>
            <div className="flex justify-center space-x-2">
                {techIcons.map((Icon, index) => (
                    <Icon key={index} className="w-6 h-6" />
                ))}
            </div>
        </div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Details"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
            }}
        >
            <button onClick={closeModal}>Close</button>
            <div className="flex">
                <Carousel className="w-1/2">
                    {carouselImages.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`Project screen ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
                <div className="w-1/2 ml-4">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="flex space-x-2">
                        {techIcons.map((Icon, index) => (
                            <Icon key={index} className="w-6 h-6" />
                        ))}
                    </div>
                    <div>
                        <a href={githubLink}>Github</a>
                        <a href={projectLink}>Project Link</a>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
);
};

export default ProjectCard;

