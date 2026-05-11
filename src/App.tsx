import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {

  const [search, setSearch] = useState("");

  return (
    <div className="app-container">

      {/* NAVBAR */}

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      {/* MAIN CONTENT */}

      <main className="main-content">

        <Routes>

          <Route
            path="/"
            element={
              <Home  />
            }
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

        </Routes>

      </main>

    </div>
  );
}

export default App;