import React from "react";
import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";
import { Toaster } from "react-hot-toast";
import SidbarProvider from "./SidbarProvider";

const ContextProviders = ({ children }) => {
  return (
    <SidbarProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
      <Toaster />
    </SidbarProvider>
  );
};

export default ContextProviders;
