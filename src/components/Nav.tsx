import headerLogo from "../assets/images/header-logo.svg"
import {cancel, hamburger} from "../assets/icons" 
import { navLinks } from "../constants"
import {useState} from "react"

interface NavLink {
    href: string,
    label: string
}
export default function Nav() {
    const [isHamburgerOpened, setIsHamburgerOpened] = useState(false)
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src= {headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((link: NavLink): React.ReactNode => {
                        return (
                            <li key={link.href}> <a href= {link.href} className="font-montserrat leading-normal text-lg text-slate-gray"> {link.label} </a></li>
                        )
                    })}
                </ul>
                <div>
                    {!isHamburgerOpened && <img src={hamburger} width={25} height={25} alt="hamburger" className="hidden max-lg:block cursor-pointer" onClick={() => setIsHamburgerOpened((open:boolean) => !open)}/>}
                    {isHamburgerOpened && (
                        <div className="hidden max-lg:flex flex-col fixed top-0 right-4 h-72 bg-white gap-3">
                            <span className="pt-10 pb-4 ml-32">
                                <img src= {cancel} width={24} height={24} alt="cancel" className="cursor-pointer" onClick={() => setIsHamburgerOpened(open => !open)}/> 
                            </span>
                            <ul className="flex flex-1 flex-col justify-center items-center gap-6 px-10">
                                {navLinks.map((link: NavLink): React.ReactNode => {
                                    return (
                                        <li key={link.href}> <a href= {link.href} className="font-montserrat leading-normal text-lg text-slate-gray"> {link.label} </a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
