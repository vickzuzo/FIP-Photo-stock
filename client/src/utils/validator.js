const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validators = {
  email: (email) => {
    if (email === "") {
      return "Email is required";
    }
    if (!EMAIL_PATTERN.test(email)) {
      return "Email is invalid";
    }
  },
  password: (password) => {
    if (password === "") {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
  },
  username: (username) => {
    if (username === "") {
      return "Username is required";
    }
  },
  code: (code) => {
    if (code === "") {
      return "Code is required";
    }
  },
};
const validateFormSubmit = (formData) => {
  let errors = {};
  let isvalid = true;
  Object.keys(formData).forEach((key) => {
    const error = validators[key](formData[key]);
    errors[key] = error;
    if (error) {
      isvalid = false;
    }
  });
  return { errors, isvalid };
};

export const checkFormData = (formData, setFormError) => {
  const { errors, isvalid } = validateFormSubmit(formData);
  if (setFormError) {
    setFormError(errors);
  }
  return isvalid;
};
