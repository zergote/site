import ProjectExample from "../../../public/projectExample.png"
import Image from "next/image"

export default function ProjectsGallery() {
  return (
    <div className="bg-slate-300 text-black">
      <div className=" text-center">
        <div>
          <h2 className="font-bold text-lg">Proyectos</h2>
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