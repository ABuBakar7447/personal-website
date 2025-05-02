import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    

    <div>
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10 text-white">
        {/* Title Section */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-gray-300 text-base md:text-lg">
            Web Developer | Graduate | Tech Enthusiast
          </p>
        </div>

        {/* Introduction */}
        <div
          className="bg-gray-800 p-6 rounded-xl shadow-md"
          data-aos="fade-right"
        >
          <p className="text-base md:text-lg">
          Hello! I’m Md. Abu Bakar Siddiq Tapu, a dedicated and passionate
            full-stack web developer from Bangladesh with a background in
            Computer Science and Engineering. I specialize in building
            responsive, dynamic, and scalable web applications using modern
            technologies like React, Tailwind CSS, JavaScript, Express.js, and
            MongoDB. My journey into tech has been driven by curiosity,
            creativity, and a strong desire to solve real-world problems through
            thoughtful design and clean code. Over the years, I’ve completed
            several certified courses, earned a fully funded scholarship for a
            two-semester Quantum Computing program by Qubit by Qubit, and
            developed hands-on experience by building full-stack projects. I’ve
            also contributed to academic research and hold multiple certificates
            showcasing my commitment to continuous learning and growth. I love
            working in collaborative environments, sharing ideas, and learning
            from others. My goal is to contribute to meaningful projects that
            positively impact people’s lives while continuously improving my
            technical and problem-solving skills. I strive to combine my
            theoretical knowledge, practical experience, and strong work ethic
            to grow as a developer and make a lasting contribution to the tech
            world. I’m always ready to embrace challenges, push my limits, and
            work on innovations that can bring real value to the community.
            
          </p>
        </div>

        {/* Professional Experience */}
        <div
          className="bg-[#1e293b] text-gray-200 rounded-2xl shadow-lg p-6"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold mb-1">Professional Experience</h2>
          <h3 className="text-lg font-semibold text-cyan-300 mb-1">Quantigo AI</h3>
          <p className="text-base font-medium mb-1">Quality Checker</p>
          <p className="text-sm text-gray-400 mb-2">January 2024 - Present</p>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          <li>
              Collaborated with a team to deliver high-quality annotated
              datasets for machine learning models in industries like autonomous
              driving, security, and retail.
            </li>
            <li>
              Utilized advanced annotation tools to perform tasks such as
              semantic segmentation, keypoint annotation, and video annotation
              with a focus on precision and efficiency.
            </li>
            <li>
              Maintained consistent communication with project managers to
              ensure alignment with client requirements and tight deadlines.
            </li>
          </ul>
        </div>

        {/* Education and Courses */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md flex-1" data-aos="fade-right">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>B.Sc. in Computer Science and Engineering</p>
            <p>Daffodil International University</p>
            <p>CGPA: 3.77 / 4</p>
            <p>April 2020 - June 2024</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md flex-1" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-2">Courses</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Complete Web Development (Level - 1)</li>
              <li>Next Level Web Development (Level - 2)</li>
              <li>Quantum Computing (Qubit by Qubit)</li>
            </ul>
          </div>
        </div>

        {/* Certificates */}
        <div className="space-y-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md" data-aos="zoom-in">
            <h3 className="text-xl font-semibold mb-4 text-center">Certificates</h3>

            {[{
              title: "Quantum Computing – Qubit by Qubit",
              text: "I was selected for a fully-funded, two-semester program by Qubit by Qubit, in partnership with The Coding School. Through this course, I gained a solid foundation in quantum mechanics, quantum circuits, and coding quantum algorithms using Qiskit and Python. I completed a capstone project and explored real-world applications of quantum computing. My goal is to contribute to the intersection of quantum computing and software development in the future.",
              img: "https://i.ibb.co.com/36S6Mbn/Quantum.png"
            }, {
              title: "Complete Web Development – Programming Hero",
              text: "I completed this intensive course focused on HTML, CSS, JavaScript, React, Redux, Node Js, Express Js, MongoDB, and Firebase. Through hands-on projects, I built a strong foundation in front-end development and practiced real-world problem-solving. This journey enhanced my skills in responsive design, component-based architecture, and dynamic UI development. It also helped me gain confidence as a full-stack web developer.",
              img: "https://i.ibb.co.com/chRMTjT0/Level-1.png"
            }, {
              title: "Basic Video Editing – GoEdu",
              text: "I completed this short yet focused course covering the fundamentals of video editing. It strengthened my understanding of essential editing tools and techniques, enabling me to create polished video content efficiently.",
              img: "https://i.ibb.co.com/q3khNMcQ/Video-editing.png"
            }].map((cert, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="w-full md:w-1/2">
                  <p className="font-bold text-lg mb-2">{cert.title}</p>
                  <p className="text-base">{cert.text}</p>
                </div>
                <img
                  src={cert.img}
                  alt="Certificate"
                  className="w-full md:w-1/2 h-auto rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md" data-aos="zoom-in">
          <h3 className="text-xl font-semibold mb-2">Publications</h3>
          <ul className="space-y-1 text-blue-400">
            <li>
              <Link
                to="https://link.springer.com/chapter/10.1007/978-3-031-50158-6_19"
                target="_blank"
                className="underline"
              >
                A Review on the Impacts of Social Media on the Mental Health
              </Link>
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-2">Achievements</h3>
          <ul className="list-disc list-inside text-base">
            <li>Performance-based scholarship at DIU</li>
            <li>Winner of Intra-College Debate Competition</li>
            <li>Govt. scholarship in JSC Examination</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
