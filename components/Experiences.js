import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div className="m-4 w-80"> {/* Added width to limit card width */}
      <h2 className="w-full rounded-t-xl bg-white py-2 bg-opacity-50 font-bold text-xl mb-2 text-center">
        {t(`experiences.${title}.title`)}
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
  const { t } = useTranslation();

  const diplomesWebExperiences = [
    { date: "2013", text: t('experiences.diplomesWebExperiences.diplome1') },
    { date: "2023", text: t('experiences.diplomesWebExperiences.diplome2') },
  ];

  const diplomesAutresExperiences = [
    { date: "2016", text: t('experiences.diplomesAutresExperiences.diplome1') },
    { date: "2020", text: t('experiences.diplomesAutresExperiences.diplome2') },
  ];

  const experiencesWebExperiences = [
    { date: "2010-2016", text: t('experiences.experiencesWebExperiences.experience1') },
    { date: "2023-Now", text: t('experiences.experiencesWebExperiences.experience2') },
  ];

  const experiencesAutresExperiences = [
    { date: "2017-Now", text: t('experiences.experiencesAutresExperiences.experience1') },
    { date: "2017-Now", text: t('experiences.experiencesAutresExperiences.experience2') },
    { date: "2020-2022", text: t('experiences.experiencesAutresExperiences.experience3') },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">{t('experiences.title')}</h2>
      <p className="text-lg">{t('experiences.subtitle')}</p>
      <div className="mt-10 w-full flex flex-wrap justify-center">
        <ExperienceCategory title="diplomesWebExperiences" experiences={diplomesWebExperiences} />
        <ExperienceCategory title="diplomesAutresExperiences" experiences={diplomesAutresExperiences} />
        <ExperienceCategory title="experiencesWebExperiences" experiences={experiencesWebExperiences} />
        <ExperienceCategory title="experiencesAutresExperiences" experiences={experiencesAutresExperiences} />
      </div>
    </>
  );
};

export default Experiences;
