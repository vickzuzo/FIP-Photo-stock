import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { AdminPageHeader, PhotoTable } from "../components";
import { TableWrapper } from "../components/Table/styles";
import { useGetUserPhotos } from "./helpers/useGetUserPhotos";

const UserProfile = () => {
  const COLUMNS = React.useMemo(() => ["S/N", "Photo", "Title"], []);

  const { data, isLoading } = useGetUserPhotos();
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#dbdbdb",
  };

  const photos = data?.photos;

  return (
    <div style={{ marginTop: "6rem" }}>
      <AdminPageHeader title="Profile" />
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
          <PhotoTable columns={COLUMNS} data={photos} isUser />
        </TableWrapper>
      )}
    </div>
  );
};

export default UserProfile;
