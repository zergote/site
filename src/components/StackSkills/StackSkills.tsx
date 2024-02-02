"use client"

import { useState } from "react"

useState
export default function StackSkills() {
  return (
    <div className="bg-[#000087] text-white print:text-black print:bg-none min-w-96">
      <div className="flex items-center text-center flex-col p-3 print:items-start print:p-0 print:text-start">
        <h2 className="font-ainoBold text-lg print:font-ainoHeadline print:text-xl">Lenguages de Programación & Sistemas</h2>
        <p className="font-ainoHeadline text-sm print:font-aino pt-1 px-2">JavaScript, TypeScript; Python; Node/React/Next.js; TailwindCSS; PostgreSQL; Serverless;Docker; Playwright; Jest; Git/GitFlow/GitHub</p>
      </div>
    </div>
  )
}