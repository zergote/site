"use client"

import { useState } from "react"

export default function PersonOverview() {
  const [visible, setVisible] = useState(false)

  const handleCopyMail = (event: React.MouseEvent<HTMLElement>): void => {
    navigator.clipboard.writeText("christian@yanezc.com")
    setVisible(true)
    setTimeout(() => setVisible(false), 3000)
  }

  return (
    <div className="containner bg-slate-300/85 backdrop-blur-md text-black sm:rounded-md">
      <div className="flex flex-col rounded-lg p-3">
        <p>Mi nombre es Christian Yánez, crecí en Irapa/Sucre, una hermosa ciudad del oriente de Venezuela. Trabajo profesionalmente en el desarrollo de software para computadoras en diferentes roles: he sido fronted, backend, devops, asi como ingeniero de software y gerente de producto. Cuando la vida y el trabajo lo permiten, disfruto publicando y compartiendo todo lo que descubro o invento en este mismo sitio web.
        </p>
        <hr />
        <div className="">
          <span>
            Si estás interesado en conocerme, no lo dudes y ponte en contacto conmigo en <a href="mailto:christian@yanezc.com" className="">christian@yanezc.com</a><button onClick={handleCopyMail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded ml-2">COPIAR</button>
            {visible && <span className="text-red-700 absolute inline-block border-dotted border-red-600 z-10 bg-slate-50 ">email copiado</span>} o <a href="tel:+34679787002">+34 679 78 70 02</a>
          </span>
        </div>
      </div>
    </div>
  )
}