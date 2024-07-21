// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
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
    const data = await getMyInfo();
    setUser(data);
  };
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
