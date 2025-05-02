import { useQuery } from "@tanstack/react-query";
import SkillsCard from "../../../Components/SkillsCard/SkillsCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SectionHead from "../../../Components/SectionHead/SectionHead";

const Skills = () => {
  const values = {
    src: "https://cdn.lordicon.com/jnikqyih.json",
    text: "My Skills",
  };
  const { data: skills = [] } = useQuery({
    queryKey: ["skill"],

    queryFn: async () => {
      const res = await fetch("skill.json");
      // console.log('res from axios', res)
      const data = await res.json(); // Use res.json() to parse JSON response

      return data;
    },
  });

  // console.log(skills);
  return (
    <section id="skills" className="text-white lg:pt-[20px] pt-1 mx-3 mb-24">
      <div>
        <SectionTitle value={values}></SectionTitle>
      </div>

      <SectionHead headone={"My"} headtwo={"Strength"}></SectionHead>

      {skills.map((item, index) => (
        <SkillsCard key={index} item={item}></SkillsCard>
      ))}

      {/* <div className="flex gap-3 items-center text-white text-3xl mb-5 font-semibold">
                <Icon icon={setIcon} />
                <p>{setsName}</p>
            </div> */}
      <div className="rounded-xl" data-aos="fade-up">
        <div className="flex gap-3 text-white text-[30px] mb-5 font-bold">
          <lord-icon
            src="https://cdn.lordicon.com/sbrtyqxj.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{width:"38px",height:'38px'}}
          ></lord-icon>
          <p className="">Soft Skills</p>
        </div>

        <ul className="list-disc list-inside space-y-2 text-base md:text-lg px-10 text-gray-200">
          <li>Hard Worker</li>
          <li>Team Player</li>
          <li>Tech Enthusiast</li>
          <li>Effective Communication</li>
          <li>Problem-Solving</li>
          <li>Adaptability</li>
          <li>Time Management</li>
          <li>Leadership</li>
          <li>Continuous Learner</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
