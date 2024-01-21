
import Image from "next/image"
import ChristianY from "../../../public/christian_yanez.jpg"

export default function About() {
  return (
    <div className="min-w-96">
      <div className="containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-24 lg:ml-32 xl:ml-80 lg:max-w-screen-md sm:mx-auto">
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
        <h1 className="font-bold text-2xl">Sobre mi</h1>
        <div className="text-pretty text-md">
          <p className="mb-3 text-gray-500 dark:text-gray-400">Desde una edad temprana, desarrollé un interés por la física y los fenómenos eléctricos, los cuales me encaminaron hacia la electrónica. Mi pasión por la ingeniería de software se nació cuando tuve mi primer computadora 286 con MSDOS que disfrute, y cuando entre a la Universidad ya sabia que estudiaría Ingeniería en computación por la tecnología y su potencial para cambiar el mundo.</p>

          <p className="mb-3 text-gray-500 dark:text-gray-400">Mi interés se centra en la investigación y desarrollo de infraestructuras tecnológicas, computación quántica e inteligencia artificial y estoy especialmente interesado en las soluciones innovadoras relacionadas con la transferencia de valor entre dos partes.</p>

          <p className="mb-3 text-gray-500 dark:text-gray-400">Hoy, me esfuerzo por crear software que no sólo sea estable y eficiente, sino que también facilite la vida de las personas y sea sostenible a largo plazo.</p>

          <p className="mb-3 text-gray-500 dark:text-gray-400">Mi misión es utilizar mi experiencia y habilidades en ingeniería para contribuir a crear un futuro donde la tecnología sea más accesible y eficiente. </p>

        </div>

        <h3>Contribuciones</h3>
        <p>Mis contribuciones</p>
      </div>
    </div >
  )
}