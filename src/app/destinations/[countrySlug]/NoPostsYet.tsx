"use client";

import Link from "next/link";

interface Props {
  countryName: string;
}

const NoPostsYet = (props: Props) => {
  const { countryName } = props;
  const formattedName = countryName.replaceAll("-", " ");

  return (
    <section className="flex items-center h-full px-10 dark:text-gray-600">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, I haven't written a post for {formattedName} yet.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            In the meantime, check out posts on other destinations!
          </p>
          <Link
            rel="noopener noreferrer"
            href="/destinations"
            className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
          >
            Back To Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoPostsYet;
