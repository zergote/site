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
    <div className="containner bg-slate-600 max-w-96">
      <div className="flex items-center text-center flex-col rounded-lg p-3">
        <p>Mi nombre es Christian Yánez, crecí en Irapa/Sucre, una hermosa ciudad del oriente de Venezuela. Trabajo profesionalmente en el desarrollo de software para computadoras en diferentes roles: he sido fronted, backendm devops, asi como ingeniero de software, gerente de producto. Cuando la vida y el trabajo lo permiten, disfruto publicando y compartiendo todo lo que descubro o invento en este mismo sitio web.
        </p>
        <a href="tel:+34679787002">+34 679 78 70 02</a>
        <div>
          <a href="mailto:christian@yanezc.com">christian@yanezc.com</a>
          <button onClick={handleCopyMail}>COPIAR</button>
          {visible && <span className="text-red-700 absolute inline-block border-dotted border-red-600 z-10 bg-slate-50 ">email copiado</span>}
        </div>
      </div>
    </div>
  )
}