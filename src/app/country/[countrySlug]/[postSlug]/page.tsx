import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { countriesTravelledTo } from "../../countries";

interface PostPageSlugs {
  countrySlug: string;
  postSlug: string;
}

interface Props {
  params: {
    countrySlug: string;
    postSlug: string;
  };
}

const getPostContent = (countrySlug: string, postSlug: string) => {
  const folder = "posts/";
  const file = `${folder}${countrySlug}/${postSlug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  let paths: PostPageSlugs[] = [];
  countriesTravelledTo.forEach((country) => {
    country.posts.forEach((postSlug) => {
      paths.push({
        countrySlug: country.name,
        postSlug,
      });
    });
  });
  return paths;
};

const PostPage = (props: Props) => {
  const { countrySlug, postSlug } = props.params;
  const post = getPostContent(countrySlug, postSlug);
  return (
    <p>
      <h1 className="text-2xl text-violet-600">{post.data.title}</h1>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </p>
  );
};

export default PostPage;
