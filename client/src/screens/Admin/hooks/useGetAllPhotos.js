import { useQuery } from "react-query";
import AdminService from "../../../network/service/AdminService";

export const useGetAllPhotos = () => {
  const { data, isLoading } = useQuery(["admin_all_photos"], () =>
    AdminService.getAllPhotos()
  );

  return { data, isLoading };
};
