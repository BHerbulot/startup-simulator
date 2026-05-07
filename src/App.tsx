import { useState } from "react";
import SideBar from "./shared/components/layout/sidebar/Sidebar.tsx";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./app/Router.tsx";

function App() {
  return (
    <div className="w-full flex h-screen">
      <SideBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
