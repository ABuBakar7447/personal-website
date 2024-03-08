import { Link } from "react-router-dom";


const ProjectDrawer = ({ singleProject }) => {

    return (
        <div>
            <div className="drawer z-20">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/2 min-h-full bg-[#1d232a] text-base-content">
                        <p className="text-4xl font-bold text-[#03C988]">{singleProject?.title}</p>

                        <p className="text-lg text-white my-5">{singleProject?.overview}</p>


                        <p className="text-2xl font-bold text-[#03C988]">Features</p>
                        <div className="text-lg text-white">
                            <p>-- {singleProject.feature1}</p>
                            <p>-- {singleProject.feature2}</p>
                            <p>-- {singleProject.feature3}</p>
                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                            <img src={singleProject.img1} alt="" className="w-96 h-56 object-cover rounded-xl" />
                            <img src={singleProject.img2} alt="" className="w-96 h-56 object-cover rounded-xl" />
                            <img src={singleProject.img3} alt="" className="w-96 h-56 object-cover rounded-xl" />
                        </div>

                        <p className="text-2xl font-bold text-[#03C988] mb-5">Technologies</p>
                        <div className="flex justify-start items-center flex-wrap gap-4">
                            {singleProject?.tools?.map((tool, index) =>

                                <p key={index} className="text-white border-2 border-[#03C988] rounded-2xl p-2 hover:text-[#03C988] hover:border-white">{tool}</p>

                            )}
                        </div>
                        <Link to={singleProject?.websiteLink} target="_blank" className="text-white text-xl font-bold mt-12 mb-5"><p>Project Link</p></Link>

                        <p className="text-2xl font-bold text-[#03C988] my-5">
                            Git Repositories
                        </p>

                        <div className="flex justify-start gap-10">
                            <Link to={singleProject?.clientLink} target="_blank" className="text-white text-xl font-bold "><p>Project Link</p></Link>
                            <Link to={singleProject?.serverLink} target="_blank" className="text-white text-xl font-bold "><p>Project Link</p></Link>
                        </div>

                    </ul>
                </div>
            </div>
        </div>



    );
};

export default ProjectDrawer;