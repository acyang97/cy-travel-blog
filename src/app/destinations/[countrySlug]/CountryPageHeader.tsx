"use client";

interface Props {
  countryName: string;
  introduction?: string | undefined;
}

const CountryPageHeader = (props: Props) => {
  const { countryName, introduction } = props;
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex my-6 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-4xl md:text-6xl mb-4 font-bold text-gray-900 tracking-widest">
            {countryName}
          </h1>
          {introduction && (
            <p className="mt-8 mb-2 mx-3 leading-relaxed text-gray-500">
              {introduction}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default CountryPageHeader;
