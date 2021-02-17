import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyled from "./Style/GlobalStyled";
import theme from "./Style/theme";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyled />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
