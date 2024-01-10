import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router.tsx";
import "./styles/app.scss";
import Loader from "./components/Loader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </React.StrictMode>
);
