
import Image from "next/image"
import ChristianY from "../../../public/christian_yanez.jpg"

export default function About() {
  return (
    <div className="min-w-96">
      <div className="containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md sm:mx-auto">
        <a href="https://twitter.com/zergote">
          <Image
            src={ChristianY}
            alt="Christian Yánez"
            className="rounded-full bg-gray-100 block mt-2 mb-5 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
            unoptimized
            width={160}
            height={160}
            priority
          /></a>

        <h1>Christian Yánez</h1>
        <p>Mi Historia</p>
        <div className="p-4"></div>
        <h3>Contribuciones</h3>
        <p>Mis contribuciones</p>
      </div>

    </div>

  )
}