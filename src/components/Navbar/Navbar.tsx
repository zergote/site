import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="containner mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl"><Link href="/">Christian Yánez</Link></h3>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-200">Sobre mi</Link>
          </li>
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-200">Sigueme</Link>
          </li>
        </ul>
      </div>

    </nav>

  )
}