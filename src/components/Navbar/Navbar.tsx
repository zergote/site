import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "../../../public/twitter.svg"
import Sun from "../../../public/sun.svg"
export default function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md min-w-96">
      <div className="containner mx-auto flex justify-between items-center py-3 max-w-screen-lg">
        <h3 className="ml-4 text-sm lg:text-2xl sm:ml-10 md:ml-20 lg:ml-28 xl:ml-32 text-slate-50 text-md md:text-lg whitespace-nowrap font-bold"><Link href="/">Christian Yánez</Link></h3>
        <ul className="flex gap-x-2 font-bold mr-4 text-sm md:text-base lg:text-lg sm:mr-10 md:mr-20 lg:mr-28 xl:mr-32">
          {/*
            <li>
              <Image
                src={Sun}
                alt={"Light"}
                className="mt-1"
                width={20}
                height={20} />
            </li>
          */}
          <li>
            <Link href="/about" className="text-slate-50 mr-1">Sobre mi</Link>
          </li>
          <li>
            <Link href="https://twitter.com/zergote" className="flex text-slate-50">
              <Image
                src={TwitterIcon}
                alt={"@zergote"}
                className="mr-1"
                width={20}
                height={20} />
              Sigueme</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}