"use client"
import { useRouter } from "next/navigation";

type Article = {
  fecha: String,
  título: String,
  vistas: number,
  enlace: String

}


const articles: Article[] = [{
  fecha: new Intl.DateTimeFormat('en-US', {
    month: "2-digit",
    year: "2-digit"
  }).format(new Date("2024-10")).toString(),
  título: "Iniciando articulos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, fugit? ",
  vistas: 652,
  enlace: "/Link1"
},
{
  fecha: new Intl.DateTimeFormat('en-US', {
    month: "2-digit",
    year: "2-digit"
  }).format(new Date("2024-10")).toString(),
  título: "Iniciando articulos",
  vistas: 100,
  enlace: "/Link2"
}
]


const getHeadings = () => {
  const previewHeading = Object.keys(articles[0]);
  return previewHeading.slice(0, previewHeading.length - 1)
}

const headings = getHeadings()


export default function ArticlesListView() {
  const router = useRouter()

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-slate-50 font-mono">
        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-600">
          <tr>
            {headings.map((heading, index) => {
              const isTitle = heading === "título"
              const growClassProperty = isTitle ? "px-6 py-3 grow" : "px-6 py-3 grow-0"
              return <th key={index} scope="col" className={growClassProperty}>{heading}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {articles.map((row: any, index: any) => {
            return (
              <tr key={index}
                onClick={() => {
                  router.push(row["enlace"])
                }}
                className="cursor-pointer hover:bg-slate-200"
              >
                {headings.map((index: any) => {
                  const isTitle = index === "título"
                  const growClassProperty = isTitle ? "px-6 py-3 grow text-black" : "px-6 py-3 grow-0"
                  return <td key={row[index]} className={growClassProperty}>
                    {row[index]}
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >

  )
}