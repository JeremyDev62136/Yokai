import { Instagram } from 'lucide-react';
import Image from "next/image";
import logo from "../images/blankBackground.png";
import banniere from "../images/banniere.png"

export default function Header() {
    return (
        <header>
            <Image
                src={logo}
                width={2755}
                height={2714}
                alt="logo de l'Atelier Yokai"
                className='w-11/12 max-w-[500px] mx-auto lg:hidden'
            ></Image>
            <Image
                src={banniere}
                width={2755}
                height={2714}
                alt="banniere  de l'Atelier Yokai"
                className='hidden lg:block max-w-5xl mx-auto'
            ></Image>
            <a href="https://www.instagram.com/littlekowicz/" target='_blank'>
                <div
                    className="h-8 w-full bg-[var(--secondColor)] flex justify-center items-center gap-2 text-[var(--thirdColor)] cursor-pointer hover:text-[var(--sixthColor)] transition-all duration-500">
                    <p className=' text-xs sm:text-lg'>
                        Parlez nous de votre projet via notre compte Instagram
                    </p>
                    <Instagram />
                </div>
            </a>
        </header>
    );
}
