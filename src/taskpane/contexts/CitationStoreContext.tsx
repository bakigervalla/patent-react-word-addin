import { CitationItem } from "citation";
import React, { useReducer, useContext, ReactElement, ReactNode, createContext } from "react";

interface CitationStoreProviderProps {
  children: ReactNode;
}

interface CitationStoreContextInterface {
  selectedCitations: Array<CitationItem | null>;
  dispatch: React.Dispatch<citationStoreAction>;
}

export type citationStoreAction =
  | { type: "empty" }
  | { type: "search"; citation: CitationItem }
  | { type: "add"; citation: CitationItem }
  | { type: "remove"; citation: CitationItem }
  | { type: "update"; citation: CitationItem }
  | { type: "replace"; citations: Array<CitationItem> };

const CitationStoreContext = createContext<CitationStoreContextInterface>(null);

const initialState: Array<CitationItem> = [];

export function citationStoreReducer(
  selectedCitations: Array<CitationItem>,
  action: citationStoreAction
): Array<CitationItem | null> {
  switch (action.type) {
    case "empty":
      return [];
    case "search":
      return [...selectedCitations, action.citation];
    case "add":
      return [...selectedCitations, action.citation];
    case "replace":
      return action.citations;
    case "remove":
      return selectedCitations.filter((citation) => citation.id !== action.citation.id);
    case "update": {
      const { id, name, referencedParagraphs, available } = action.citation;
      return selectedCitations.map((item) => {
        return item.id === id ? { ...item, name, referencedParagraphs, available } : item;
      });
    }
    default:
      throw new Error(`Unhandled action`);
  }
}

export function CitationStoreProvider({ children }: CitationStoreProviderProps): ReactElement {
  const [selectedCitations, dispatch] = useReducer(citationStoreReducer, initialState);
  const contextValue = {
    selectedCitations,
    dispatch,
  };
  return <CitationStoreContext.Provider value={contextValue}>{children}</CitationStoreContext.Provider>;
}

export function useCitationStore(): CitationStoreContextInterface {
  const context = useContext(CitationStoreContext);
  if (!context) {
    throw new Error(
      "useCitationStore must be used within a CitationStoreProvider. Wrap a parent component in <CitationStoreProvider> to fix this error."
    );
  }
  return context;
}
