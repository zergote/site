export default function Header({ title, date }: { title: any, date: any }) {

  return (
    <>
      <h1 className="text-2xl font-bold -mb-2 ">
        {title}
      </h1>

      <p className="font-mono flex text-xs text-gray-500 ">
        <span className="flex-grow">
          <span className="hidden md:inline">
            <span>
              <a
                href="https://twitter.com/zergote"
                className="hover:text-gray-800 dark:hover:text-gray-400"
                target="_blank"
              >
                @zergote
              </a>
            </span>

            <span className="mx-2">|</span>

            <span suppressHydrationWarning={true}>
              {new Date(date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </span>
        </span>
      </p>
    </>
  )
}