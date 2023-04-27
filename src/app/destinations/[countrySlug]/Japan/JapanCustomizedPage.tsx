import CountryPhotosCarousel from "@/components/CountryPhotosCarousel";
import D3JapanMap from "@/components/D3JapanMap/D3JapanMap";
import ScrollUp from "@/components/ScrollUp";
import { PostMetadata } from "@/interfaces/PostMetadata";
import { checkIfCountryExistHasPost, getCountry } from "@/utils/country.utils";
import { getPostMetadata } from "@/utils/getPostMetadata";
import CountryPageHeader from "../CountryPageHeader";
import NoPostsYet from "../NoPostsYet";
import PostPreview from "../PostPreview";

interface Props {
  countrySlug: string;
}

const JapanCustomizedPage = (props: Props) => {
  const { countrySlug } = props;

  let postPreviews;
  if (checkIfCountryExistHasPost(countrySlug)) {
    const postMetadata = getPostMetadata(countrySlug) as PostMetadata[];
    postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} post={post} slug={countrySlug} />
    ));
  }

  const introduction = getCountry(countrySlug)?.introduction;
  const countryCode = getCountry(countrySlug)?.code;

  return (
    <div>
      <ScrollUp />
      <CountryPageHeader
        countryName={countrySlug}
        introduction={introduction}
        countryCode={countryCode}
      />
      <div className="container mx-auto flex my-6 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-2xl md:text-3xl mb-4 text-gray-900">
            I&#39;ve been to 28 prefectures!
          </h1>
        </div>
      </div>
      <div className="mt-4">
        <D3JapanMap />
      </div>
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

export default JapanCustomizedPage;
