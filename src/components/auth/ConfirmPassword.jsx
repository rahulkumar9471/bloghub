import React, { useEffect, useState } from "react";
import FormContainer from "../form/FormContainer";
import { useNavigate } from "react-router-dom";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Button from "../utils/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
import { resetPassword, verifyPasswordResetToken } from "../../api/auth";
import toast from "react-hot-toast";

const ConfirmPassword = () => {
  const [password, setPassword] = useState({
    one: "",
    two: "",
  });

  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");

  useEffect(() => {
    isValidToken();
  }, [token, id]);

  const isValidToken = async () => {
    try {
      const { error, valid } = await verifyPasswordResetToken(token, id);
      setIsVerifying(false);
      if (error) {
        navigate("/auth/reset-password", { replace: true });
        return toast.error(error);
      }

      if (!valid) {
        setIsValid(false);
        return navigate("/auth/reset-password", { replace: true });
      }

      setIsValid(true);
    } catch (error) {
      toast.error(
        "An error occurred while verify Password Reset Token.",
        error
      );
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { one: passwordOne, two: passwordTwo } = password;

    const trimmedPasswordOne = passwordOne.trim();
    const trimmedPasswordTwo = passwordTwo.trim();

    if (!trimmedPasswordOne || !trimmedPasswordTwo) {
      return toast.error("Password is Missing!");
    }

    if (trimmedPasswordOne.length < 8) {
      return toast.error("Password must be at least 8 characters long!");
    }

    if (trimmedPasswordOne !== trimmedPasswordTwo) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await resetPassword({
        newPassword: trimmedPasswordOne,
        userId: id,
        token,
      });

      if (response.error) {
        return toast.error(response.error);
      }

      if (response.message) {
        toast.success(response.message);
      }

      navigate("/auth/sign-in", { replace: true });
    } catch (error) {
      console.error("An error occurred while resetting the password:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  if (isVerifying) return <Spinner />;

  if (!isValid) {
    return (
      <FormContainer className="h-[60vh]">
        <Title>Sorry the Token is Invalid!</Title>
      </FormContainer>
    );
  }

  return (
    <FormContainer className="h-[80vh]">
      <Title>Confirm Password</Title>
      <form onSubmit={handleSubmit} className="w-[18rem]">
        <div className="relative">
          <FormInput
            type={showPassword ? "text" : "password"}
            lable="New Password"
            placeholder="New Password"
            name="one"
            value={password.one}
            onChange={handleChange}
          />
          <span
            className="absolute right-3 top-[44px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye
                fontSize={24}
                className="dark:text-dark-subtle text-light-subtle"
              />
            ) : (
              <FaEyeSlash
                fontSize={24}
                className="dark:text-dark-subtle text-light-subtle"
              />
            )}
          </span>
        </div>
        <div className="relative">
          <FormInput
            type={showPassword ? "text" : "password"}
            lable="Confirm Password"
            placeholder="Confirm Password"
            name="two"
            value={password.two}
            onChange={handleChange}
          />
          <span
            className="absolute right-3 top-[44px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye
                fontSize={24}
                className="dark:text-dark-subtle text-light-subtle"
              />
            ) : (
              <FaEyeSlash
                fontSize={24}
                className="dark:text-dark-subtle text-light-subtle"
              />
            )}
          </span>
        </div>
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ConfirmPassword;
