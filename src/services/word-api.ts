/* eslint-disable no-undef */
class WordApi {
  async searchApplicationNumber(context: Word.RequestContext): Promise<string> {
    //   const { contentControls } = context.document;
    //   context.load(contentControls, "tag, length");
    await context.sync();
    return null;
    //   return contentControls.items.filter((citation) => citation.tag.includes("era"));
  }

  async addCitation(context: Word.RequestContext, text: string): Promise<string> {
    //   const { contentControls } = context.document;
    //   context.load(contentControls, "tag, length");
    await context.sync();
    return text;
    //   return contentControls.items.filter((citation) => citation.tag.includes("era"));
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
