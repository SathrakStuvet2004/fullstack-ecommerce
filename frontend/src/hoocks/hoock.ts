import {useQuery,useMutation,useQueryClient,} from "@tanstack/react-query";

const API_URL = "http://localhost:3000";

export const fetcher = async (
  url: string,
  options: RequestInit = {}
) => {
  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const error =
      (await response.json().catch(() => null)) || {
        message: "Request Failed",
      };

    throw new Error(error.message);
  }

  return response.json();
};


export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetcher("/users"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: any) =>
      fetcher("/users", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};