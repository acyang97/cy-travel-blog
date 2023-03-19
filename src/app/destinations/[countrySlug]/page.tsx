"use cient";
import { checkIfCountryExistHasPost, getCountry } from "@/utils/country.utils";
import { getPostMetadata } from "@/utils/getPostMetadata";
import PostPreview from "./PostPreview";
import { notFound } from "next/navigation";
import { countriesTravelledTo } from "@/constants/country.constants";
import ScrollUp from "../../../components/ScrollUp";
import CountryPageHeader from "./CountryPageHeader";
import { PostMetadata } from "@/interfaces/PostMetadata";
import NoPostsYet from "./NoPostsYet";

interface Props {
  params: {
    countrySlug: string;
  };
}

export const generateStaticParams = async () => {
  return countriesTravelledTo.map((country) => ({
    countrySlug: country.name,
  }));
};

const CountryPage = (props: Props) => {
  const { countrySlug } = props.params;

  if (!getCountry(countrySlug)) {
    notFound();
  }
  let postPreviews;
  if (checkIfCountryExistHasPost(countrySlug)) {
    const postMetadata = getPostMetadata(countrySlug) as PostMetadata[];
    postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} post={post} slug={countrySlug} />
    ));
  }

  const introduction = getCountry(countrySlug)?.introduction;

  return (
    <div>
      <ScrollUp />
      <CountryPageHeader
        countryName={countrySlug}
        introduction={introduction}
      />
      <div className="mx-12 md:mx-20 lg:mx-40 my-12">
        {checkIfCountryExistHasPost(countrySlug) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
            {postPreviews}
          </div>
        ) : (
          <NoPostsYet countryName={countrySlug} />
        )}
      </div>
    </div>
  );
};

export default CountryPage;
