"use client";

import Link from "next/link";
import Image from "next/image";

// https://tailblocks.cc/
const AppFooter = () => {
  return (
    <footer className="text-gray-600 body-font bg-white bottom-0 z-30 w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
            src="/images/world-globe.png"
            className="w-10 h-10"
            width={300}
            height={300}
            alt="world-globe"
          />
          <span className="ml-3 text-xl">Chun Travels</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 -{" "}
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chun Travels
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-2">
          <a
            target="_blank"
            href="https://www.instagram.com/chun.yangggg/"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@chuntravels?lang=en"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-10 h-10"
            >
              <path
                fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
              />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
