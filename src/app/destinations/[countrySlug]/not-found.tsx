import ScrollUp from "@/components/ScrollUp";
import Link from "next/link";

// TODO: Configure this page so user can go back to the list of countries
const CountryNotFound = () => {
  return (
    <div>
      <ScrollUp />
      <section className="flex items-center h-full p-16 dark:text-gray-600">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              href="/"
              className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
            >
              Back To Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryNotFound;
