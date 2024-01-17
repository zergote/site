
export default function SubscripctionBox() {

  return (
    <div className="containner bg-red-600 text-black sm:rounded-md md:max-w-96">
      <div className="flex items-center text-center flex-col rounded-lg p-3">
        <h3>¡Suscríbete a la newsletter!</h3>
        <p>Recibirás artículos de calidad sobre frontend y todas las novedades en las que vaya trabajando.¡Nada de spam 🙅‍♂️!</p>
        <form action="sumit" className="pt-2">
          <input type="email" name="email" placeholder=" Tu correo electrónico *" id="" className="text-black rounded-lg p-1 placeholder:translate-x-4" />
          <button className="bg-slate-900 p-1 pl-3 pr-3 rounded-lg ml-1 text-white">Subscriberse</button>
        </form>
      </div>
    </div>
  )
}