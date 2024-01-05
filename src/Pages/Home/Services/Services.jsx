import { Icon } from "@iconify/react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SectionHead from "../../../Components/SectionHead/SectionHead";


const Services = () => {
    const value = { src: "https://cdn.lordicon.com/eouimtlu.json", text: "My Services" }



    const services = [
        {
            "id": 1,
            "icon": "mdi:code",
            "service": "Frontend Web Development",
            "details": "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code."
        },
        {
            "id": 2,
            "icon": "nonicons:react-16",
            "service": "React JS Development",
            "details": "I have worked on 8 different React JS projcts. Also have a little working experience with Next JS."
        },
        {
            "id": 3,
            "icon": "icon-park-outline:code-computer",
            "service": "Full Stack Development",
            "details": "With the Frontend I am skilled in Node JS, Express, JWT and Firebase. Proficient in implementing Mongo DB."
        },
    ]
    return (
        <section id="service" className="mb-32 pt-[20px] scroll-smooth">
            <div>
                <SectionTitle value={value}></SectionTitle>
            </div>

            <SectionHead headone={"My"} headtwo={"Specializations"}></SectionHead>

           
            <div className="grid grid-cols-12 gap-5">
                {
                    services.map((item, index) =>


                        <div key={index} className="border border-white rounded-3xl col-span-4 text-white p-4 hover:border-[#03C988] hover:text-[#03C988]">

                            <Icon className="w-16 h-16" icon={item.icon} />

                            <p className="text-2xl font-semibold my-4">
                                {item.service}
                            </p>

                            <p className="text-white">
                                {item.details}
                            </p>



                            {/* <div className="border-2 border-rose-600 w-[300px] h-[300px] my-36 rotate-45 p-5">
                                <div className=" border-rose-600 -rotate-45">
                                    <Icon className="w-16 h-16" icon={item.icon} />


                                    <p className="text-2xl font-semibold my-4">
                                        {item.service}
                                    </p>

                                    <p className="text-white">
                                        {item.details}
                                    </p>
                                </div>
                            </div> */}

                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Services;