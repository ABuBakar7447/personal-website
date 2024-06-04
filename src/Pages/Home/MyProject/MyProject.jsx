import SectionHead from "../../../Components/SectionHead/SectionHead";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import ProjectDrawer from "./ProjectDrawer/ProjectDrawer";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const MyProject = () => {

    const values = { src: "https://cdn.lordicon.com/jkzgajyr.json", text: "My Project" }

    const [singleProject, setProjectData] = useState()

    const { data: projectData = [] } = useQuery({
        queryKey: ["projectdata"],


        queryFn: async () => {
            const res = await fetch('projectdata.json')
            // console.log('res from axios', res)
            const data = await res.json(); // Use res.json() to parse JSON response

            return data;
        },
    })
    console.log(projectData);
    return (
        <div id="projects" className="text-white lg:pt-[20px] pt-1 mx-3 mb-24">
            <div>
                <SectionTitle value={values}></SectionTitle>

                <SectionHead headone={"Featured"} headtwo={"Projects"}></SectionHead>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {projectData?.map((project,index) =><ProjectCard key={index} project={project} setProjectData={setProjectData}></ProjectCard>

                    

                )}
            </div>


            <ProjectDrawer singleProject={singleProject?singleProject:''}></ProjectDrawer>
        </div>
    );
};

export default MyProject;