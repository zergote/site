"use client"
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathName = usePathname()

  return (
    <footer className="text-[#0000f0] bg-[#f0f1f2] font-aino min-h-20 pb-5 print:hidden mt-auto">
      <div className="container mx-auto max-w-screen-lg justify-between">
        <div className="flex justify-between mt-6 ml-4 mr-4 sm:ml-15 sm:mr-15 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-40 xl:mr-36 2xl:ml-36 2xl:mr-40">
          <div id="Links-left" className="flex flex-col ">

            {pathName === '/' && <span id="obtenercv">
              <a href="/#resume" onClick={() => { setTimeout(window.print, 200) }}
                className='flex'
              >Resume
                <svg className="w-5 h-5 pt-1 ml-1" viewBox="0 0 60 60"><title>Imprimir CV</title><path d="M42,48H18V12H36l6,6V44" fill="none" stroke="#0000f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><line x1="37" y1="24" x2="23" y2="24" fill="none" stroke="#0000f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><line x1="37" y1="30" x2="23" y2="30" fill="none" stroke="#0000f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><line x1="33" y1="36" x2="23" y2="36" fill="none" stroke="#0000f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><polyline points="36 12 36 18 38 18" fill="none" stroke="#0000f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M35,58.5616A28.9786,28.9786,0,1,0,30,59" fill="none" stroke="#0000f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </a>
            </span>}

            {pathName !== '/' && <span>
              <a href="/#obtenercv" onClick={() => { setTimeout(window.print, 200) }}
              >Obtener CV
              </a>
            </span>}

            <span>
              <a href="/blog">Blog</a>
            </span>
            <span>
              <a href="/about">Christian Yánez</a>
            </span>
          </div>

          <div id="Links-Right" className="flex flex-col  items-end">
            <span className="flex">
              <a href="https://github.com/zergote" target="_blank" rel="noopener noreferrer" className="border-b border-gray-300 transition-[border-color] hover:border-gray-600">
                github
              </a>
              <a href="https://github.com/zergote" target="_blank" rel="noopener noreferrer">
                <svg className="mt-1" width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M4.2218 19.7781L16.2426 7.75732" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.87866 4.22164L19.7782 4.22164L19.7782 14.1211" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </span>

            <span className="flex">
              <a href="https://x.com/zergote" target="_blank" rel="noopener noreferrer" className="border-b border-gray-300 transition-[border-color] hover:border-gray-600">x / twitter</a>
              <a href="https://x.com/zergote" target="_blank" rel="noopener noreferrer">
                <svg className="mt-1" width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M4.2218 19.7781L16.2426 7.75732" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.87866 4.22164L19.7782 4.22164L19.7782 14.1211" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </span>

            <span className="flex">
              <a href="https://www.linkedin.com/in/zergote/" target="_blank" rel="noopener noreferrer" className="border-b border-gray-300 transition-[border-color] hover:border-gray-600">
                linkedin
              </a>
              <a href="https://www.linkedin.com/in/zergote/" target="_blank" rel="noopener noreferrer">
                <svg className="mt-1" width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M4.2218 19.7781L16.2426 7.75732" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.87866 4.22164L19.7782 4.22164L19.7782 14.1211" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </span>

            <span className="flex">
              <a href="mailto:christian@yanezc.com" className="border-b border-gray-300 transition-[border-color] hover:border-gray-600">
                contacto
              </a>
              <a href="mailto:christian@yanezc.com">
                <svg className="mt-1" width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M4.2218 19.7781L16.2426 7.75732" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.87866 4.22164L19.7782 4.22164L19.7782 14.1211" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </span>

            <span className="flex">
              <a href="https://github.com/zergote/site" target="_blank" rel="noopener noreferrer" className="border-b border-gray-300 transition-[border-color] hover:border-gray-600">
                source
              </a>
              <a href="https://github.com/zergote/site" target="_blank" rel="noopener noreferrer">
                <svg className="mt-1" width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M4.2218 19.7781L16.2426 7.75732" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.87866 4.22164L19.7782 4.22164L19.7782 14.1211" stroke="#0000f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </span>



          </div>
        </div>

      </div>
    </footer>
  )
}