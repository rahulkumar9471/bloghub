import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import Dashboard from "../components/admin/Dashboard";
import Blog from "../components/admin/Blog";
import Author from "../components/admin/Author";
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import NavFixedProvider from "../context/NavFixedProvider";

const AdminNavigator = () => {
  return (
    <div className="">
      <div className="flex-1 w-full">
        <NavFixedProvider>
          <Navbar />
          <div className="flex w-full">
            <Sidebar />
            <div className="mt-12 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/author" element={<Author />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </NavFixedProvider>
      </div>
    </div>
  );
};

export default AdminNavigator;
