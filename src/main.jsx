import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import { CountriesProvider } from "./context/CountriesContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // element: <Header/>,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "country/:name",
        element: <CountryDetails />,
      },
    ],
  },

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  </StrictMode>
);
