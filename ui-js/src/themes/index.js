import defaultTheme from "./default";
import aliceTheme from "./alice";
import atriumTheme from "./atrium";
import bobTheme from "./bob";
import ncTheme from "./nc";
import operatorTheme from "./operator";

import { createMuiTheme } from "@material-ui/core";

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
  },
};

export default {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
  alice: createMuiTheme({ ...defaultTheme, ...overrides, ...aliceTheme }),
  atrium: createMuiTheme({ ...defaultTheme, ...overrides, ...atriumTheme }),
  bob: createMuiTheme({ ...defaultTheme, ...overrides, ...bobTheme }),
  nc: createMuiTheme({ ...defaultTheme, ...overrides, ...ncTheme }),
  operator: createMuiTheme({ ...defaultTheme, ...overrides, ...operatorTheme })
};
