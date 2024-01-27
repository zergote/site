"use client"
import { useRouter } from "next/navigation";

const getHeadings = (posts: any) => {
  const previewHeading = Object.keys(posts[0].data);
  //return previewHeading
  return previewHeading.slice(0, previewHeading.length - 1)
}



export default function ArticlesListView({ posts }: any) {

  const router = useRouter()
  const headings = getHeadings(posts)

  return (
    <div className="relative overflow-x-auto containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-72 2xl:ml-96 2xl:mr-96 lg:max-w-screen-md sm:mx-auto">
      <h1 className="text-[#0000f0] font-ainoHeadline text-2xl">Ultimos Artículos</h1>
      <table className="text-[#575a5d] text-sm text-left rtl:text-right font-aino w-full">
        <thead className="text-xs uppercase font-ainoHeadline">
          <tr>
            {headings.map((heading, index) => {
              const isTitle = heading === "título"
              const growClassProperty = isTitle ? "px-6 py-3" : "py-3 w-fit w-1/6"
              return <th key={index} scope="col" className={growClassProperty}>{heading}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {posts.map((row: any, index: any) => {
            return (
              <tr key={row["slug"]}
                onClick={() => {
                  router.push(row["slug"])
                }}
                className="cursor-pointer hover:bg-slate-200"
              >
                {headings.map((index: any) => {
                  const isTitle = index === "título"
                  const growClassProperty = isTitle ? "px-6 py-3 text-[#323334]" : "py-3"
                  return <td key={row.data[index]} className={growClassProperty}>
                    {row.data[index]}
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