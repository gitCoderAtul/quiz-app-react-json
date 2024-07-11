import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
  ]);

  export default appRouter;