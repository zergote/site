"use client"
import { useRouter } from "next/navigation";

type Article = {
  Fecha: String,
  Título: String,
  Vistas: number,
  Enlace: String

}


const articles: Article[] = [{
  Fecha: new Intl.DateTimeFormat('en-US').format(new Date("10/24")).toString(),
  Título: "Iniciando articulos",
  Vistas: 652,
  Enlace: "/Link1"
},
{
  Fecha: new Intl.DateTimeFormat('en-US').format(new Date("10/10/24")).toString(),
  Título: "Iniciando articulos",
  Vistas: 100,
  Enlace: "/Link2"
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
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-slate-50">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headings.map((heading, index) => {
              return <th key={index} scope="col" className="px-6 py-3">{heading}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {articles.map((row: any, index: any) => {
            return (
              <tr key={index}
                onClick={() => {
                  router.push(row["Enlace"])
                }}
                className="cursor-pointer hover:bg-slate-200"
              >
                {headings.map((index: any) => {
                  return <td key={row[index]} className="px-6 py-4">
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