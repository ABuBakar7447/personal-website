import About from "../About/About";
import Introduction from "../Introduction/Introduction";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Introduction></Introduction>
            <About></About>
            <Services></Services>
            <Skills></Skills>
        </div>
    );
};

export default Home;