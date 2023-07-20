import React from 'react';

const ExperienceItem = ({ date, text }) => {
  const isDateInterval = date.includes('-');

  if (isDateInterval) {
    const [startDate, endDate] = date.split('-');
    return (
      <li className="flex items-center">
        <span className="mr-2 font-semibold">{startDate}</span>
        <span>-</span>
        <span className="ml-2 font-semibold">{endDate}</span>
        <span className="ml-2">{text}</span>
      </li>
    );
  }

  return (
    <li className="flex items-center">
      <span className="mr-2 font-semibold">{date}</span>
      <span>{text}</span>
    </li>
  );
};

const ExperienceCategory = ({ title, experiences }) => {
  const cardHeight = "h-90"; // Adjust this value as needed

  return (
    <div className="m-4 w-80"> {/* Added width to limit card width */}
        <h2 className="w-full rounded-t-xl bg-white py-2 bg-opacity-50 font-bold text-xl mb-2 text-center">
          {title}
        </h2>
        <div className="rounded-xl flex flex-col items-center shadow-lg gap-4 p-4">

        <ul className="list-disc list-inside">
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <ExperienceItem date={experience.date} text={experience.text} />
              {index !== experiences.length - 1 && <hr className="border-t border-gray-400 my-2" />} {/* Render hr except for the last item */}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .rounded-xl {
          height: ${cardHeight};
        }
      `}</style>
    </div>
  );
};

const Experiences = () => {
  const diplomesWebExperiences = [
    { date: "2013", text: "IUT Réseaux & Télécommunication" },
    { date: "2023", text: "Titre RNCP la Capsule" },
  ];

  const diplomesAutresExperiences = [
    { date: "2016", text: "Licence Philosophie" },
    { date: "2020", text: "Master 2 Science de l'éducation" },
  ];

  const experiencesWebExperiences = [
    { date: "2010-2016", text: "Freelance Wordpress" },
    { date: "2023-Now", text: "Freelance React" },
  ];

  const experiencesAutresExperiences = [
    { date: "2017-Now", text: "Directeur de Séjour" },
    { date: "2017-Now", text: "Directeur de Formation BAFA/BAFD" },
    { date: "2020-2022", text: "Coordinateur du PRE" },
  ];

  return (
    <div className="h-[38rem] pt-14 flex flex-col items-center bg-slate-100 bg-opacity-10 shadow">
      <h2 className="text-3xl font-bold mb-4">Experiences</h2>
      <p className="text-lg">Here are some of my Experiences:</p>
      <div className="mt-10 w-full flex flex-wrap justify-center">
        <ExperienceCategory title="Diplômes Web" experiences={diplomesWebExperiences} />
        <ExperienceCategory title="Diplômes autres" experiences={diplomesAutresExperiences} />
        <ExperienceCategory title="Experiences Web" experiences={experiencesWebExperiences} />
        <ExperienceCategory title="Experiences Autres" experiences={experiencesAutresExperiences} />
      </div>
    </div>
  );
};

export default Experiences;
