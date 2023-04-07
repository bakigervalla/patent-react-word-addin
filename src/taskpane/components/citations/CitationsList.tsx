import * as React from "react";

interface ItemProps {
  onChange: (params: any) => any;
}

const CitationsList = ({ items }: any, { onChange }: ItemProps) => {
  console.log("items", items);

  return (
    <div className="z-10 mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 dark:divide-gray-600">
      <ul
        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownHelperRadioButton"
      >
        {items &&
          items.map((itm) => {
            return (
              <li key={itm.id}>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center h-5">
                    <input
                      id="helper-radio-4"
                      name="helper-radio"
                      type="radio"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={onChange}
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label htmlFor="helper-radio-4" className="font-medium text-gray-900 dark:text-gray-300">
                      <div>{itm.name}</div>
                      <p id="helper-radio-text-4" className="text-xs font-normal text-gray-500 dark:text-gray-300">
                        Available {itm.available}.
                      </p>
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
