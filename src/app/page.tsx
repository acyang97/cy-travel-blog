// import Image from 'next/image'
import { Inter } from "@next/font/google";
import { getPostMetadata } from "utils/getPostMetadata";
import PostPreview from "./PostPreview";
// import styles from './page.module.css'
const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  // I want to read all these posts
  const postMetada = getPostMetadata();
  const postPreviews = postMetada.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>
  );
};

export default HomePage;
