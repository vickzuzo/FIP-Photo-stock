import Cookies from "js-cookie";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlinePicture,
  AiOutlineUser,
} from "react-icons/ai";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledContent,
  StyledLogoutButton,
  StyledNavContainer,
  StylednavItem,
  StyledSidebarContainer,
} from "./styles";

const SidebarLayout = () => {
  const { pathname } = useLocation();

  const links = [
    {
      title: "Dashboard",
      to: "/admin/dashboard",
      icon: <AiOutlineHome />,
      isActive: pathname === "/admin/dashboard",
    },
    {
      title: "Photos",
      to: "/admin/photos",
      icon: <AiOutlinePicture />,
      isActive: pathname === "/admin/photos",
    },
    {
      title: "Users",
      to: "/admin/users",
      icon: <AiOutlineUser />,
      isActive: pathname === "/admin/users",
    },
  ];

  const navigate = useNavigate();

  const onLogoutClick = () => {
    Cookies.remove("access_token", "");
    Cookies.remove("userID", "");
    navigate("/", { replace: true });
  };

  return (
    <StyledContainer>
      <StyledSidebarContainer>
        <div className="logo">Photo Stock</div>
        <StyledNavContainer>
          {links.map((link, idx) => (
            <StylednavItem to={link.to} isActive={link.isActive}>
              {link.icon}
              <p>{link.title}</p>
            </StylednavItem>
          ))}
          <StyledLogoutButton onClick={onLogoutClick}>
            <AiOutlineLogout />
            <p>LOGOUT</p>
          </StyledLogoutButton>
        </StyledNavContainer>
      </StyledSidebarContainer>
      <StyledContent>
        <Outlet />
      </StyledContent>
    </StyledContainer>
  );
};

export default SidebarLayout;
