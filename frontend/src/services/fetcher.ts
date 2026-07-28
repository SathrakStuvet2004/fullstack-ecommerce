
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