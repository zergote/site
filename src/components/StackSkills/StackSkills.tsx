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
    <div className="containner bg-cyan-600 text-black md:max-w-96">
      <div className="flex items-center text-center flex-col p-3">
        <h3>Skills Stack</h3>
        <ul className="flex">
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
          <div>others</div>}
      </div>
    </div>
  )
}