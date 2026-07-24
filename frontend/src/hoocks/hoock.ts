import { useQuery, useMutation, useQueryClient, } from "@tanstack/react-query";
import { notify } from "../utils/toster";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../slice/AuthSlice";



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

        if (error.message === "Too small: expected string to have >=8 characters") {
          return notify.error("password must have 8 characters")
        }
        if (error.message === "Too small: expected string to have >=3 characters") {
          return notify.error("Name have atleast 3 characters")
        }
        notify.error(error.message)
      }, 2000)

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
      notify.success(data.message)
      queryClient.invalidateQueries({
        queryKey: ["verifyusers"],
      });
    },

    onError: (error: Error) => {

      notify.error(error.message);
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return useMutation({
    mutationFn: (loginData: any) =>
      fetcher("/api/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      }),

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["login"],
      });
      console.log(data.data)
      dispatch(setUser(data.data))

      setTimeout(() => {
        if (data.data.role === "Admin") {
          navigate("/admin")
        }
      }, 2000)
    },

    onError: (error: Error) => {
      notify.error(error.message);
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