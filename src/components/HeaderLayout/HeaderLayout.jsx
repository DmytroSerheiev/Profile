import { Appbar } from "../Appbar/Appbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const HeaderLayout = () => {
  return (
    <>
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
