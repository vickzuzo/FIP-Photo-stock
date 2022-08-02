import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { StyledDashboardCard } from "./styles";

const AdminDashboardCard = ({ stat }) => {
  return (
    <StyledDashboardCard>
      <div>{stat.icon}</div>
      <div>
        <p className="title">{stat.title}</p>
        <h1 className="amount">{stat.amount}</h1>
      </div>
    </StyledDashboardCard>
  );
};

export default AdminDashboardCard;
