import toast from "react-hot-toast";

export const showNotification = (isSuccess, message) => {
  if (isSuccess) return toast.success(message);

  return toast.error(message);
};
