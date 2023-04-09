declare module "citation" {
  export interface CitationItem {
    id: string;
    name: string;
    referencedParagraphs: number[];
    available: boolean;
  }

  export type CitationResult = [number, string, string];
}
