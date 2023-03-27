import Image from "next/image";
import Link from "next/link";

// https://flowbite.com/docs/components/navbar/
const AppNavBar = () => {
  return (
    <header
      aria-label="Site Header"
      className="bg-white sticky top-0 z-30 w-full"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Replace SVG WITH LOGO */}
        <Link
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href="/"
        >
          <Image
            src="/images/world-globe.png"
            className="w-10 h-10"
            width={300}
            height={300}
            alt="world-globe"
          />
          <span className="ml-3 text-md">Chun Travels</span>
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className=" md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                  role="link"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/destinations"
                >
                  Destinations
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className="flex items-center gap-4">
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default AppNavBar;
