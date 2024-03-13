


const ProjectCard = ({ project, setProjectData }) => {

    // const handleModelData=data=>{
    //     setProjectData(data);

    // }

    return (
        <div className=" w-full">


            <div key={project.id}
                className="w-full relative">
                <img src={project?.img1} className="h-72 w-full rounded-xl transition duration-300 ease-in-out" alt="Your Image" />
                <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50">
                    <div className="mb-5 text-center">
                        <p className="text-white text-lg font-bold mb-2">{project.title}</p>
                        <button className="" onClick={() => setProjectData(project)}> <label htmlFor="my-drawer-4" className="drawer-button btn btn-success btn-sm">View Details</label></button>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default ProjectCard;