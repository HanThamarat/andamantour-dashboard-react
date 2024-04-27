import Headroom from "react-headroom";
import PropTypes from 'prop-types';

export default function Nav({ children }) {
    return(
        <Headroom>
            <nav className="flex justify-between px-4 py-5 items-center">
                <div className="text-2xl font-bold text-white">
                    <span>AndamanTour</span>
                </div>
                <div>
                    <ul className="flex">
                        { children }
                    </ul>
                </div>
            </nav>
        </Headroom>
    );
}

export function NavItem({ text, link }) {
    return(
        <li className="px-2 py-2 text-white hover:text-blue-400 duration-150 ease-in-out">{ text }</li>
    );
} 

Nav.propTypes = {
    children: PropTypes.object,
}

NavItem.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
}