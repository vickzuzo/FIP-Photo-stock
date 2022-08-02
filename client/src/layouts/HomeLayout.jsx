import { Header } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <p>Footer</p> */}
    </div>
  );
};

export default HomeLayout;
