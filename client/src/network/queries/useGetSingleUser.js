import { useQuery } from "react-query";
import GeneralService from "../service/GeneralService";

export const useGetSingleUser = (input) => {
  const { data, isLoading } = useQuery(
    ["get_single_user", { id: input.id }],
    () => GeneralService.getSingleUser(input)
  );
  return { data, isLoading };
};

// export const useGetCurrentUser = () => {
//   const { data, isLoading } = useQuery(["get_current_user"], () =>
//     UserService.getCurrentUser()
//   );
//   return { data, isLoading };
// };
