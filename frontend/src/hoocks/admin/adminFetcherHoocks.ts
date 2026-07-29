import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiError, fetcher } from "../../services/fetcher";

//get the departments for select the department
export const useGetDepartments = () => {
  return useQuery<any, ApiError>({
    queryKey: ["getDepartments"],
    queryFn: () => fetcher("/api/admin/department"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

//post api for creating the doctors
export const useCreateDoctors = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: any) =>
      fetcher("/api/admin/doctors/add", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["creatingDoctor"],
      });
    },

    onError: (error: Error) => {
      console.log(error)
    },
  });
};