import React, { useEffect, useCallback, useState } from "react";

import { useCitationStore, useCitationSupport } from "../contexts/index";
import { CitationItem } from "citation";

import { CitationsList, CitationSearchBox } from "@components/citations/index";

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
      await citeService.wordApi.insertCitations(citation);
    },
    [citeService.wordApi, dispatch]
  );

  return !loading ? (
    <>
      <div className="mx-5 w-full">
        <CitationSearchBox onSearch={(e) => getCitationsByApplicationNumber(e)} applicationNumber={applicationNumber} />
        {selectedCitations?.length > 0 && <CitationsList onChange={insertCitation} />}
      </div>
    </>
  ) : null;
};

export default Citation;
