import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectDrawer from "../Home/MyProject/ProjectDrawer/ProjectDrawer";
import { useState } from "react";


const AllProject = () => {
  const [singleProject, setProjectData] = useState();

  const { data: projectData = [] } = useQuery({
    queryKey: ["projectdata"],

    queryFn: async () => {
      const res = await fetch("projectdata.json");
      // console.log('res from axios', res)
      const data = await res.json(); // Use res.json() to parse JSON response

      return data;
    },
  });


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          My Projects
        </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">

        {projectData?.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            setProjectData={setProjectData}
          ></ProjectCard>
        ))}
      </div>

      <ProjectDrawer
        singleProject={singleProject ? singleProject : ""}
      ></ProjectDrawer>
        
    </div>
  );
};

export default AllProject;
