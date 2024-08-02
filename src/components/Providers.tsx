"use client";

import React, { useEffect } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { getMyInfo } from "@/actions/auth.action";
import useUserStore from "@/stores/userStore";

interface IProvider {
  children: React.ReactNode;
}

const Providers: React.FC<IProvider> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    fetchMyInfo();
  }, []);

  const fetchMyInfo = async () => {
    try {
      const data = await getMyInfo();
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
      />
    </>
  );
};

export default Providers;
