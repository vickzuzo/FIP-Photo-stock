import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeToggler } from "../components";
import { AuthLayout } from "../components/AuthLayout";
import { AuthProvider } from "../Context/AuthContext";
import HomeLayout from "../layouts/HomeLayout";
import SidebarLayout from "../layouts/SidebarLayout";
import {
  Dashboard,
  Flexibull,
  LoginScreen,
  PhotosScreen,
  RegisterScreen,
  UserProfile,
  UsersScreen,
  VectorScreen,
  VerifyAccount,
} from "../screens";

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index path="/" element={<VectorScreen />} />
            <Route index path="user/profile" element={<UserProfile />} />
            <Route index path="flexibull" element={<Flexibull />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginScreen />} />
            <Route path="register" element={<RegisterScreen />} />
            <Route path="verify_account" element={<VerifyAccount />} />
          </Route>
          <Route path="/admin" element={<SidebarLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="photos" element={<PhotosScreen />} />
            <Route path="users" element={<UsersScreen />} />
          </Route>
        </Routes>
        <ThemeToggler />
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
