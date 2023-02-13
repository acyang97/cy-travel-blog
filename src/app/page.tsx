import fs from "fs";
// import Image from 'next/image'
import { Inter } from "@next/font/google";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "interfaces/PostMetadata";
// import styles from './page.module.css'
const inter = Inter({ subsets: ["latin"] });

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

const HomePage = () => {
  // I want to read all these posts
  const postMetada = getPostMetadata();
  const postPreviews = postMetada.map((post) => (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
      </Link>
    </div>
  ));

  return <h1>{postPreviews}</h1>;
};

export default HomePage;
