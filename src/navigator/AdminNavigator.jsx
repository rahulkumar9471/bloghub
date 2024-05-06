import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import Dashboard from "../components/admin/Dashboard";
import Blog from "../components/admin/Blog";
import Author from "../components/admin/Author";
import Navbar from "../components/admin/Navbar";

const AdminNavigator = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-2 max-w-screen-xl">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/author" element={<Author />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminNavigator;
