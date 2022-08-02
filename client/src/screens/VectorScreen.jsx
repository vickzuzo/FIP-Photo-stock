import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { Hero, PhotoItem, Tabs } from "../components";
import { StyledPhotos } from "../components/Photo/styles";
import GeneralService from "../network/service/GeneralService";

const VectorScreen = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#dbdbdb",
  };

  const [searchParams] = useSearchParams();

  const tab = searchParams.get("tab");
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["all_photos", tab], () =>
    GeneralService.getAllPhotos(tab)
  );

  const handleTabChange = (tab) => {
    navigate(`/?tab=${tab}`);
  };

  useEffect(() => {
    navigate(`?tab=free`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <Tabs
        handleTabChange={handleTabChange}
        currentTab={tab}
        tabs={["free", "premium"]}
      />
      {isLoading ? (
        <div style={{ marginTop: "4rem" }}>
          <MoonLoader
            color="#FB8500"
            loading={isLoading}
            cssOverride={override}
            size={30}
          />
        </div>
      ) : (
        <StyledPhotos>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data.photos.length === 0 ? (
              <div
                style={{
                  marginTop: "4rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    color: "#FB8500",
                    fontSize: "1.6rem",
                  }}
                >
                  NO PHOTO FOUND
                </p>
              </div>
            ) : (
              data.photos.map((item) => <PhotoItem photo={item} />)
            )}
          </Masonry>
        </StyledPhotos>
      )}
    </>
  );
};

export default VectorScreen;
