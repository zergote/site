"use client"

import { useState } from "react"

useState
export default function StackSkills() {
  const [skills, setSkills] = useState("default")

  const handleViewSkills = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    setSkills(event.currentTarget.id)
  }


  return (
    <div className="bg-[#000087] text-white print:text-black print:bg-black">
      <div className="flex items-center text-center flex-col p-3 print:items-start print:p-0 print:text-start">
        <h2 className="font-ainoBold text-lg print:font-ainoHeadline print:text-xl">Lenguages de Programación & Sistemas</h2>
        <p className="font-ainoHeadline text-xs print:font-aino">JavaScript, TypeScript; Python; Node/React/Next.js; TailwindCSS; PostgreSQL; Serverless;Docker; Playwright; Jest; Git/GitFlow/GitHub</p>
        {/*<ul className="flex">
          <li><button onMouseEnter={handleViewSkills} id="backend" className={` text-white px-4 ${skills === "backend" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`} >Backend</button></li>
          <li><button onMouseEnter={handleViewSkills} id="frontend" className={` text-white px-4 ${skills === "frontend" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}>Frontend</button></li>
          <li><button onMouseEnter={handleViewSkills} id="devops" className={` text-white px-4 ${skills === "devops" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}>DevOps</button></li>
          <li><button onMouseEnter={handleViewSkills} id="others" className={` text-white px-4 ${skills === "others" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}>Otras</button></li>
        </ul>
        {skills === "default" &&
          <div>default</div>}
        {skills === "backend" &&
          <div>backend</div>}
        {skills === "frontend" &&
          <div>frontend</div>}
        {skills === "devops" &&
          <div>devops</div>}
        {skills === "others" &&
  <div>others</div>}*/}
      </div>
    </div>
  )
}