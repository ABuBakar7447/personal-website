import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Introduction from "../Introduction/Introduction";
import MyProject from "../MyProject/MyProject";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Introduction></Introduction>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <MyProject></MyProject>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;