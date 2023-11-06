"use client";

import { EdgeStoreProvider } from "@/lib/edgestore";
import { SessionProvider } from "next-auth/react";

import React from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </SessionProvider>
  );
};
