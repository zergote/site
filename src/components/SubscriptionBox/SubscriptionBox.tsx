
export default function SubscripctionBox() {

  return (
    <div className="containner bg-[#f0f1f2] text-[#323334] max-w-96 md:max-w-96 font-aino">
      <div className="flex items-center text-center flex-col p-3">
        <h1 className="text-[#0000f0] font-ainoBold text-lg">Subscribete</h1>
        <p>Recibe un correo electrónico cada semana, donde discutiremos sobre desarrollo de software y tecnologías relacionadas.</p>
        <form action="submit" className="flex">
          <input type="email" name="email" placeholder="Escribe aquí tu email *" id="" className="text-[#323334] rounded-l-full p-1 pl-5 placeholder:translate-x-0 -outline-offset-1" />
          <button className="bg-[#323334] p-1 pl-3 pr-3 rounded-r-full text-white">Me apunto</button>

        </form>
      </div >
    </div >
  )
}