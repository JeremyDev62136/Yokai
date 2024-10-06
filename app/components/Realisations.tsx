import Image from "next/image"
import book1 from "../images/book1.png"
import book14 from "../images/book14.png"
import book19 from "../images/book19.png"
import book3 from "../images/book3.png"
import book6 from "../images/book6.png"
import book9 from "../images/book9.png"


export default function Realisations() {
    return (
        <section className='w-11/12 my-5 flex flex-col gap-6 justify-center items-center mx-auto max-w-[1140px]'>
            <h2 className="text-xl md:text-3xl">Ses réalisations</h2>
            <div className="flex gap-2 flex-wrap justify-around mx-auto">
                <Image src={book1}
                    width={3307} height={4677}
                    className="w-32 "
                    alt="photo d'un tatouage réalisé par littlekowicz" />
                <Image src={book3}
                    width={3307} height={4677}
                    className="w-32 "
                    alt="photo d'un tatouage réalisé par littlekowicz" />
                <Image src={book6}
                    width={3307} height={4677}
                    className="w-32 "
                    alt="photo d'un tatouage réalisé par littlekowicz" />
                <Image src={book9}
                    width={3307} height={4677}
                    className="w-32 "
                    alt="photo d'un tatouage réalisé par littlekowicz" />
                <Image src={book14}
                    width={3307} height={4677}
                    className="w-32 "
                    alt="photo d'un tatouage réalisé par littlekowicz" />
                <Image src={book19}
                    width={3307} height={4677}
                    className="w-32 "
                    alt="photo d'un tatouage réalisé par littlekowicz" />
            </div>

        </section>
    )
}
