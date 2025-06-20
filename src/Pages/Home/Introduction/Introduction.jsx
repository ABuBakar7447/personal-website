import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import pic from "../../../Asset/Profile Pic.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";

const Introduction = () => {
  // const state = "hover-home-1";
  const value = {
    src: "https://cdn.lordicon.com/cnpvyndp.json",
    text: "Introduction",
    state: "hover-home-1",
  };

  return (
    <section
      id="introduction"
      className="text-white lg:pt-[20px] pt-20 px-3 mb-24"
    >
      <div>
        <SectionTitle value={value}></SectionTitle>
      </div>

      <div className="flex flex-col lg:flex-row justify-start">
        <div className="w-[30%]">
          <div>
            <div className="">
              <div className="card lg:w-96 w-[350px]">
                <figure className="px-10">
                  <img
                    src={pic}
                    alt="Shoes"
                    className="rounded-xl h-[300px] w-[300px] object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl font-bold text-white">
                    mdabsiddiq04@gmail.com
                  </h2>
                  <div className="flex text-white gap-1">
                    <lord-icon
                      src="https://cdn.lordicon.com/srsgifqc.json"
                      trigger="hover"
                      colors="primary:#03c988"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>

                    <span>01889551270</span>
                  </div>
                  <p className="text-white mb-5">Dhaka, Bangladesh</p>

                  <div className="flex space-x-5 text-white mb-5">
                    <Link to="https://github.com/ABuBakar7447" className="">
                      <div className="border border-white rounded-full p-3 hover:border-[#03C988] hover:text-[#03C988]">
                        <Icon className="w-5 h-5" icon="uiw:github" />
                      </div>
                    </Link>

                    <Link to="https://www.linkedin.com/in/md-abu-bakar-siddiq-tapu/">
                      <div className="border border-white rounded-full p-3 text-white hover:border-[#03C988] hover:text-[#03C988]">
                        <Icon
                          className="w-5 h-5"
                          icon="akar-icons:linkedin-fill"
                        />
                      </div>
                    </Link>

                    <Link to="https://www.facebook.com/profile.php?id=100008633739655&mibextid=ZbWKwL">
                      <div className="border border-white rounded-full p-3 text-white hover:border-[#03C988] hover:text-[#03C988]">
                        <Icon className="w-5 h-5" icon="basil:facebook-solid" />
                      </div>
                    </Link>

                    <Link to="">
                      <div className="border border-white rounded-full p-3 text-white hover:border-[#03C988] hover:text-[#03C988]">
                        <Icon className="w-5 h-5" icon="mdi:whatsapp" />
                      </div>
                    </Link>
                  </div>
                  <div className="card-actions mb-3">
                    <a href="#contactme">
                      <button className="btn btn-success w-[256px] border-none bg-[#03C988]">
                        HIRE ME
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%]">
          <div className="mb-20 w-full">
            <h1 className="lg:text-[62px] text-[28px] font-semibold mb-5">
              Hey! I am <span className="text-[#03C988]"> Md. Abu Bakar,</span>{" "}
              <br />
              <span> MERN Stack Web Developer</span>
            </h1>

            <p className="text-[24px]">
              I am a Mern Stack Developer who loves to create a creative dynamic
              and responsive web applications.
            </p>
          </div>

          <div className="flex justify-between">
            <div className="w-1/2 flex justify-between">
              <div>
                <h1 className="lg:text-6xl text-5xl text-[#03C988]">1+</h1>
                <p>
                  Years Of <br />
                  Experience
                </p>
              </div>
              <div>
                <h1 className="lg:text-6xl text-5xl text-[#03C988]">12+</h1>
                <p>
                  Projects <br />
                  Completed
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000">
              <a
                href="#projects"
                className="lg:text-[28px] text-[20px] font-semibold flex items-center"
              >
                <p className="m-3 text-[#03C988] text-center">View Project</p>
                <lord-icon
                  src="https://cdn.lordicon.com/xcrjfuzb.json"
                  target="a"
                  trigger="hover"
                  state="hover-arrow-down-2"
                  colors="primary:#fff"
                  style={{ width: "28px", height: "28px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
