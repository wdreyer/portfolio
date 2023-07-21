import { FaHtml5, FaCss3, FaReact, FaJs, FaFire, FaCode, FaWindowMaximize, FaServer, FaGithub, FaRocket } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SkillItem = ({ icon, text }) => (
  <li className="flex items-center">
    {icon}
    <span>{text}</span>
  </li>
);

const SkillCategory = ({ title, skills }) => (
    <div className='m-4'>
  <div className="rounded-xl flex flex-col items-center shadow-lg w-64 h-72 gap-4">
    <h2 className="w-full bg-white py-2 bg-opacity-50 font-bold text-xl mb-2 text-center">
      {title}
    </h2>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <SkillItem key={index} icon={skill.icon} text={skill.text} />
      ))}
    </ul>
  </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();

  const frontEndSkills = [
    { icon: <FaHtml5 className="mr-2" />, text: 'HTML/CSS3' },
    { icon: <FaReact className="mr-2" />, text: 'React' },
    { icon: <FaJs className="mr-2" />, text: 'JavaScript/TypeScript' },
    { icon: <FaWindowMaximize className="mr-2" />, text: 'Next.js' },
  ];

  const backendSkills = [
    { icon: <FaJs className="mr-2" />, text: 'JavaScript' },
    { icon: <FaFire className="mr-2" />, text: 'Firebase' },
    { icon: <FaServer className="mr-2" />, text: 'Express' },
  ];

  const devOpsSkills = [
    { icon: <FaGithub className="mr-2" />, text: 'GitHub' },
    { icon: <FaRocket className="mr-2" />, text: 'Vercel' },
  ];

  return (
    <div className="h-min[38rem] pt-14 flex flex-col items-center bg-slate-100 bg-opacity-10 shadow">
    <h2 className="text-3xl font-bold mb-4">{t('skills.title')}</h2>
    <p className="text-lg">{t('skills.intro')}</p>
      <div className="mt-10 w-full flex flex-wrap justify-center">
        <SkillCategory title="FrontEnd" skills={frontEndSkills} />
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="DevOps" skills={devOpsSkills} />
      </div>
    </div>
  );
};

export default Skills;
