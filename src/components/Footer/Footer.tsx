export default function Footer() {
  return (
    <footer className="text-slate-50 bg-blue-600 drop-shadow-lg mt-auto h-8 min-w-96">
      <div className="container mx-auto max-w-screen-lg flex justify-between mt-1.5">
        <div className="text-sm ml-4 sm:ml-10 md:ml-20 lg:ml-28 xl:ml-32">
          Christian Yánez <a href="https://x.com/zergote">(@zergote)</a>
        </div>
        <div className="text-sm mr-4 sm:mr-10 md:mr-20 lg:mr-28 xl:mr-32"><a href="https://github.com/zergote/site">Source</a></div>
      </div>
    </footer>
  )
}