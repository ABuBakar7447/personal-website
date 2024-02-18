
import { Link } from "react-router-dom";
import '../Style/Style.css';


const NavRoutebtn = ({ routevalue }) => {
    const { link, src, defaultText } = routevalue
    return (
        <li>
            <Link to={link} title={defaultText} className="icon">
                <div className="flex items-center justify-center rounded-2xl gap-2">
                    <lord-icon
                        target="div"
                        src={src}
                        trigger="hover"
                        state="hover-home-1"
                        class="current-color"
                        style={{ width: "30px", height: "30px" }}>
                    </lord-icon>
                </div>

            </Link>

        </li>
    );
};

export default NavRoutebtn;