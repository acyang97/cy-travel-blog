import Link from "next/link";

interface Props {
  countrySlug: string;
  text?: string;
}

const BackToCountryButton = (props: Props) => {
  const { countrySlug, text } = props;
  const formattedName = countrySlug.replaceAll("-", " ");

  return (
    <div>
      <Link
        href={`/destinations/${countrySlug}`}
        role="button"
        className="text-slate-600 font-medium px-5 py-2.5 text-center inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        {text} {formattedName}
      </Link>
    </div>
  );
};

export default BackToCountryButton;
