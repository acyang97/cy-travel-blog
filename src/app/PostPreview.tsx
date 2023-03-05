import { PostMetadata } from "interfaces/PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">
          {props.title}
        </h2>
        <p className="text-sm text-slate-400">{props.subtitle}</p>
        <p className="text-slate-700">{props.date}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
