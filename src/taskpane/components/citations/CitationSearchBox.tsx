import * as React from "react";

interface SearchProps {
  applicationNumber: string;
  onSearch: (params: any) => any;
}

const CitationSearchBox = ({ applicationNumber, onSearch }: SearchProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    applicationNumber = e.target.value;
  };

  return (
    <div className="citation_main max-w-lg mx-auto items-center text-center">
      <div className="flex flex-col space-y-5">
        <div className="flex">
          <div className="relative w-80">
            <input
              type="text"
              id="voice-search"
              value={applicationNumber}
              onChange={onChange}
              className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by application number"
            />
            <button
              type="button"
              onClick={() => onSearch(applicationNumber)}
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitationSearchBox;
