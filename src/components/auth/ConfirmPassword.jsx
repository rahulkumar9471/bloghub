import React, { useEffect, useState } from "react";
import FormContainer from "../form/FormContainer";
import { useNavigate } from "react-router-dom";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Button from "../utils/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
import { verifyPasswordResetToken } from "../../api/auth";
import toast from "react-hot-toast";

const ConfirmPassword = () => {
  

  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");

  

  useEffect(() => {
    isValidToken();
  }, [token, id]);

  const isValidToken = async () => {
    const { error, valid } = await verifyPasswordResetToken(token, id);
    console.log(error, valid);
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
    <FormContainer className="h-[60vh]">
      <Title>Confirm Password</Title>
      <form className="w-[18rem]">
        <div className="relative">
          <FormInput
            type={showPassword ? "text" : "password"}
            lable="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
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
