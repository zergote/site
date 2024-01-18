export default function Footer() {
  return (
    <footer className="text-black bg-white drop-shadow-2xl min-w-96">
      <div className="container mx-auto max-w-screen-lg flex justify-between">
        <div className="text-xs ml-4 sm:ml-10 md:ml-20 lg:ml-28 xl:ml-32 pl-1 pt-2 pb-2 text-center dark:text-gray-400 text-gray-500 font-mono">
          Christian Yánez (<a href="https://x.com/zergote" className="border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-gray-500 dark:hover:border-white ">@zergote</a>)
        </div>
        <div className="text-xs mr-4 sm:mr-10 md:mr-20 lg:mr-28 xl:mr-32 pr-1 pt-2 pb-2 text-center dark:text-gray-400 text-gray-500 font-mono"><a href="https://github.com/zergote/site" className="border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-gray-500 dark:hover:border-white ">Source</a></div>
      </div>
    </footer>
  )
}