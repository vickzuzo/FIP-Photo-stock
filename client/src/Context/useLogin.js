import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import AuthService from "../network/service/AuthService";
import { toast } from "react-toastify";
import { validators } from "../utils/validator";

export const useLogin = () => {
  const initialLoginFields = {
    email: "",
    password: "",
  };

  // const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleShowPasswordTogggle = () => setShow(!show);

  const [fields, setFields] = useState(initialLoginFields);
  const [errors, setFormError] = useState(initialLoginFields);

  const handleValueChange = (e) => {
    const { value, name } = e.target;
    const error = validators[name](value);
    setFields({ ...fields, [name]: value });
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { email, password } = fields;

  const { isLoading, mutate } = useMutation(
    () => AuthService.loginUser({ email, password }),
    {
      onSuccess: (data) => {
        toast({
          status: "success",
          title: `${data.message}`,
          position: "top-right",
          duration: 5000,
        });

        const { exp } = jwt_decode(data.accessToken);

        const expires = (exp - new Date().getTime / 1000) / 86400;
        Cookies.set("access_token", data.accessToken, {
          expires,
          secure: true,
        });
        Cookies.set("userID", data.user._id, { expires, secure: true });
        if (data.user.type === "admin") {
          navigate("/admin/dashboard", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      },
      onError: (err) => {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        if (err.response.data === "Please verify your email address.") {
          navigate("/auth/verify-account", { replace: true });
        }
      },
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  const isDisabled = !email || !password || Object.values(errors).some(Boolean);

  return {
    isLoading,
    mutate,
    isDisabled,
    handleValueChange,
    onSubmit,
    fields,
    errors,
    show,
    handleShowPasswordTogggle,
  };
};
