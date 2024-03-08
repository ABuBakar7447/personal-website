import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const About = () => {
    const value = { src: "https://cdn.lordicon.com/yxczfiyc.json", text: "About Me" }
    return (
        <section id="about" className="text-white pt-[20px] container min-h-screen">
            <div>
                <SectionTitle value={value}></SectionTitle>
            </div>

            <div>
                <p className="text-[50px] font-semibold">
                    Exceptional creations emerge from the foundation of an <span className=" text-[#03C988]"> Inspiring Tale</span>.
                </p>
            </div>

            <div className="my-12">
                <p>

                    In the world of web programming, my journey began with a spark of self-interest that quickly grew into a passion for designing and developing web applications. The act of crafting something uniquely mine brought a profound sense of enlightenment. Over the past year, I immersed myself in web development, excelling first in frontend technologies and then mastering the intricacies of backend development. Embarking on 10 unique projects, I&rsquo;ve navigated the digital landscape. Beyond the screen, my creativity is sparked by the pages of books, thrilling adventures, and the enchanting worlds of both thriller and sci-fi movies. However, it&rsquo;s the football field that brings me joy, contributing to my continuous journey of learning and creative expression

                </p>


                <div className="mt-16">
                    <a href=""  className="flex items-center gap-2 text-[#03C988] text-xl font-semibold">
                        <lord-icon
                            src="https://cdn.lordicon.com/ijahpotn.json"
                            target="a"
                            trigger="hover"
                            colors="primary:#fff"
                            style={{ width: "28px", height: "28px" }}>
                        </lord-icon>

                        View My CV
                    </a>
                </div>
            </div>


        </section>
    );
};

export default About;