import React from 'react';
import { ThemeProvider } from "styled-components";

import Mytheme from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard";

export default function App() {
  return (
    <ThemeProvider theme={Mytheme}>
      <Dashboard />
    </ThemeProvider>
  );
}