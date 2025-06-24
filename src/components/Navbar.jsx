import {cn} from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { useEffect, useState } from 'react';

const NavItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Courses", href: "#courses"},
    {name: "Fun Stuff", href: "#funstuff"},
    {name: "Contact", href: "#contact"}
]
export const Navbar = () => {
    const [isScrolled, SetIsScrolled] = useState(false);
    const [isMenuOpen, SetIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            SetIsScrolled(window.screenY > 10)

            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return <nav className={cn("fixed w-full z-40 transition-all duration-300 font-stix",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}
    >
        <div className='container flex items-center justify-between'>
            {/* Name */}
            <a className='text-xl font-bold text-primary flex items-center' href='#home'>
                <span>
                    Elizabeth Kushelevsky
                </span>
            </a>

            {/* Computer navbar*/}
            <div className='hidden md:flex space-x-8'>
                {NavItems.map((item, key) => (
                    <a key={key} href={item.href} className='text-primary/80 hover:font-stix-italic'>
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile navbar */}
            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md-hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <button onClick={() => SetIsMenuOpen((prev) => !prev)} 
                        className='md:hidden p-2 text-primary z-50'
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>
                <div className='flex-col space-y-8 text-xl'>
                    {NavItems.map((item, key) => (
                        <a key={key} href={item.href} className='text-primary/80' onClick={() => SetIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>;
}