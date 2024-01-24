import ProjectExample from "../../../public/projectExample.png"
import Image from "next/image"

export default function ProjectsGallery() {
  return (
    <div className=" text-black containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-24 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96 lg:max-w-screen-md sm:mx-auto">
      <div>
        <div>
          <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4">Proyectos</h2>
        </div>
        <div className="flex ml-1 mr-1 text-start">
          <Image
            src={ProjectExample}
            alt="Projecto de ejemplo"
            className="w-auto h-24"
          />
          <dl className="flex flex-col justify-between ml-2 mb-5">
            <dt className="text-sm font-bold">Nombre de empresa Feb,2021 | Present</dt>
            <dt className="text-sm">#javascript #react #nodejs</dt>
            <dd className="text-sm">Descripcion</dd>
            <a href="">Link</a>
          </dl>
        </div>

        <div className="flex ml-1 mr-1 text-start">
          <Image
            src={ProjectExample}
            alt="Projecto de ejemplo"
            className="w-auto h-24"
          />
          <dl className="flex flex-col justify-between ml-2 mb-5">
            <dt className="text-sm font-bold">Nombre de empresa Feb,2021 | Present</dt>
            <dt className="text-sm">#javascript #react #nodejs</dt>
            <dd className="text-sm">Descripcion</dd>
            <a href="">Link</a>
          </dl>
        </div>

        <div className="flex ml-1 mr-1 text-start">
          <Image
            src={ProjectExample}
            alt="Projecto de ejemplo"
            className="w-auto h-24"
          />
          <dl className="flex flex-col justify-between ml-2 mb-5">
            <dt className="text-sm font-bold">Nombre de empresa Feb,2021 | Present</dt>
            <dt className="text-sm">#javascript #react #nodejs</dt>
            <dd className="text-sm">Descripcion</dd>
            <a href="">Link</a>
          </dl>
        </div>
      </div>
    </div>
  )
}