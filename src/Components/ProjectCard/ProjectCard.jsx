



const ProjectCard = ({ project, setProjectData }) => {
  // const handleModelData=data=>{
  //     setProjectData(data);

  // }

  return (
    <div className=" w-full">
      <div key={project.id} className="w-full relative">

        <div
          key={project.id}
          className="backdrop-blur-sm bg-white/10 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={project.img1}
            alt={project.title}
            className="rounded-xl mb-4 h-[250px]"
          />
          <h2 className="text-xl text-white font-semibold">{project.title}</h2>
          <p className="text-gray-300 text-sm my-2">{project.overview}</p>

          <button className="" onClick={() => setProjectData(project)}>
              {" "}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-success btn-sm"
              >
                View Details
              </label>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
