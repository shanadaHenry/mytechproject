/*
### Halaman ini digunakan untuk mengatur tema dasar dari native base
*/
import React, { Component } from "react";
import { StyleProvider } from "native-base"; //import component dari native base

import App from "../App";
import getTheme from "../../native-base-theme/components";
import variables from "../../native-base-theme/variables/commonColor";

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
