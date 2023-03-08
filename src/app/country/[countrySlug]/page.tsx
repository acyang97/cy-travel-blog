import { Country } from "@/interfaces/Country.interface";
import { useRouter } from "next/router";
import {
  checkIfCountryExist,
  checkIfCountryExistHasPost,
} from "utils/country.utils";
import { getPostMetadata } from "utils/getPostMetadata";
import { countriesTravelledTo } from "../countries";
import CountryPostPreview from "./CountryPostPreview";
import { notFound } from "next/navigation";

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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>
  );
};

export default CountryPage;
