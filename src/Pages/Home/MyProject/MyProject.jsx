import SectionHead from "../../../Components/SectionHead/SectionHead";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../Asset/Profile Pic.jpeg'
import { useState } from "react";

const MyProject = () => {

    const [isHovered, setIsHovered] = useState(false);
    const values = { src: "https://cdn.lordicon.com/jkzgajyr.json", text: "My Project" }
    return (
        <div className="mb-32">
            <div>
                <SectionTitle value={values}></SectionTitle>

                <SectionHead headone={"Featured"} headtwo={"Projects"}></SectionHead>
            </div>


            <div
                className={`relative overflow-hidden w-64 h-64 border-4 border-transparent hover:border-green-500 transition-all duration-300 ${isHovered ? 'border-green-500 border-4' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={img}
                    alt="Your Image"
                    className={`w-full h-full transition-all duration-300 object-cover ${isHovered ? 'filter blur-md border-2 border-green-600' : ''}`}
                />


                {isHovered && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-between items-center text-white">
                        <p className="text-lg font-bold">Your Text Top</p>
                        <p className="text-lg font-bold">Your Text Bottom</p>
                        <a href="" className="btn btn-sm btn-primary">
                            hello
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProject;