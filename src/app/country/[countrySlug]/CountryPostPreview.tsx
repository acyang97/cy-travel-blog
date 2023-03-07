import { Country } from "@/interfaces/Country.interface";
import { PostMetadata } from "@/interfaces/PostMetadata";
import Link from "next/link";

interface Props {
  post: PostMetadata;
  slug: string;
}
const CountryPostPreview = (props: Props) => {
  const { post, slug } = props;
  return (
    <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`country/${slug}/${post.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">
          {post.title}
        </h2>
        <p className="text-sm text-slate-400">{post.subtitle}</p>
        <p className="text-slate-700">{slug}</p>
        <p className="text-slate-700">{post.date}</p>
      </Link>
    </div>
  );
};

export default CountryPostPreview;
