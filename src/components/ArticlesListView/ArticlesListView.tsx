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
    <div className="relative overflow-x-auto containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-24 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96 lg:max-w-screen-md sm:mx-auto">
      <h1 className="text-[#0000f0] font-ainoHeadline text-2xl">Ultimos Artículos</h1>
      <table className="text-[#575a5d] text-sm text-left rtl:text-right font-aino">
        <thead className="text-xs uppercase font-ainoHeadline">
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
                  const growClassProperty = isTitle ? "px-6 py-3 grow text-[#323334]" : "px-6 py-3 grow-0"
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