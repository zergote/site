import ProjectExample from "../../../public/projectExample.png"
import Image from "next/image"

export default function ProjectsGallery() {
  return (
    <div className="min-w-96">
      <div className=" containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-24 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96 lg:max-w-screen-md sm:mx-auto">
        <div>
          <div>
            <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4">Proyectos</h2>
          </div>
          <div className="flex ml-1 mr-1 text-start">
            <a href="">
              <Image
                src={ProjectExample}
                alt="Projecto de ejemplo"
                className="w-auto h-24"
              />
            </a>
            <dl className="flex flex-col justify-between ml-2 mb-5 text-[#323334]">
              <dt className="text-base font-aino"><a href="" className="underline">GITHUB</a> Feb,2021</dt>
              <dt className="text-lg font-ainoBold">Nombre del proyecto</dt>
              <dt className="text-sm font-ainoHeadline">#javascript #react #nodejs</dt>
              <dd className="text-sm font-aino">Descripcion</dd>
            </dl>
          </div>

          <div className="flex ml-1 mr-1 text-start">
            <a href="">
              <Image
                src={ProjectExample}
                alt="Projecto de ejemplo"
                className="w-auto h-24"
              />
            </a>
            <dl className="flex flex-col justify-between ml-2 mb-5 text-[#323334]">
              <dt className="text-base font-aino"><a href="" className="underline">GITHUB</a> Feb,2021</dt>
              <dt className="text-lg font-ainoBold">Nombre del proyecto</dt>
              <dt className="text-sm font-ainoHeadline">#javascript #react #nodejs</dt>
              <dd className="text-sm font-aino">Descripcion</dd>
            </dl>
          </div>
          <div className="flex ml-1 mr-1 text-start">
            <a href="">
              <Image
                src={ProjectExample}
                alt="Projecto de ejemplo"
                className="w-auto h-24"
              />
            </a>
            <dl className="flex flex-col justify-between ml-2 mb-5 text-[#323334]">
              <dt className="text-base font-aino"><a href="" className="underline">GITHUB</a> Feb,2021</dt>
              <dt className="text-lg font-ainoBold">Nombre del proyecto</dt>
              <dt className="text-sm font-ainoHeadline">#javascript #react #nodejs</dt>
              <dd className="text-sm font-aino">Descripcion</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}