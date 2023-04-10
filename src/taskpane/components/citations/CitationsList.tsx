import * as React from "react";
import { useCitationStore } from "@context/index";

interface ItemProps {
  onChange: (params: any) => any;
}

const CitationsList = ({ onChange }: ItemProps) => {
  const { selectedCitations } = useCitationStore();
  return (
    <div className="z-10 mt-4 max-w-lg items-center text-center bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 dark:divide-gray-600">
      <ul
        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownHelperRadioButton"
      >
        {selectedCitations &&
          selectedCitations.map((itm) => {
            return (
              <li key={itm.id}>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center h-5">
                    <input
                      id="helper-radio-4"
                      name="helper-radio"
                      type="radio"
                      className="w-4 h-4 text-blue-600 focus:bg-blue-600 border-transparent focus:border-transparent focus:ring-0"
                      onClick={() => onChange(itm)}
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label htmlFor="helper-radio-4" className="font-medium text-gray-900 dark:text-gray-300">
                      <div>{itm.name}</div>
                      <div
                        id="helper-radio-text-4"
                        className="flex text-center items-center w-86 text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Available
                        {itm.available ? (
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-600"
                            aria-hidden="true"
                          >
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="text-red-600"
                          >
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M5.965 4.904l9.131 9.131a6.5 6.5 0 00-9.131-9.131zm8.07 10.192L4.904 5.965a6.5 6.5 0 009.131 9.131zM4.343 4.343a8 8 0 1111.314 11.314A8 8 0 014.343 4.343z"
                            />
                          </svg>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CitationsList;
