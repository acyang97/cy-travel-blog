import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { checkIfPostExistByCountry } from "@/utils/country.utils";
import { countriesTravelledTo } from "@/constants/country.constants";
import ScrollUp from "@/components/ScrollUp";

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

const getPostContent = (
  countrySlug: string,
  postSlug: string
): matter.GrayMatterFile<string> => {
  const folder = "posts/";
  const file = `${folder}${countrySlug}/${postSlug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async (): Promise<PostPageSlugs[]> => {
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
  const { countryNameExist, postNameExist } = checkIfPostExistByCountry(
    countrySlug,
    postSlug
  );
  if (!countryNameExist || !postNameExist) {
    // TODO: Update the logic here to configure it more nicely depending on which is missing
    notFound();
  }
  const post = getPostContent(countrySlug, postSlug);
  return (
    <div>
      <ScrollUp />
      <div className="mx-auto  max-w-2xl px-6">
        <h1 className="text-2xl text-violet-600">{post.data.title}</h1>
        <article className="prose lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
