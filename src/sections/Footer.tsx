import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

interface SocialMedia {
    src: string, 
    alt: string
}
interface FooterLinks {
    title: string,
    links: {name: string, link: string}[]
}

export default function Footer() {
    return (
        <footer className="max-container">
            <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                {/* Nike */}
                <div className="flex flex-col items-start">
                    <a href="">
                        <img src={footerLogo} alt="footer-logo" width={150} height={46} className="mt-2"/>
                    </a>
                    <p className="text-white mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm "> Get shoes ready for the new term at your nearest Nike store. Find Your perfect size In store. Get Rewards</p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon: SocialMedia): React.ReactNode => {
                            return (
                                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Footer Links */}
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section: FooterLinks): React.ReactNode => {
                        return (
                            <div key={section.title}>
                                <h4 className="text-white font- text-2xl leading-normal font-medium mb-6"> {section.title} </h4>
                                <ul>
                                    {
                                    section.links.map((link: {name: string, link: string}): React.ReactNode => {
                                        return (
                                            <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                                                <a href={link.link} className="text-white"> {link.name} </a>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Copy Right */}
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col
            max-sm:items-center max-sm:gap-4">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
                    <p> Copyright. All rights reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer">
                    Terms & Conditions
                </p>
            </div>
        </footer>
    )
}
