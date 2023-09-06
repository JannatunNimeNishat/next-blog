"use client"
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
]


const Navbar = () => {
    return (
        <div className=" h-[100px] flex justify-between items-center  py-8">
            <Link href='/' >lamamia</Link>
            <div className="flex gap-[20px] items-center">
                <DarkModeToggle/>
                {
                    links.map(item => <Link key={item.id} href={item.url}>{item.title}</Link>)
                }
                <button className="p-[5px] border-none bg-[#53c28b] text-white rounded-[3px]"
                    onClick={() => {
                        console.log('logged out');
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;