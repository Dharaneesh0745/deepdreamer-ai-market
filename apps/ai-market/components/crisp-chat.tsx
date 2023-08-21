"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8cf70ad3-0c9c-4f2f-8874-51c2b19bd9cc");
  }, []);

  return null;
};
