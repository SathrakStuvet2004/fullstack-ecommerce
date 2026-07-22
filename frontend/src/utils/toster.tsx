import toast from "react-hot-toast";

export const notify = {
  success: (message: string) => toast.success(message),

  error: (message: string) => toast.error(message),

  loading: (message: string, id?: string) =>
    toast.loading(message, {
      id,
    }),

  dismiss: (id?: string) => toast.dismiss(id),
};