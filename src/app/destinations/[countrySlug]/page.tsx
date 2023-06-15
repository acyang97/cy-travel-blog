"use cient";
import { checkIfCountryExistHasPost, getCountry } from "@/utils/country.utils";
import { getPostMetadata } from "@/utils/getPostMetadata";
import PostPreview from "../../../components/PostPreview";
import { notFound } from "next/navigation";
import { countriesTravelledTo } from "@/constants/country.constants";
import ScrollUp from "../../../components/ScrollUp";
import CountryPageHeader from "./CountryPageHeader";
import { PostMetadata } from "@/interfaces/PostMetadata";
import NoPostsYet from "./NoPostsYet";
import CountryPhotosCarousel from "@/components/CountryPhotosCarousel";
import JapanCustomizedPage from "./Japan/JapanCustomizedPage";

interface Props {
  params: {
    countrySlug: string;
  };
}

export const generateStaticParams = async (): Promise<
  {
    countrySlug: string;
  }[]
> => {
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
  const countryCode = getCountry(countrySlug)?.code;

  if (countrySlug === "Japan") {
    return <JapanCustomizedPage countrySlug={countrySlug} />;
  }

  return (
    <div>
      <ScrollUp />
      <CountryPageHeader
        countryName={countrySlug}
        introduction={introduction}
        countryCode={countryCode}
      />
      <div className="mx-12 md:mx-20 lg:mx-40 my-12">
        <div className="mb-10 md:mb-20">
          {checkIfCountryExistHasPost(countrySlug) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
              {postPreviews}
            </div>
          )}
        </div>
        <CountryPhotosCarousel countryName={countrySlug} />
        {!checkIfCountryExistHasPost(countrySlug) && (
          <NoPostsYet countryName={countrySlug} />
        )}
      </div>
    </div>
  );
};

export default CountryPage;
