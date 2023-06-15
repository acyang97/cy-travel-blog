import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { checkIfPostExistByCountry } from "@/utils/country.utils";
import { countriesTravelledTo } from "@/constants/country.constants";
import ScrollUp from "@/components/ScrollUp";
import BackToCountryButton from "@/components/BackToCountryButton";
import Script from "next/script";

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
      <div className="mx-auto max-w-4xl px-6">
        <BackToCountryButton countrySlug={countrySlug} text="Back to " />
        <h1 className="text-4xl md:text-5xl text-slate-900 mt-8 text-center">
          {post.data.title}
        </h1>
        <h3 className="pt-6 text-center text-slate-500">
          Written on {post.data.date}
        </h3>
        <h3 className="pt-2 text-center text-slate-500">
          {post.data.time} mins read
        </h3>
        <div className="mt-8 md:mt-16">
          {/* On prose and configs if want to customize it in future: https://tailwindcss.com/docs/typography-plugin */}
          <div className="mx-2 md:mx-1">
            <article className="prose lg:prose-xl">
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
        <BackToCountryButton
          countrySlug={countrySlug}
          text="View more posts on "
        />
      </div>
      <Script async src="//www.instagram.com/embed.js"></Script>
    </div>
  );
};

export default PostPage;
