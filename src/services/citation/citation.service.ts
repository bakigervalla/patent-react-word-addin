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
    const response = await apiClient.get(`/citations?applicationNumber=${applicationNumber}`, {
      headers: {
        "API-KEY": "F8A503DB-61A8-40C4-BEC0-00337B5CE6A5",
      },
    });
    return response.data;
  }

  /**
   *  Insert selected citation into the document
   */
  async insertCitations(data: CitationItem): Promise<void> {
    await this.wordApi.insertCitations(data);
  }
}

export default CitationService;
