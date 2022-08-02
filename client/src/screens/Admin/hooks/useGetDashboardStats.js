import { useQuery } from "react-query";
import AdminService from "../../../network/service/AdminService";

export const useGetDashboardStats = () => {
  const { data, isLoading } = useQuery(["dashboard_stats"], () =>
    AdminService.getDashboardStats()
  );

  return { data, isLoading };
};
