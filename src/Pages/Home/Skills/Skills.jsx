import { useQuery } from "@tanstack/react-query";
import SkillsCard from "../../../Components/SkillsCard/SkillsCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SectionHead from "../../../Components/SectionHead/SectionHead";


const Skills = () => {


    const values = { src:"https://cdn.lordicon.com/jnikqyih.json", text:"My Skills"}
    const { data: skills = [] } = useQuery({
        queryKey: ["skill"],


        queryFn: async () => {
            const res = await fetch('skill.json')
            // console.log('res from axios', res)
            const data = await res.json(); // Use res.json() to parse JSON response

            return data;
        },
    })

    // console.log(skills);
    return (
        <section id="skills" className="text-white lg:pt-[20px] pt-1 mx-3 mb-24">
            <div>
                <SectionTitle value={values}></SectionTitle>
            </div>

            <SectionHead headone={"My"} headtwo={"Strength"}></SectionHead>


            {
               skills.map((item, index) =>
               <SkillsCard key={index} item={item}></SkillsCard>
               ) 
            }
        </section>
    );
};

export default Skills;