import { useQuery } from "react-query";
import AdminService from "../../../network/service/AdminService";

export const useGetAllUsers = () => {
  const { data, isLoading } = useQuery(["admin_all_users"], () =>
    AdminService.getAllUsers()
  );

  return { data, isLoading };
};
