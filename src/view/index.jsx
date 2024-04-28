import Nav,{ NavItem } from "../component/layout/nav";
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import Applogo from '/App.png'

export default function Index() {

    const navDatas = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Sign Up',
            link: '/signup'
        },
        {
            text: 'Sign In',
            link: '/Signin'
        },
    ];


    useEffect(() => {

    }, []);

    return(
        <div className="h-screen font-regular bg-blue-800">
            <Nav>
                {navDatas.map((navItem, navKey) => (
                     <NavItem key={navKey} text={navItem.text} link={navItem.link} />
                ))}
            </Nav>
            <div className="flex justify-around items-center h-screen bg-blue-800">
                <div className="w-3/6 flex px-48">
                    <div>
                        <TypeAnimation
                            sequence={[
                                'AndamanTour',
                                1000,
                                'Wellcome to Andaman',
                                1000,
                            ]}
                            wrapper="span"
                            speed={1}
                            repeat={Infinity}
                            className="text-white text-7xl"
                        />
                        <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
                            <span>AGENT</span>
                        </div>
                    </div>
                </div>
                <div className="w-3/6 flex justify-center">
                    <img src={ Applogo } alt="" />
                </div>
            </div>
        </div>
    );
}