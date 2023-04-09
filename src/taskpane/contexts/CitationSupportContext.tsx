import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import CitationService from "@services/citation/citation.service";

interface CitationSupportProviderProps {
  children: ReactNode;
}

const CitationSupportContext = createContext<CitationService>(null);

export function CitationSupportProvider({ children }: CitationSupportProviderProps): JSX.Element {
  const [CitationSupport] = useState(() => new CitationService());
  useEffect(() => {
    // eslint-disable-next-line no-void
    void CitationSupport.searchApplicationNumber();
  });
  return <CitationSupportContext.Provider value={CitationSupport}>{children}</CitationSupportContext.Provider>;
}

export function useCitationSupport(): CitationService {
  const context = useContext(CitationSupportContext);
  if (!context) {
    throw new Error(
      "useCitationSupport must be used within a CitationSupportProvider. Wrap a parent component in <CitationSupportProvider> to fix this error."
    );
  }
  return context;
}
