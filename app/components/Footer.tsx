import { Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className=" p-4 bg-[var(--secondColor)] text-[var(--thirdColor)] flex flex-col gap-8 items-center md:flex-row md:flex-wrap md:items-start md:justify-around">
            <div className="flex flex-col text-center gap-2">
                <h2 className="text-2xl">Atelier Yokai</h2>
                <p>130b Rue du Faubourg d’Arras </p>
                <p>Béthune 62400</p>
                <div className="flex justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5072.764690140884!2d2.6431959000000074!3d50.52705830000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd22578575aaab%3A0x5a32d079ea047364!2s130b%20Rue%20du%20Faubourg%20d&#39;Arras%2C%2062400%20B%C3%A9thune!5e0!3m2!1sfr!2sfr!4v1726137584332!5m2!1sfr!2sfr" width="400" height="300" loading="lazy"
                    className="w-[300px] sm:w-[400px]"></iframe>
                </div>
            </div>
            <div className="flex flex-col text-center gap-2">
                <h2 className="text-2xl">Horaires</h2>
                <p>Du Mardi au Samedi 13:00 - 20:00</p>
                <p>Sans interruption</p>
                <p>Avec ou sans RDV</p>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex justify-center flex-col items-center gap-2">
                    <h2 className="text-2xl">Nos réseaux sociaux</h2>
                    <a href="https://www.instagram.com/atelier_yokai/" target="_blank">
                        <Instagram className="cursor-pointer hover:text-[var(--firstColor)] size-8" />
                    </a>
                </div>
                <div className="flex justify-center flex-col items-center gap-2">
                    <h2 className="text-2xl">Les réseaux de Littlekowicz</h2>
                    <a href="https://www.instagram.com/littlekowicz/" target="_blank">
                        <Instagram className="cursor-pointer hover:text-[var(--firstColor)] size-8" />
                    </a>
                </div>
                <div className="flex justify-center flex-col items-center gap-2 ">
                    <p className="text-sm">Site réalisé par l'Atelier Yokai</p>
                </div>
            </div>
        </footer>
    )
}
