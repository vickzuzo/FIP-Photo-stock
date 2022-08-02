import React from "react";
import { AdminPageHeader, Table } from "../../components";
import { TableWrapper } from "../../components/Table/styles";
import { useGetAllUsers } from "./hooks/useGetAllUsers";
import MoonLoader from "react-spinners/MoonLoader";

const UsersScreen = () => {
  const COLUMNS = React.useMemo(() => ["S/N", "Username", "Email address", "Joined"], []);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#dbdbdb",
  };
  const { data, isLoading } = useGetAllUsers();
  const users = data?.users;
  return (
    <div>
      <AdminPageHeader title="Users" />
      {isLoading ? (
        <div
          style={{
            marginTop: "4rem",
            alignItems: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MoonLoader
            color="#FB8500"
            loading={isLoading}
            cssOverride={override}
            size={30}
          />
        </div>
      ) : (
        <TableWrapper>
          <Table columns={COLUMNS} data={users} />
        </TableWrapper>
      )}
    </div>
  );
};

export default UsersScreen;
