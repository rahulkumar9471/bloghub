import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import FromInput from "../form/FormInput";
import FormContainer from "../form/FormContainer";
import CustomLink from "../user/CustomLink";
import Button from "../user/Button";
import Title from "../form/Title";
import toast from "react-hot-toast";
import { createUser } from "../../api/auth";
import { useAuth } from "../../hooks";

const validateUserInfo = ({ name, email, mobile, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidName = /^[a-z A-Z]+$/;
  const isValidMobile = /^\d{10}$/;

  if (!name.trim()) return { ok: false, error: "Name is Missing" };
  if (!isValidName.test(name)) return { ok: false, error: "Invalid Name !" };

  if (!email.trim()) return { ok: false, error: "Email is Missing" };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid Email" };

  if (!mobile.trim()) return { ok: false, error: "Mobile No. is Missing" };
  if (!isValidMobile.test(mobile.trim()))
    return {
      ok: false,
      error: "Invalid mobile number! Please enter a 10-digit number.",
    };

  if(!password.trim()) return { ok: false, error: "Invalid password"};
  if(password.length < 8 ) return { ok: false, error: "Password must be at least 8 characters!"}

  return { ok: true };
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;

  const { name, email, mobile, password } = userinfo;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserinfo({ ...userinfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, error } = validateUserInfo(userinfo);

    if (!ok) return toast.error(error);

    var response = await createUser(userinfo);

    if(response.error) return toast.error(response.error);

    navigate('/auth/verification', {
      state: response.user,
      replace: true
    })

  };

  useEffect(() => {
    if(isLoggedIn) navigate('/');
  },[isLoggedIn])

  return (
    <FormContainer className="h-screen">
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit} className="w-[18rem]">
        <FromInput
          lable="Name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <FromInput
          type="email"
          lable="Email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FromInput
          type="number"
          lable="Mobile No."
          placeholder="Mobile No."
          name="mobile"
          value={mobile}
          onChange={handleChange}
        />
        <div className="relative">
          <FromInput
            lable="Password"
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
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
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p>Do you have an account ?</p>
          <CustomLink to="/auth/sign-in" className="ml-2">
            Sign In
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signup;
