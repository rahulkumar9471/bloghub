import React, { useState } from "react";
import FormContainer from "../form/FormContainer";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Button from "../utils/Button";
import CustomLink from "../utils/CustomLink";
import toast from "react-hot-toast";
import { forgotPassord } from "../../api/auth";

const validateEmail = ({ email }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.trim()) return { ok: false, error: "Email is Missing." };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email" };

  return { ok: true };
};

const ForgotPassword = () => {
  const [email, setEmail] = useState({
    email: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, error } = validateEmail(email);
    if (!ok) return toast.error(error);

    var response = await forgotPassord(email);

    if (response.error) return toast.error(response.error);

    if (response.message) return toast.success(response.message);
  };

  return (
    <FormContainer className="h-[60vh]">
      <Title>Forgot Password</Title>
      <form onSubmit={handleSubmit} className="w-[18rem]">
        <FormInput
          type="email"
          lable="Email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email.email}
        />
        <div className="mt-4">
          <Button type="submit">Send Link</Button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="dark:text-dark-subtle text-light-subtle">
            Do you have an account ?
          </p>
          <CustomLink to="/auth/sign-in" className="ml-2">
            Sign In
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default ForgotPassword;
