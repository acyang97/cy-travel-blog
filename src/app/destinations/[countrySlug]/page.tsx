"use cient";
import {
  checkIfCountryExist,
  checkIfCountryExistHasPost,
} from "@/utils/country.utils";
import { getPostMetadata } from "@/utils/getPostMetadata";
import CountryPostPreview from "./CountryPostPreview";
import { notFound } from "next/navigation";
import { countriesTravelledTo } from "@/constants/country.constants";
import ScrollUp from "../../../components/ScrollUp";

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
    <CountryPostPreview key={post.slug} post={post} slug={countrySlug} />
  ));

  return (
    <div>
      <ScrollUp />
      <div className="mx-auto max-w-2xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {postPreviews}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
