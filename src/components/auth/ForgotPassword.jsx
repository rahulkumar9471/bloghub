import React from "react";
import FormContainer from "../form/FormContainer";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Button from "../user/Button";
import CustomLink from "../user/CustomLink";

const ForgotPassword = () => {
  return (
    <FormContainer className="h-[60vh]">
      <Title>Forgot Password</Title>
      <form className="w-[18rem]">
        <FormInput
          type="email"
          lable="Email"
          placeholder="Email"
          name="email"
        />
        <div className="mt-4">
          <Button type="submit">Send Link</Button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p>Do you have an account</p>
          <CustomLink to="/auth/sign-in" className="ml-2">
            Sign In
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default ForgotPassword;
