import { Icon } from "@iconify/react";
import './SkillCard.css'

const SkillsCard = ({ item }) => {
    const { setsName, setIcon, skillSet } = item;
    return (
        <div>
            <div className="flex gap-3 items-center text-white text-3xl mb-5 font-semibold">
                <Icon icon={setIcon} />
                <p>{setsName}</p>
            </div>

            <div className="grid grid-cols-5 text-white mb-20">
                {
                    skillSet.map((skill, index) =>
                        <div key={index} className='my-4 flex flex-col items-center hover:text-[#03C988]' data-aos="fade-up" data-aos-delay={`${((index) % 6) * 100 + 100}`}>
                            <div className='h-28 w-24 flex items-center justify-center glowing-border border-2 border-white rounded-3xl'>
                                <img src={skill.icon} alt="icon" className='h-12 w-12 object-contain' />
                            </div>
                            <h1 className='text-center mt-4'>{skill.name}</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SkillsCard;