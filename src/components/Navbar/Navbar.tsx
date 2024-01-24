import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "../../../public/twitter.svg"
import Sun from "../../../public/sun.svg"
export default function Navbar() {
  return (
    <nav className="bg-[#0000f0] shadow-md min-w-96">
      <div className="containner mx-auto flex justify-between items-center py-3 max-w-screen-lg">
        <span className="hover:bg-blue-700 p-2 rounded-sm transition-[background-color] ml-4 sm:ml-4 md:ml-20 lg:ml-28 xl:ml-30">
          <a href="/" className=" text-md lg:text-2xl text-slate-50 text-md md:text-lg whitespace-nowrap font-aino">christian yánez</a>
        </span>
        <ul className="flex items-center mr-4 text-md md:text-base lg:text-lg sm:mr-10 md:mr-20 lg:mr-28 xl:mr-32 ">
          <li>
            <Link href="/about" className="flex items-center text-white mr-1 hover:bg-blue-700  dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm transition-[background-color]">
              <svg className="w-4 h-4 mr-1 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                <path d="M6 5H5v1h1V5Z" />
              </svg>
              sobre mi
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/zergote" className="flex items-center text-slate-50 mr-1 hover:bg-blue-700 p-2 rounded-sm transition-[background-color]">
              <svg className="w-4 h-4 mr-1 text-white" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
              </svg>
              sígueme
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}