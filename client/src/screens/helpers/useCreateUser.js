import Cookies from "js-cookie";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "../../network/service/AuthService";
import { validators } from "../../utils";

export const useCreateUser = () => {
  const initialLoginFields = {
    email: "",
    password: "",
    username: "",
  };

  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    setShow(!show);
  };
  const [fields, setFields] = useState(initialLoginFields);
  const [errors, setFormError] = useState(initialLoginFields);

  const navigate = useNavigate();

  const { email, password, username } = fields;

  const { isLoading, mutate } = useMutation(
    () => AuthService.registerUser({ email, password, username }),
    {
      onSuccess: (data) => {
        toast.success(data.message, {
          position: "top-right",
          duration: 5000,
        });
        Cookies.set("userID", data.user._id, { secure: true });
        navigate("/auth/verify_account", { replace: true });
      },
      onError: (err) => {
        toast.error(err.response.data, {
          position: "top-right",
          duration: 5000,
        });
      },
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };
  const isDisabled =
    !email || !password || Object.values(errors).some(Boolean) || isLoading;

  return {
    show,
    handleShowToggle,
    onSubmit,
    handleFieldChange,
    isLoading,
    errors,
    fields,
    isDisabled,
  };
};
