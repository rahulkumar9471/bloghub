import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import FromInput from "../form/FormInput";
import FormContainer from "../form/FormContainer";
import CustomLink from "../utils/CustomLink";
import Button from "../utils/Button";
import Title from "../form/Title";
import toast from "react-hot-toast";
import { signInUser } from "../../api/auth"; 
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

const validateUserInfo = ({ email, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.trim()) return { ok: false, error: "Email is Missing." };
  if (!isValidEmail.test(email))
    return { ok: false, error: "Invalid email" };

  if (!password.trim()) return { ok: false, error: "Invalid password." };
  if (password.length < 8)
    return { ok: false, error: "Password must be at least 8 characters!" };

  return { ok: true };
};

const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [ userInfo, setUserInfo ] = useState({
    email: "",
    password: ""
  }); 

  const navigate = useNavigate();

  const { handleLogin, authInfo } = useAuth();
  const { isPending, isLoggedIn } = authInfo;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, error } = validateUserInfo(userInfo);
    if (!ok) return toast.error(error);

    handleLogin(userInfo.email, userInfo.password)

    var response = await signInUser(userInfo);

    if(response.error) return toast.error(response.error);

    if(response.message) return toast.success(response.message);

  }

  useEffect(() => {
    if(isLoggedIn) navigate('/');
  },[isLoggedIn])

  return (
    <FormContainer className="h-[80vh]">
      <Title>Sign In</Title>
      <form onSubmit={handleSubmit} className="w-[18rem]">
        <FromInput
          type="email"
          lable="Email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={userInfo.email}
        />
        <div className="relative">
          <FromInput
            lable="Password"
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            value={userInfo.password}
          />
          <span
            className="absolute right-3 top-[44px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye fontSize={24} className="dark:text-dark-subtle text-light-subtle"/>
            ) : (
              <FaEyeSlash fontSize={24}  className="dark:text-dark-subtle text-light-subtle"/>
            )}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded-[10px] bg-transparent"
              id="invalidCheck"
            />
            <label htmlFor="invalidCheck" className="dark:text-dark-subtle text-light-subtle">Remember Me</label>
          </div>
          <CustomLink to="/auth/forgot-password">Forgot Password ?</CustomLink>
        </div>
        <div className="mt-4">
          <Button type="submit" busy={isPending}>Sign In</Button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="dark:text-dark-subtle text-light-subtle">Don't have an account ?</p>
          <CustomLink to="/auth/sign-up" className="ml-2">
            Sign Up
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signin;
