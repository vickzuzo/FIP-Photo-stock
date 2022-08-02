import { useState } from "react";
import { validators } from "../../utils";
import { useAuth } from "../../hooks";
import AuthService from "../../network/service/AuthService";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const initialLoginFields = {
    email: "",
    password: "",
  };

  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    setShow(!show);
  };

  const navigate = useNavigate();

  const [fields, setFields] = useState(initialLoginFields);
  const [errors, setFormError] = useState(initialLoginFields);

  const { updateUser } = useAuth();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { email, password } = fields;

  const { isLoading, mutate } = useMutation(
    () => AuthService.loginUser({ email, password }),
    {
      onSuccess: (data) => {
        toast.success(data.message, {
          position: "top-right",
          duration: 5000,
        });

        const { exp } = jwt_decode(data.accessToken);

        updateUser(data.user);
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
          duration: 5000,
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

  const isDisabled =
    !email || !password || Object.values(errors).some(Boolean) || isLoading;

  return {
    show,
    handleShowToggle,
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  };
};
