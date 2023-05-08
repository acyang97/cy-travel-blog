"use client";
import Image from "next/image";
import Link from "next/link";
import HomePageHeaderImage from "../../public/images/HomePage/home-page-header.jpg";

const HomePageHeader = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex my-6 items-center justify-center flex-col">
        <Image
          className="
        h-64 mb-10 object-cover object-center rounded overflow-hidden"
          alt="hero"
          src={HomePageHeaderImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-4xl mb-4 font-bold text-gray-900">
            Welcome to my Travel Blog!
          </h1>
          <p className="mt-8 mb-2 mx-3 leading-relaxed">
            My name is Chun Yang, a 26 year old Singaporean who loves
            travelling! I particularly enjoy solo travelling to off the beaten
            path destinations! I find that myself having the best experiences
            when I set off without a proper plan! Aside from travelling, I also
            enjoy bouldering, photography and watching sports! Fun fact: I have
            many nicknames like Chun, Chunses, Amirul, Julian :)
          </p>
        </div>
        <div className="text-center my-4">
          <h1 className="title-font text-3xl mb-4 text-gray-900">
            I&#39;ve been to 31 countries
          </h1>
          <Link
            href="/destinations"
            role="button"
            className="text-white bg-sky-600 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
          >
            Check Destinations
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
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
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
