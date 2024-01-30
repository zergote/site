"use client"
import Post from "././Post.mdx"
import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from "@/app/mdx-components"
import Header from "../../Header"

export const revalidate = 60;

export default function PostLayout({ title, date }: { title: any, date: any }) {

  return (
    <div className="ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 sm:mr-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-72 2xl:ml-[25rem] 2xl:mr-[25rem] lg:max-w-screen-md sm:mx-auto text-black prose font-aino">
      <div>
        <Header
          title={title}
          date={date}
        />
        <MDXProvider components={useMDXComponents as any}>
          <Post />
        </MDXProvider>
      </div>
    </div>
  );
}