import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { AdminPageHeader, PhotoTable } from "../../components";
import { TableWrapper } from "../../components/Table/styles";
import { useGetAllPhotos } from "./hooks/useGetAllPhotos";

const PhotosScreen = () => {
  const COLUMNS = React.useMemo(
    () => ["S/N", "Photo", "Title", "Username", "Email address"],
    []
  );

  const { data, isLoading } = useGetAllPhotos();
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#dbdbdb",
  };

  const photos = data?.photos;

  return (
    <div>
      <AdminPageHeader title="Photos" />
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
          <PhotoTable columns={COLUMNS} data={photos} />
        </TableWrapper>
      )}
    </div>
  );
};

export default PhotosScreen;
