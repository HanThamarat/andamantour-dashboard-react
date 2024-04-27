import Nav,{ NavItem } from "../component/layout/nav";
import { useEffect } from 'react';

export default function Index() {

    const navDatas = [
        {
            text: 'Home',
            link: '/...'
        },
        {
            text: 'Sign Up',
            link: '/...'
        },
        {
            text: 'Sign In',
            link: '/...'
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
            <div className="flex justify-around items-center border h-full">
                <div>
                    <span>Test</span>
                </div>
                <div>
                    <span>Test</span>
                </div>
            </div>
        </div>
    );
}