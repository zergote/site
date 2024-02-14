import Link from "next/link";

export default function ArticlesListView({ posts }: any) {
  return (
    <main className="font-mono m-auto mb-10 text-sm ml-4 mr-4 md:max-w-screen-md sm:ml-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-72 2xl:ml-96 2xl:mr-96 lg:max-w-screen-md sm:mx-auto print:hidden">
      <div>
        <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4" id="resume">Artículos</h2>
      </div>
      <header className="text-[#808284]  flex items-center text-xs font-aino">
        <span className={"w-12 h-9 text-left"}>fecha</span>
        <span className="grow h-9 pl-2">título</span>
        <span className={"h-9 pl-4 mr-2"}>estado</span>
      </header>
      <List posts={posts} />
    </main>
  );

  function List({ posts }: { posts: any }) {

    return (
      <ul>
        {posts.map((post: any, i: number) => {
          const year = getYear(post.date);
          const firstOfYear = getYear(posts[i - 1]?.date) !== year;
          const lastOfYear = getYear(posts[i + 1]?.date) !== year;

          return (
            <li key={post.id}>
              <Link href={`/${new Date(post.date).getFullYear()}/${post.id}`}>
                <span
                  className={`flex transition-[background-color] hover:bg-[#f0f1f2]  active:bg-[#cfd1d2]  border-y border-[#cfd1d2]
                ${!firstOfYear ? "border-t-0" : ""}
                ${lastOfYear ? "border-b-0" : ""}
              `}
                >
                  <span
                    className={`py-3 flex grow items-center ${!firstOfYear ? "ml-14" : ""
                      }`}
                  >
                    {firstOfYear && (
                      <span className="w-14 inline-block self-start shrink-0 text-[#808284] ">
                        {year}
                      </span>
                    )}
                    <span className="grow text-[#323334] hover:text-[#0000f0]">{post.title}</span>
                    <span className="text-white text-xs mr-2 bg-pink-900 rounded-sm p-0.5 font-ainoBold">
                      {post.estado}
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    )
  }

  function getYear(date: string) {
    return new Date(date).getFullYear();
  }
}