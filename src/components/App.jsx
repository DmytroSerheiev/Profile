import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderLayout } from "./HeaderLayout/HeaderLayout";

const Profile = lazy(() => import("../page/Profile/Home"));
const Account = lazy(() => import("../page/Account/Account"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Profile />} />
        <Route path="Account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default App;
