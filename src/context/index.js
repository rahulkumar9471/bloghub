import React from "react";
import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";
import { Toaster } from "react-hot-toast";
import SidbarProvider from "./SidbarProvider";
import NavFixedProvider from "./NavFixedProvider";

const ContextProviders = ({ children }) => {
  return (
    <NavFixedProvider>
      <SidbarProvider>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
        <Toaster />
      </SidbarProvider>
    </NavFixedProvider>
  );
};

export default ContextProviders;
