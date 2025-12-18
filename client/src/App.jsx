import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Index from "./pages";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
