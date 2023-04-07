import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { initializeIcons, ThemeProvider } from "@fluentui/react";
// import { initializeIcons } from "@fluentui/font-icons-mdl2";

import App from "@components/App";

/* global document, Office, module, require */

initializeIcons();

let isOfficeInitialized = false;

const title = "Patent Maker Add-in";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider>
        <Component title={title} isOfficeInitialized={isOfficeInitialized} />
      </ThemeProvider>
    </AppContainer>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;
  render(App);
  // // Check if HMR interface is enabled
  // if (module.hot) {
  //   // Accept hot update
  //   module.hot.accept();
  // }
});

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
