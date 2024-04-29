import Headroom from "react-headroom";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Nav({ children }) {
    return(
        <Headroom>
            <nav className="flex justify-between px-48 py-5 items-center lg:px-10 sm:px-5">
                <div className="text-2xl font-bold text-white">
                    <span>AndamanTour</span>
                </div>
                <div>
                    <div className="hidden 2xl:">
                        Humber
                    </div>
                    <ul className="flex lg:hidden">
                        { children }
                    </ul>
                </div>
            </nav>
        </Headroom>
    );
}

export function NavItem({ text, link }) {
    return(
        <li className="px-2 py-2 text-white hover:text-blue-400 duration-150 ease-in-out">
            <Link to={link}>{text}</Link>
        </li>
    );
} 

Nav.propTypes = {
    children: PropTypes.object,
}

NavItem.propTypes = {
    text: PropTypes.string,
    link: PropTypes.any,
}