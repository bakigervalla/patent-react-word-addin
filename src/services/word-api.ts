import { CitationItem } from "citation";

/* eslint-disable no-undef */
class WordApi {
  async searchApplicationNumber(): Promise<string | unknown> {
    return Word.run(async (context) => {
      // Queue a command to search the document and also don't ignore punctuation.
      const searchResults = context.document.body.search("EP22184835", { ignorePunct: true });

      // Queue a command to load the font property values.
      searchResults.load("font, text");

      // Synchronize the document state.
      await context.sync();

      // Queue a set of commands to change the font for each found item.
      for (let i = 0; i < searchResults.items.length; i++) {
        searchResults.items[i].font.color = "purple";
        searchResults.items[i].font.highlightColor = "#FFFF00"; //Yellow
        searchResults.items[i].font.bold = true;
      }
      // Synchronize the document state.
      await context.sync();

      return searchResults.items[0].text;
    }).catch((error) => {
      console.log(`Error: ${JSON.stringify(error)}`);
      if (error instanceof OfficeExtension.Error) {
        console.log(`Debug info: ${JSON.stringify(error.debugInfo)}`);
      }
    });
  }

  async insertCitations(data: CitationItem): Promise<void> {
    await Word.run((context: Word.RequestContext) => {
      const getSelection = context.document.getSelection();
      const contentControl = getSelection.insertContentControl();
      contentControl.appearance = "BoundingBox";
      contentControl.insertHtml(JSON.stringify(data), "Replace");
      return context.sync();
    }).catch((error) => {
      console.log(`Error: ${JSON.stringify(error)}`);
      if (error instanceof OfficeExtension.Error) {
        console.log(`Debug info: ${JSON.stringify(error.debugInfo)}`);
      }
    });
  }

  addEventListener = (eventHandler: () => Promise<void>): void => {
    return Office.context.document.addHandlerAsync(
      Office.EventType.DocumentSelectionChanged,
      eventHandler,
      (result) => {
        console.log(`result: ${JSON.stringify(result)}`);
      }
    );
  };

  removeEventListener = (): void => {
    return Office.context.document.removeHandlerAsync(Office.EventType.DocumentSelectionChanged, (result) => {
      console.log(`result: ${JSON.stringify(result)}`);
    });
  };
}

export default WordApi;
