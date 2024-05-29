import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./service/query/queryClient.ts";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: `"Cabin"`,
    fontSize: 11,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<>l</>}>
            <App />
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>
);

// font-family: "Cabin", sans-serif !important;
//   font-optical-sizing: auto;
//   /* font-weight: <weight>; */
//   font-style: normal;
//   font-variation-settings: "wdth" 100;
