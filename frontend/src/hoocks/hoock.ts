import { useQuery, useMutation, useQueryClient, } from "@tanstack/react-query";
import { toast } from "react-toastify";


const API_URL = "http://localhost:3000";

export const fetcher = async (
  url: string,
  options: RequestInit = {}
) => {
  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    credentials: "include",
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


export const usePostUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: any) =>
      fetcher("/api/signup", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error: Error) => {
      setTimeout(() => {
        toast.error(error.message)
      }, 3000)

    },
  });
};

export const useVerify = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: any) =>
      fetcher("/api/verify/token", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),

    onSuccess: (data) => {
      toast.success(data.message)
      queryClient.invalidateQueries({
        queryKey: ["verifyusers"],
      });
    },

    onError: (error: Error) => {

      toast.error(error.message);
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (loginData: any) =>
      fetcher("/api/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["login"],
      });
    },

    onError: (error: Error) => {

      setTimeout(() => {
        toast.error(error.message);
      }, 1000)

    },
  });
};

export const useAuthMe = () => {
  return useQuery({
    queryKey: ["authme"],
    queryFn: () => fetcher("/api/auth/me"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false
  });
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetcher("/api/login"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};