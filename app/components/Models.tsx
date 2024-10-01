import Image from "next/image"
import firstImage from "../images/1.jpg"
import secondImage from "../images/2.jpg"
import thirdImage from "../images/3.jpg"
import fourthImage from "../images/4.jpg"
import fifthImage from "../images/5.jpg"

export default function Models() {
  return (
<section className="flex justify-center items-center my-5 gap-4 mx-auto max-w-[1140px]">
  <div className="w-[15%] h-auto aspect-[3300/4200]">
    <Image 
      src={firstImage} 
      width={3300} height={4200} 
      alt="photo d'un tatouage" 
      className="object-cover w-full h-full min-w-16 min-h-28" 
    />
  </div>
  <div className="w-[15%] h-auto aspect-[3300/4200]">
    <Image 
      src={secondImage} 
      width={3300} height={4200} 
      alt="photo d'un tatouage" 
      className="object-cover w-full h-full min-w-16 min-h-28" 
    />
  </div>
  <div className="w-[15%] h-auto aspect-[3300/4200]">
    <Image 
      src={thirdImage} 
      width={3300} height={4200} 
      alt="photo d'un tatouage" 
      className="object-cover w-full h-full min-w-16 min-h-28" 
    />
  </div>
  <div className="w-[15%] h-auto aspect-[3300/4200]">
    <Image 
      src={fourthImage} 
      width={3376} height={4624} 
      alt="photo d'un tatouage" 
      className="object-cover w-full h-full min-w-16 min-h-28" 
    />
  </div>
  <div className="w-[15%] h-auto aspect-[3300/4200]">
    <Image 
      src={fifthImage} 
      width={3509} height={4559} 
      alt="photo d'un tatouage" 
      className="object-cover w-full h-full min-w-16 min-h-28" 
    />
  </div>
</section>

  )
}
