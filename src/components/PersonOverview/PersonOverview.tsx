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
    <div className="text-[#323334] containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-24 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96 lg:max-w-screen-md sm:mx-auto">
      <div className="flex flex-col rounded-lg font-aino">
        <p>Mi nombre es Christian, crecí en Irapa, una hermosa ciudad del oriente de Venezuela. Trabajo profesionalmente en el desarrollo de software en diferentes roles: he sido fronted, backend así como devops.</p>
        <p>Cuando la vida y el trabajo lo permitan, disfrutaré publicando y compartiendo todo lo que descubro o invento en este sitio web.</p>
        <div>
          <span>
            Si estás interesado en conocerme, no lo dudes y ponte en contacto conmigo en <a href="mailto:christian@yanezc.com" className="bg-slate-300 border border-blue-700 hover:border-indigo-700 p-1 font-mono">christian@yanezc.com</a> <button onClick={handleCopyMail}>
              <svg className="pt-1 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z" />
              </svg>
            </button>
            {visible && <span className="text-red-700 absolute inline-block border-dotted border-red-600 z-10 bg-slate-50 font-mono bottom-0 right-0">email copiado</span>} o <a href="tel:+34679787002" className="font-mono">+34 679787002</a>
          </span>
        </div>
      </div>
    </div >
  )
}
