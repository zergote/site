export default function BottomNav() {
  return (
    <div className="bg-white text-black font-bold text-sm sticky bottom-0  sm:relative mt-5 rounded-t-lg font-mono pl-3 pr-3 border-t border-gray-600">
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