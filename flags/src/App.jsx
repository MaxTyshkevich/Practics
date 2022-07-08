import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import FlagPage from "./pages/FlagPage";
import Layout from "./pages/Layout";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainPage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="country/:name" element={<FlagPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
