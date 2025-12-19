import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Index from "./pages";
import NotFound from "./pages/notFound";
import Profile from "./pages/profile";
import Catelog from "./pages/catelog";
import BookDetails from "./pages/bookDetails";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catelog />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
