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
            <div className="flex justify-around lg:text-center items-center h-screen bg-blue-800 lg:block">
                <div className="w-3/6 flex px-48 md:px-0 sm:text-center md:mx-auto">
                    <div className="lg:h-full">
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
                            className="text-white text-7xl sm:text-3xl"
                        />
                        <div className="text-6xl lg:text-center font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
                            <span>AGENT</span>
                        </div>
                    </div>
                </div>
                <div className="w-3/6 flex justify-center mx-auto">
                    <img src={ Applogo } alt="" />
                </div>
            </div>
        </div>
    );
}