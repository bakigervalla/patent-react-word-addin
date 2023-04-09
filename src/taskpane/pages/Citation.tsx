import React, { useEffect, useCallback, useState } from "react";

import { useCitationStore, useCitationSupport } from "../contexts/index";
import { CitationItem } from "citation";

import { CitationsList, CitationSearchBox } from "@components/citations/index";
import styles from "./Citation.module.scss";

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

const Citation = () => {
  const citeService = useCitationSupport();
  const [applicationNumber, setApplicationNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const { selectedCitations, dispatch } = useCitationStore();
  const [, setCitationItems] = useState<Array<CitationItem | null>>([]);

  useEffect(() => {
    if (applicationNumber) return;
    setLoading(true);
    (async () => {
      const data = await citeService.searchApplicationNumber();
      setApplicationNumber(typeof data === "string" ? data : undefined);
      setLoading(false);
    })();
  }, []);

  const getCitationsByApplicationNumber = useCallback(
    async (appNo): Promise<void> => {
      const items = await citeService.getCitations(appNo);
      console.log("items", items);

      if (items.length) {
        dispatch({ type: "replace", citations: items });
        setCitationItems(items);
      } else {
        dispatch({ type: "empty" });
        setCitationItems([]);
      }
    },
    [citeService.wordApi, dispatch]
  );

  const insertCitation = useCallback(
    async (citation: any): Promise<void> => {
      console.log("selected citation: ", citation);
      await citeService.wordApi.insertCitations(citation);
    },
    [citeService.wordApi, dispatch]
  );

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

  return !loading ? (
    <>
      <div className="mx-5 w-full">
        <CitationSearchBox onSearch={(e) => getCitationsByApplicationNumber(e)} applicationNumber={applicationNumber} />
        <CitationsList onChange={insertCitation} />
      </div>
    </>
  ) : null;
};

export default Citation;
