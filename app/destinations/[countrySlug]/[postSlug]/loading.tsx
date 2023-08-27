import LoadingSpinner from "components/LoadingSpinner";
import ScrollUp from "components/ScrollUp";

// https://learnjsx.com/category/4/posts/nextjs-tailwind-spinner
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <ScrollUp />
      <LoadingSpinner />
    </div>
  );
}
