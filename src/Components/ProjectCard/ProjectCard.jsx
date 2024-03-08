


const ProjectCard = ({ project, setProjectData }) => {
    
    // const handleModelData=data=>{
    //     setProjectData(data);
        
    // }
   
    return (
        <div className=" w-full">
            

            <div key={project.id}
                className="w-full relative">
                <img src={project?.img1} className="h-72 w-full rounded-xl transition duration-300 ease-in-out" alt="Your Image" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50">
                    <p className="text-white text-lg font-bold">Your Text</p>
                    <button className="" onClick={()=>setProjectData(project)}> <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label></button>
                    
                </div>
                
            </div>

           
        </div>
    );
};

export default ProjectCard;