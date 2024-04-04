import React, { useState } from "react";  
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import FromInput from "../form/FormInput";
import FormContainer from "../form/FormContainer"; 
import CustomLink from "../user/CustomLink";
import Button from "../user/Button";
import Title from "../form/Title";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContainer>
      <Title>Sign In</Title>
      <form className="w-[18rem]">
        <FromInput lable="Username" placeholder="Username" name="username" />
        <div className="relative">
          <FromInput
            lable="Password"
            placeholder="Password"
            name="password"
            type="password"
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
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded-[10px]"
              id="invalidCheck"
            />
            <label htmlFor="invalidCheck">Remember Me</label>
          </div>
          <CustomLink to="/Forgot-Password">Forgot Password ?</CustomLink>
        </div>
        <div className="mt-4">
          <Button type="submit">
            Sign in
          </Button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p>Don't have an account ?</p>
          <CustomLink to="/sign-up" className="ml-2">
            Sign Up
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signin;
