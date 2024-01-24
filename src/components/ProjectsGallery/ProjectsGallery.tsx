import ProjectExample from "../../../public/projectExample.png"
import Image from "next/image"

export default function ProjectsGallery() {
  return (
    <div className="min-w-96">
      <div className=" containner ml-4 mr-4 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-72 2xl:ml-96 2xl:mr-96 lg:max-w-screen-md sm:mx-auto">
        <div>
          <div>
            <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4">Proyectos</h2>
          </div>

          <dl className="flex flex-col justify-between mb-5 text-[#323334]">
            <dt className="text-base font-aino"><a href="https://github.com/zergote/DUM-Dashboard-de-habitacion-Domotica" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0]" target="_blank" rel="noopener noreferrer">GITHUB</a> Jun, 2018</dt>
            <dt className="text-lg font-ainoBold">Prototipo Casa Domotica</dt>
            <dt className="text-sm font-ainoHeadline">#c #java #jbeautyeye #jssc #javamail #jfreechart #sqlite #tenssy</dt>
            <dd className="text-sm font-aino">Desarrollado utilizando un microcontrolador Teensy 3.2 como núcleo. El diseño integró una variedad de sensores y actuadores, que incluían medidores de temperatura, humo, humedad, movimiento, gas, fuego, ventiladores, motores e interruptores domóticos, y un panel de control que aseguraba una automatización fluida e intuitiva.</dd>
          </dl>

          <dl className="flex flex-col justify-between mb-5 text-[#323334]">
            <dt className="text-base font-aino"><a href="https://github.com/zergote/Capture-The-Flag-With-Impact.js" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0]" target="_blank" rel="noopener noreferrer">GITHUB</a> Feb, 2017</dt>
            <dt className="text-lg font-ainoBold">Juego Captura la Bandera</dt>
            <dt className="text-sm font-ainoHeadline">#javascript #impactjs #algoritmos #ai</dt>
            <dd className="text-sm font-aino">En este proyecto se implementó con tecnologías como Impact.js y JavaScript para desarrollar la estructura y dinámica del juego. Uno de los principales objetivos del proyecto fue proporcionar una plataforma de prueba para algoritmos de inteligencia artificial (IA). En este sentido, una variedad de algoritmos, incluyendo el algoritmo A*, fueron exitosamente implementados y evaluados.</dd>
          </dl>

        </div>
      </div>
    </div>
  )
}