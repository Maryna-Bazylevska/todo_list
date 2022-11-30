import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import InformationPage from "./pages/InformationPage";
const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route index element={<TodosPage />} />
          <Route path="/about" element={<InformationPage />} />
        </Routes>
      </Suspense>

      <div className="container"></div>
    </>
  );
};

export default App;
