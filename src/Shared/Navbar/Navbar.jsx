// import { Link, useLocation } from "react-router-dom";
import Navbarbtn from "../../Components/NavbarBtn/NavbarBtn";
import '../../Components/Style/Style.css'
import NavRoutebtn from "../../Components/NavRoutebtn/NavRoutebtn";





const Navbar = () => {

    // const location = useLocation();

    const values = [
        {
            "id": 1,
            "src": "https://cdn.lordicon.com/cnpvyndp.json",
            "href": "#introduction",
            "defaultText": "Info"
        },
        {
            "id": 2,
            "src": "https://cdn.lordicon.com/kthelypq.json",
            "href": "#about",
            "defaultText": "About"
        },
        {
            "id": 3,
            "src": "https://cdn.lordicon.com/eouimtlu.json",
            "href": "#service",
            "defaultText": "Services"
        },
        {
            "id": 4,
            "src": "https://cdn.lordicon.com/jnikqyih.json",
            "href": "#skills",
            "defaultText": "Skills"
        },
        {
            "id": 5,
            "src": "https://cdn.lordicon.com/jkzgajyr.json",
            "href": "#projects",
            "defaultText": "Projects"
        },
        {
            "id": 6,
            "src": "https://cdn.lordicon.com/nzixoeyk.json",
            "href": "#contactme",
            "defaultText": "Contact Me"
        },
        

    ]


    const routeValues = [
        {
            "id": 1,
            "link": "/",
            "src": "https://cdn.lordicon.com/cnpvyndp.json",
            "defaultText": "Home"
        },
        {
            "id": 2,
            "link": "/",
            "src": "https://cdn.lordicon.com/cnpvyndp.json",
            "defaultText": "About"
        },

    ]


    return (
        <div >
            <div className="navbar w-[80px] bg-[#1d232a] lg:fixed lg:z-10 min-h-scree">
                <div className="m-2 hidden">
                    <div className="dropdown text-green-600">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>

                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-vertical mt-20">



                        {location.pathname === '/' &&

                            <div className="py-12 border-[1px] border-white rounded-full text-white">

                                {values?.map(value => <Navbarbtn key={value.id} value={value}></Navbarbtn>)}
                            </div>

                        }



                        {/* dynamic button configuration */}
                        
                            {location.pathname !== '/' &&

                                <div  className="py-12 border-[1px] border-white rounded-full">
                                    {routeValues?.map(routevalue => <NavRoutebtn key={routevalue.id} routevalue={routevalue}></NavRoutebtn>)}
                                </div>


                            }
                        


                        {/* {location.pathname !== '/blog' && (

                            <li>
                                <Link to="/blog" title="Blog" className="icon mt-12 py-4 border-[1px] border-white rounded-full">
                                    <div className="flex items-center justify-center rounded-2xl gap-2">
                                        <lord-icon
                                            target="div"
                                            src="https://cdn.lordicon.com/lyrrgrsl.json"
                                            trigger="hover"
                                            class="current-color"
                                            style={{ width: "30px", height: "30px" }}>
                                        </lord-icon>
                                    </div>
                                </Link>

                            </li>
                        )} */}

                    </ul>
                </div>

            </div>



        </div>
    );
};

export default Navbar;