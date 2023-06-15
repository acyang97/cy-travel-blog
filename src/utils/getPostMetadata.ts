import { PostMetadata } from "@/interfaces/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = (country: string): PostMetadata[] => {
  const folder = country ? `posts/${country}/` : "posts/";
  let posts: PostMetadata[];
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
      etc: matterResult.data.etc,
      previewPhoto: matterResult.data.previewPhoto,
      time: matterResult.data.time,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export const getPostMetadataByCountryAndPost = (
  country: string,
  fileName: string
): PostMetadata => {
  console.log("fileName", fileName);
  console.log("country", country);
  const fileContents = fs.readFileSync(`posts/${country}/${fileName}`, "utf8");
  const matterResult = matter(fileContents);
  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
    etc: matterResult.data.etc,
    previewPhoto: matterResult.data.previewPhoto,
    time: matterResult.data.time,
    slug: fileName.replace(".md", ""),
  };
};
