import PostPreview from "@/components/PostPreview";
import { PostMetadata } from "@/interfaces/PostMetadata";
import { getPostMetadataByCountryAndPost } from "@/utils/getPostMetadata";

const LatestPosts = () => {
  const LATEST_POSTS = [
    {
      post: {
        title: "Cycling Through Wonders In Jeju In 4 Days",
        date: "2023-06-15",
        subtitle: "Exploring Jeju in another way!",
        previewPhoto:
          "https://imagedelivery.net/zHaoQUqTgVRyao5aPR7rcg/2d6e5398-e82a-4cb8-4803-5708b4c53a00/public",
        time: "7",
        slug: "Cycling-Through-Wonders-In-Jeju-In-4-Days",
      },
      countryName: "South-Korea",
    },
    {
      post: {
        title: "Cherry Blossom Paradise In Kanazawa",
        subtitle: "The best time to visit Kanazawa",
        date: "2023-04-08",
        previewPhoto:
          "https://imagedelivery.net/zHaoQUqTgVRyao5aPR7rcg/95e21024-2cf1-4ba6-6ff1-c4aed9133800/public",
        time: "3",
        slug: "Cherry-Blossom-Paradise-In-Kanazawa",
      },
      countryName: "Japan",
    },
    {
      post: {
        title: "3 Reasons To Travel To Albania",
        subtitle: "The country where your friends don't know about",
        date: "2023-03-20",
        previewPhoto:
          "https://imagedelivery.net/zHaoQUqTgVRyao5aPR7rcg/d7561c5e-9161-47df-761c-e9a9d9dabf00/public",
        time: "3",
        slug: "3-Reasons-To-Travel-To-Albania",
      },
      countryName: "Albania",
    },
  ];
  const postPreviews = LATEST_POSTS.map((post) => (
    // slug is country
    <PostPreview
      key={post.countryName}
      post={post.post}
      slug={post.countryName}
    />
  ));
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-4xl mb-4 font-bold text-gray-900">
            Check Out My Latest Posts!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-center mt-10 mb-8">
            {postPreviews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
