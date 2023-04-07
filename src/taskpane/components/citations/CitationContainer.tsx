import * as React from "react";

import styles from "./CitationContainer.module.scss";
import CitationsList from "./CitationsList";
import SearchCitationBox from "./SearchCitationBox";

// import { Stack, Spinner, MessageBar, MessageBarType } from "@fluentui/react";

// import { CitationsList, SearchCitationBox } from "@components/citations/index";

// import { useCitations } from "../hooks/useCitations";

// // QueryClient to interact with a cach
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       retry: false,
//       staleTime: 5 * 60 * 1000,
//     },
//   },
// });

const CitationContainer = () => {
  const onSearch = async (value) => {
    // console.log(process.env.REACT_API_KEY);
    // const response = await getCitations(value);
    console.log("value is " + value);
    // setCitations(response);
  };
  //   const onCitationOptionChange = (value) => {
  //     console.log("value is " + value);
  //   };

  //   const { getCitations } = useCitations();

  //   const [citations, setCitations] = useState<any>({});

  //   if (citations.isLoading) return <Spinner />;
  //   if (citations.error)
  //     return (
  //       <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close">
  //         {citations.error}
  //       </MessageBar>
  //     );

  return (
    <>
      <SearchCitationBox onSearch={onSearch} />
      <CitationsList />
    </>
  );
};

export default CitationContainer;
