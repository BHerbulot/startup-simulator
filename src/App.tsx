import { useState } from "react";
import SideBar from "./shared/components/layout/sidebar/Sidebar.tsx";
import "./styles/App.css";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 p-4">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
