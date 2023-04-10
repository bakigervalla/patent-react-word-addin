import { CitationItem } from "citation";
import WordApi from "../word-api";
import apiClient from "../http/apiClient";

class CitationService {
  wordApi: WordApi;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.wordApi = new WordApi();
  }

  async searchApplicationNumber(): Promise<string | unknown> {
    return await this.wordApi.searchApplicationNumber();
  }

  async getCitations(applicationNumber: string): Promise<Array<CitationItem>> {
    try {
      const response = await apiClient.get(`/citations?applicationNumber=${applicationNumber}`, {
        headers: {
          "API-KEY": "F8A503DB-61A8-40C4-BEC0-00337B5CE6A5",
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return [
        {
          id: "US2020278117",
          name: "US 2020/0278117",
          referencedParagraphs: [69, 70, 72, 73, 77, 80, 114, 1365],
          available: true,
        },
        {
          id: "DE102019107819",
          name: "DE 10 2019 107 819",
          referencedParagraphs: [],
          available: false,
        },
        {
          id: "EP3758439",
          name: "EP 3 758 439",
          referencedParagraphs: [25, 32, 33, 80],
          available: true,
        },
        {
          id: "US2021080114",
          name: "US 2021/0080114",
          referencedParagraphs: [42],
          available: true,
        },
      ];
    }
  }

  /**
   *  Insert selected citation into the document
   */
  async insertCitations(data: CitationItem): Promise<void> {
    await this.wordApi.insertCitations(data);
  }
}

export default CitationService;
