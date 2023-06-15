import PostPreview from "@/components/PostPreview";
import { PostMetadata } from "@/interfaces/PostMetadata";
import { getPostMetadataByCountryAndPost } from "@/utils/getPostMetadata";

const LatestPosts = () => {
  const LATEST_POSTS = [
    {
      country: "South-Korea",
      fileName: "Cycling-Through-Wonders-In-Jeju-In-4-Days.md",
    },
    {
      country: "Japan",
      fileName: "Cherry-Blossom-Paradise-In-Kanazawa.md",
    },
    {
      country: "Albania",
      fileName: "3-Reasons-To-Travel-To-Albania.md",
    },
  ];
  const postMetadata: { postMetadata: PostMetadata; slug: string }[] = [];
  LATEST_POSTS.forEach(async (item) => {
    postMetadata.push({
      postMetadata: getPostMetadataByCountryAndPost(
        item.country,
        item.fileName
      ),
      slug: item.country,
    });
  });
  let postPreviews;
  postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} post={post.postMetadata} slug={post.slug} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
      {postPreviews}
    </div>
  );
};

export default LatestPosts;
