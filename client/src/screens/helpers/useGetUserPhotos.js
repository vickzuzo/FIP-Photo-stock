import { useQuery } from "react-query";
import UserService from "../../network/service/UserService";

export const useGetUserPhotos = () => {
  const { data, isLoading } = useQuery(["user_all_photos"], () =>
    UserService.getAllPhotos()
  );

  return { data, isLoading };
};
