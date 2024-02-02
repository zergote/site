
"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function SubscripctionBox() {
  const router = useRouter()
  const [subsOk, setSubsOk] = useState(false)
  const [emailOk, setEmailOk] = useState(true)
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  async function handleSubmit(e: any) {
    e.preventDefault()
    const email = e.target[0].value
    // validar email
    const emailValido = validateEmail(email)
    if (emailValido) {
      setEmailOk(true)
    } else {
      setEmailOk(false)
      setTimeout(() => {
        setEmailOk(true)
      }, 5000);
      return
    }
    setSubsOk(true)

    const response = await fetch("/api/subscriber", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    //router.push("/subscription")
    setTimeout(() => {
      setSubsOk(false)
    }, 15000)
  }

  return (
    <div className="containner bg-[#f0f1f2] text-[#323334] font-aino print:hidden max-w-96">
      {
        !subsOk && <div className="flex items-center text-center flex-col p-3">
          <h2 className="text-[#0000f0] font-ainoBold text-lg">Suscribete</h2>
          <p>Recibe un correo electrónico cada semana, donde discutiremos sobre desarrollo de software y tecnologías relacionadas.</p>
          <form onSubmit={handleSubmit} className="flex">
            <input type="email" name="email" placeholder="Escribe aquí tu email *" id="email" className="text-[#323334] rounded-l-full p-1 pl-5 placeholder:translate-x-0 -outline-offset-1" />
            <button type="submit" className="bg-[#323334] active:bg-black p-1 pl-3 pr-3 rounded-r-full text-white">{emailOk ? "Me apunto" : "Email errado"}</button>
          </form>
        </div >
      }
      {
        subsOk && <div className="flex items-center text-center flex-col p-3">
          <h2 className="text-[#0000f0] font-ainoBold text-lg">Registro completado!</h2>
          <p>En breve recibiras un email para confirmar que te has subscrito, si no lo encuentras puedes encontrarlo en tu bandeja de correo electronico no deseado o spam y moverlo a su bandeja principal.</p>
        </div >
      }
    </div >
  )
}