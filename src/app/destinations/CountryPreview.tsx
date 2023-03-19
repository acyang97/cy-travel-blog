import { Country } from "@/interfaces/Country.interface";
import Link from "next/link";
import Image from "next/image";

const CountryPreview = (props: Country) => {
  const { name, year } = props;
  const formattedName = name.replaceAll("-", " ");

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg bg-sky-700">
      <Image
        className="object-cover w-full h-56 lg:h-72"
        // Don't think the width here matters as it is already decided by tailwind
        width={800}
        height={600}
        // onError: TODO
        src={`/images/CountryPage/${name}.jpeg`}
        // src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt={name}
      />

      <div className="py-5 text-center">
        <Link
          href={`/destinations/${name}`}
          className="block text-xl font-bold text-gray-800 dark:text-white"
          role="link"
        >
          {formattedName}
        </Link>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Last been to on {year}
        </span>
      </div>
    </div>
  );
};

export default CountryPreview;
