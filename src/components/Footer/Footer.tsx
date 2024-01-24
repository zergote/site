"use client"
export default function Footer() {
  return (
    <footer className="text-[#0000f0] bg-[#f0f1f2] font-aino min-h-20 pb-5">
      <div className="container mx-auto max-w-screen-lg justify-between">
        <div className="flex justify-between mt-6 ml-4 mr-4 sm:ml-15 sm:mr-15 md:ml-18 md:mr-18 lg:ml-32 lg:mr-32 xl:ml-32 xl:mr-32 2xl:ml-32 2xl:mr-32">
          <div id="Links-left" className="flex flex-col ">
            <span>
              <a href="#resume" onClick={() => { setTimeout(window.print, 200) }}
              >Resume</a>
            </span>
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