const API_URL = "http://localhost:3000";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);

    this.status = status;
    this.name = "ApiError";
  }
}

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

  const data =
    (await response.json().catch(() => ({
      message: "Request Failed",
    }))) ?? {
      message: "Request Failed",
    };

  if (!response.ok) {
    throw new ApiError(response.status, data.message);
  }

  return data;
};