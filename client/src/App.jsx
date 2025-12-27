import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router";
import Index from "./pages";
import NotFound from "./pages/notFound";
import Profile from "./pages/profile";
import Catelog from "./pages/catelog";
import BookDetails from "./pages/bookDetails";
import AdminDashboard from "./pages/admin/Dashboard";
import ManageBooks from "./pages/admin/ManageBooks";
import ManageUsers from "./pages/admin/ManageUsers";

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
      {/* Only show Header for non-admin routes */}
      {!isAdminRoute && <Header />}

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catelog />} />
        <Route path="/book/:bookId" element={<BookDetails />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/books" element={<ManageBooks />} />
        <Route path="/admin/users" element={<ManageUsers />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
