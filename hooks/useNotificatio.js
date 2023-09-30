const { toast } = require("react-toastify");

const useNotification = () => {
  const successMessage = (message) => {
    toast.success(message);
  };
  const errorMessage = (message) => {
    toast.error(message);
  };
};

export default useNotification;
