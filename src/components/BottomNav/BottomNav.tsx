export default function BottomNav() {
  return (
    <div className="visible sm:hidden bg-[#f0f1f2] text-[#323334] font-bold text-sm sticky bottom-0  sm:relative rounded-t-lg font-mono pl-3 pr-3 sm:pl-16 sm:pr-16 border-t border-gray-600 md:ml-20 md:mr-20">
      <ul className="flex justify-between items-center text-center">
        <li><a href="https://github.com/zergote">GitHub</a></li>
        <li>|</li>
        <li><a href="https://twitter.com/zergote">Twitter</a></li>
        <li>|</li>
        <li><a href="https://www.linkedin.com/in/zergote/">Linkedin</a></li>
        <li>|</li>
        <li><a href="pdf">Resume</a></li>
        <li>|</li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  )
}
// overflow-x-auto containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96 lg:max-w-screen-md sm:mx-auto