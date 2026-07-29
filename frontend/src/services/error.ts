import { navigateTo } from "./navigationService";
import { notify } from "../utils/toster";
import type { ApiError } from "./fetcher";

export const handleApiError = (error: ApiError | null) => {
  if (!error) return;

  switch (error.status) {

    case 401:
      notify.error("Please login");
      setTimeout(() => navigateTo("/login"), 2000);
      break;

    case 403:
      notify.error("Access denied");
      setTimeout(() => navigateTo("/login"), 2000);
      break;

    default:
      notify.error(error.message);
  }
};