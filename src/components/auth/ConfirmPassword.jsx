import React, { useState } from "react";
import FormContainer from "../form/FormContainer";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Button from "../user/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const ConfirmPassword = () => {

  
  const [showPassword, setShowPassword] = useState(false);

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
              <FaEye fontSize={24} fill="#418160" />
            ) : (
              <FaEyeSlash fontSize={24} fill="#418160" />
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
