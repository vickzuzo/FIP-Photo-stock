import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StyledHeader, StyledHeaderContainer } from "./styles";
import { AiOutlineLogout, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import AddNewPhotoModal from "../ModalComps/AddNewPhotoModal";
import { useAuth, useDisclosure } from "../../hooks";
import Cookies from "js-cookie";

const Header = () => {
  const [fixed, setFixed] = useState(false);

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    Cookies.remove("access_token", "");
    Cookies.remove("userID", "");
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <StyledHeaderContainer active={fixed}>
      <StyledHeader>
        <div className="logo">Photo Stock</div>
        <nav>
          <NavLink to="/">Images</NavLink>
          <NavLink to="/videos">Videos</NavLink>
          <NavLink to="/flexibull">flexibull</NavLink>
        </nav>
        <div className="right">
          <NavLink to="/pricing" className="pricing">
            Pricing
          </NavLink>
          {!isLoggedIn && (
            <Link to="/auth/register" className="auth">
              Sign up free
            </Link>
          )}
          {isLoggedIn && (
            <>
              <Link to="/user/profile" className="pricing">
                <AiOutlineUser />
              </Link>
              <div onClick={onOpen} className="auth add_btn">
                <AiOutlinePlus />
                add Photo
              </div>
              <div onClick={onLogoutClick} className="auth add_btn logout">
                <AiOutlineLogout />
                logout
              </div>
            </>
          )}
        </div>
      </StyledHeader>
      <AddNewPhotoModal isOpen={isOpen} onClose={onClose} />
    </StyledHeaderContainer>
  );
};

export default Header;
