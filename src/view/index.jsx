import Nav,{ NavItem } from "../component/layout/nav";

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

    return(
        <div className="h-screen font-regular bg-blue-800">
            <Nav>
                {navDatas.map((navItem, navKey) => (
                     <NavItem key={navKey} text={navItem.text} link={navItem.link} />
                ))}
            </Nav>
        </div>
    );
}