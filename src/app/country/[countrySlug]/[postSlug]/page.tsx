import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { getPostMetadata } from "utils/getPostMetadata";
import { countriesTravelledTo } from "../../countries";

interface PostPageSlugs {
  countrySlug: string;
  postSlug: string;
}

// const getPostContent = (slug: string) => {
//   const folder = "posts/";
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// };

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

const PostPage = (props: any) => {
  // const slug: string = props.params.slug;
  // const post = getPostContent(slug);
  // console.log(props);
  return (
    <p>
      {/* {props} */}
      {/* <h1 className="text-2xl text-violet-600">{post.data.title}</h1>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article> */}
    </p>
  );
};

export default PostPage;
