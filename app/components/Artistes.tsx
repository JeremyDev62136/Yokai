import Image from "next/image"
import LK from "../images/LK.webp"

export default function Artistes() {
    return (
        <section className='flex flex-col justify-center gap-6 items-center my-5 w-11/12 mx-auto max-w-[1140px]'>
            <h2 className='text-xl md:text-3xl'>Votre tatoueuse</h2>
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <Image src={LK}
                    width={1288} height={1716}
                    className="w-80 md:w-6/12 max-w-[380px] max-h[500px]"
                    alt="photo de l'artiste Littlekowicz" />
                    <p>Alvaro Sanchez est l’un des artistes tatoueurs du salon Kalie Art Tattoo. Ce tatoueur a participé à de nombreuses conventions nationale et internationale afin de se frotter avec les meilleurs, il reviendra souvent avec des prix et des coupes pour la qualité reconnue de ses tatouages.  Complètement en phase avec la philosophie du salon Kalie Art tattoo, il a rejoint l’équipe il y a quelques années dans le but d’étoffer le panel des techniques en noir et gris que propose le salon.

Par son expérience et ses inspirations, Alvaro Sanchez s’est passionné pour le réalisme : le réalisme Noir et Gris ou le réalisme Couleur. Sa technique sur le dégradé d’ombrages est absolument remarquable. La technique du réalisme permet d’offrir à nos clients des projets comme la représentation de personnages de films, d’individus chers à leurs cœurs, des personnalités iconiques, des animaux, des crânes ou des sujets imaginés avec le client qu’il créera en technique de photocomposition avec plusieurs sujets pour apporter des décors à une photo ou de jumeler plusieurs personnages ensemble.</p>
            </div>
        </section>
    )
}
