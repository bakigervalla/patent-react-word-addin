import * as React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { CitationStoreProvider, CitationSupportProvider } from "../contexts/index";

import Progress from "./shared/Progress";
import { Dashboard, Citation, Login } from "@pages/index";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

/* global Word, require */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  // listItems: HeroListItem[];
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  click = async () => {
    return Word.run(async (context) => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);

      // change the paragraph color to blue.
      paragraph.font.color = "blue";

      await context.sync();
    });
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="flex flex-col h-screen justify-between">
        <Router>
          <Header />
          <div className="flex h-screen">
            <Route
              exact
              path=""
              render={() => {
                return <Redirect to="/citation" />;
              }}
            />
            <CitationSupportProvider>
              <CitationStoreProvider>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/citation" component={Citation} />
                <Route path="/login" component={Login} />
              </CitationStoreProvider>
            </CitationSupportProvider>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}
