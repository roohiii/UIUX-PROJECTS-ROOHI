import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoList from "./components/VideoList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar onSearch={(term) => setSearchTerm(term)} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main
          style={{
            flex: 1,
            backgroundColor: "#0f0f0f",
            color: "white",
            padding: "20px",
          }}
        >
          <h2>Results for: {searchTerm || "Tech Tutorials"}</h2>
          <VideoList searchTerm={searchTerm} />
        </main>
      </div>
    </div>
  );
}

export default App;