"use client";

import { PostMetadata } from "@/interfaces/PostMetadata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  post: PostMetadata;
  slug: string;
  fromDestinationPage: boolean;
}

const PostPreview = (props: Props) => {
  const router = useRouter();
  const { post, slug, fromDestinationPage } = props;
  const { previewPhoto, title, subtitle } = post;

  let formattedNextLink = "";
  if (!fromDestinationPage) {
    formattedNextLink += "destinations/";
  }
  formattedNextLink += `${slug}/${post.slug}`;

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
        <div
          className="cursor-pointer"
          onClick={() => router.push(formattedNextLink)}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-white">{subtitle}</p>
        <div
          onClick={() => router.push(formattedNextLink)}
          className="inline-flex items-center py-2 text-sm font-medium text-center text-white cursor-pointer"
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
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
