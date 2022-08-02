import React from "react";
import {
  AiOutlinePicture,
  AiOutlineUser,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import AdminDashboardCard from "../../components/AdminCard";
import { useGetDashboardStats } from "./hooks/useGetDashboardStats";
import { StyledDashboardCardsContainer } from "./styles";

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardStats();


  const dashboardStats = [
    {
      title: "Users",
      amount: data?.users,
      icon: <AiOutlineUser className="icon" />,
    },
    {
      title: "Photos",
      amount: data?.photos,
      icon: <AiOutlinePicture className="icon" />,
    },
    {
      title: "Videos",
      amount: 800,
      icon: <AiOutlineVideoCamera className="icon" />,
    },
  ];

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledDashboardCardsContainer>
          {dashboardStats.map((stat, idx) => (
            <AdminDashboardCard key={idx} stat={stat} />
          ))}
        </StyledDashboardCardsContainer>
      )}
    </div>
  );
};

export default Dashboard;
