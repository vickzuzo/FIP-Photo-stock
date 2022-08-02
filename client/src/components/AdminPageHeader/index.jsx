import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledAdminPageHeader } from "./styles";

export const AdminPageHeader = ({ title }) => {
  return (
    <StyledAdminPageHeader>
      <div className="content">
        <p>{title}</p>
        <div className="input_wrapper">
          <Input placeholder="search..." />
          <Button>
            Search <AiOutlineSearch />
          </Button>
        </div>
      </div>
    </StyledAdminPageHeader>
  );
};
