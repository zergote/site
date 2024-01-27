import matter from "gray-matter";
import fs from "fs";
import path from "path";

const files = fs.readdirSync(path.join("src/app/posts"));

const allPostsData = files.map((fileName) => {
  const slug = fileName.replace(".mdx", "");
  const fileContents = fs.readFileSync(
    path.join(`src/app/posts/${slug}.mdx`),
    "utf8"
  );
  const { data } = matter(fileContents);
  return {
    slug,
    data,
  };
});

const getPosts = () => {
  return allPostsData
}

const getPost = (slug) => {
  const fileContents = fs.readFileSync(path.join(`src/app/posts/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export const getStaticProps = () => {
  const posts = getPosts();
  return posts
}