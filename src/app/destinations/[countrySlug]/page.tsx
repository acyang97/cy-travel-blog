"use cient";
import {
  checkIfCountryExist,
  checkIfCountryExistHasPost,
} from "@/utils/country.utils";
import { getPostMetadata } from "@/utils/getPostMetadata";
import PostPreview from "./PostPreview";
import { notFound } from "next/navigation";
import { countriesTravelledTo } from "@/constants/country.constants";
import ScrollUp from "../../../components/ScrollUp";
import CountryPageHeader from "./CountryPageHeader";

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

  if (
    !checkIfCountryExist(countrySlug) ||
    !checkIfCountryExistHasPost(countrySlug)
  ) {
    notFound();
  }

  const postMetadata = getPostMetadata(countrySlug);
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} post={post} slug={countrySlug} />
  ));

  return (
    <div>
      <ScrollUp />
      <CountryPageHeader countryName={countrySlug} />
      <div className="mx-12 md:mx-20 lg:mx-40 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
          {postPreviews}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
