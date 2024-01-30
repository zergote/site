import PostLayout from "./PostLayout"
import PostsList from "@/app/posts.json"

const posts = PostsList.posts

const getPostDetails = (title: any, posts: any) => {
  const result = posts.find(((post: any) => {
    if (title === post.title)
      return post
  }))
  return result
}

export const metadata = {
  title: "La Elección de tu Inversión",
  description: "Saber donde invertir tu tiempo para aprender es una habilidad, hay tecnologías que perduran mas tiempo que otras"
}

export default function Post() {
  const postDetail = getPostDetails(metadata.title, posts)

  return (
    <div>
      <PostLayout
        title={postDetail.title}
        date={postDetail.date}
      />
    </div >
  )
}