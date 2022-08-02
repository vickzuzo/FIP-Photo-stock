import Cookies from "js-cookie";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetSingleUser } from "../../network/queries/useGetSingleUser";
import AuthService from "../../network/service/AuthService";
import { validators } from "../../utils";

export const useVerifyAccount = () => {
  const initialLoginFields = {
    code: "",
  };

  const navigate = useNavigate();

  const [fields, setFields] = useState(initialLoginFields);
  const [errors, setFormError] = useState(initialLoginFields);
  const { data } = useGetSingleUser({ id: Cookies.get("userID") });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { code } = fields;

  const { isLoading, mutate } = useMutation(
    () => AuthService.verifyAccount({ email: data?.user.email, code }),
    {
      onSuccess: (data) => {
        toast.success(data.message, {
          position: "top-right",
          duration: 5000,
        });

        Cookies.set("userID", data.user._id, { secure: true });
        navigate("/auth/login", { replace: true });
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

  const isDisabled = !code || Object.values(errors).some(Boolean) || isLoading;

  return {
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  };
};
