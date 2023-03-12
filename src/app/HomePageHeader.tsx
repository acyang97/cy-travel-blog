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
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
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
          <h1 className="title-font text-4xl mb-4 font-bold text-gray-900">
            I&#39;ve been to 28 countries.
          </h1>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
