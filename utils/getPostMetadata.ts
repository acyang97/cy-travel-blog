import { PostMetadata } from "@/interfaces/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = (country: string): PostMetadata[] => {
  const folder = country ? `posts/${country}/` : "posts/";
  let posts: PostMetadata[];
  try {
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(
        `posts/${country}/${fileName}`,
        "utf8"
      );
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    });
    return posts;
  } catch (error) {
    console.log("error", error);
  }
  return [];
};
