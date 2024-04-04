import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import FromInput from "../form/FormInput";
import FormContainer from "../form/FormContainer"; 
import CustomLink from "../user/CustomLink";
import Button from "../user/Button";
import Title from "../form/Title";


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContainer>
      <Title>Sign Up</Title>
      <form className="w-[18rem]">
        <FromInput lable="Name" placeholder="Name" name="name" />
        <FromInput lable="Email" placeholder="Email" name="email" />
        <FromInput lable="Mobile No." placeholder="Mobile No." name="mobile" />
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
        <div className="mt-4">
          <Button type="submit">Sign in</Button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p>Do you have an account ?</p>
          <CustomLink to="/sign-in" className="ml-2">
            Sign In
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signup;
