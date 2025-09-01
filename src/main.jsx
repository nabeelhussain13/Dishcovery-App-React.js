import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import AppName from "./components/AppName.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetail />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppName />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
