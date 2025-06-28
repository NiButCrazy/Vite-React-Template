import { createBrowserRouter } from "react-router";
import App from "@components/app";
import Home from "@components/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home }
    ]
  },
]);

export default router