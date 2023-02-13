import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = (props: any) => {
  const slug: string = props.params.slug;
  const post = getPostContent(slug);
  return (
    <p>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </p>
  );
};

export default PostPage;
