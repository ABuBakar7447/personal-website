import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Introduction = () => {
    // const state = "hover-home-1";
    const value = { src: "https://cdn.lordicon.com/cnpvyndp.json", text: "Introduction", state: "hover-home-1" }

    return (
        <section id="introduction" className="text-white lg:pt-[20px] pt-20 px-3 mb-24">
            <div>
                <SectionTitle value={value}></SectionTitle>

            </div>

            <div className="mb-20">
                <h1 className="lg:text-[62px] text-[50px] font-semibold mb-5">
                    Hey! I am <span className="text-[#03C988]"> Md. Abu Bakar,</span> <br /><span > MERN Stack Web Developer</span>
                </h1>

                <p className="text-[24px]">I am a Mern Stack Developer who loves to create a creative dynamic and responsive web applications.</p>
            </div>




            <div className="flex justify-between">
                <div className="w-1/2 flex justify-between">
                    <div>
                        <h1 className="lg:text-6xl text-5xl text-[#03C988]">1+</h1>
                        <p>
                            Years Of <br />Experience
                        </p>
                    </div>
                    <div>
                        <h1 className="lg:text-6xl text-5xl text-[#03C988]">12+</h1>
                        <p>
                            Projects <br />Completed
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000">
                    <a href="#about" className="lg:text-[28px] text-[20px] font-semibold flex items-center">

                        <p className="m-3 text-[#03C988] text-center">View Project</p>
                        <lord-icon
                            src="https://cdn.lordicon.com/xcrjfuzb.json"
                            target="a"
                            trigger="hover"
                            state="hover-arrow-down-2"
                            colors="primary:#fff"
                            style={{ width: "28px", height: "28px" }}>
                        </lord-icon>
                    </a>

                </div>
            </div>
            
        </section>
    );
};

export default Introduction;