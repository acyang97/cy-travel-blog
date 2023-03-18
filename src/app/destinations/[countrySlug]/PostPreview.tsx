import { PostMetadata } from "@/interfaces/PostMetadata";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: PostMetadata;
  slug: string;
}

const PostPreview = (props: Props) => {
  const { post, slug } = props;
  const { previewPhoto, title, subtitle, date } = post;
  return (
    // <div className="w-full overflow-hidden rounded-lg shadow-lg bg-sky-800">
    <div className="w-11/12 mx-auto bg-sky-700 border border-gray-200 rounded-lg shadow">
      <Image
        className="object-cover w-full h-40 lg:h-56 rounded-t-lg"
        src={previewPhoto ? previewPhoto : "/images/CountryPage/Albania.jpeg"}
        // Don't think the width here matters as it is already decided by tailwind
        width={800}
        height={600}
        // onError: TODO
        // src={`/images/CountryPage/${name}.jpeg`}
        // src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt={post.title}
      />

      <div className="p-5">
        <Link href={`destinations/${slug}/${post.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-white">{subtitle}</p>
        <Link
          href={`destinations/${slug}/${post.slug}`}
          className="inline-flex items-center py-2 text-sm font-medium text-center text-white"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
// const CountryPostPreview = (props: Props) => {
//   const { post, slug } = props;
//   return (
//     <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
//       <Link href={`destinations/${slug}/${post.slug}`}>
//         <h2 className="font-bold text-violet-600 hover:underline">
//           {post.title}
//         </h2>
//         <p className="text-sm text-slate-400">{post.subtitle}</p>
//         <p className="text-slate-700">{slug}</p>
//         <p className="text-slate-700">{post.date}</p>
//       </Link>
//     </div>
//   );
// };

export default PostPreview;
