import { useState } from "react";
import SideBar from "./shared/components/layout/sidebar/Sidebar.tsx";
import "./styles/App.css";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <BrowserRouter>
        <div className="flex-1 p-4">{/* Your main content goes here */}</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
