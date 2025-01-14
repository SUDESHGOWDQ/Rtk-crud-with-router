import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message, type = "success") => {
  toast(message, {
    type,
    position: "bottom-right",
    autoClose: 5000,
  });
};
