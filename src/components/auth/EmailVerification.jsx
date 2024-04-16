import React, { useEffect, useRef, useState } from "react";
import FormContainer from "../form/FormContainer";
import Button from "../utils/Button";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { resendOtp, verifyUserEmail } from "../../api/auth";
import { useAuth } from "../../hooks";

const OTP_LENGTH = 6;

const isValidOTP = (otp) => {
  let valid = false;
  for (let val of otp) {
    valid = !isNaN(parseInt(val));
    if (!valid) break;
  }
  return valid;
};

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState(0);
  const { isAuth, authInfo } = useAuth();
  const { isLoggedIn, profile } = authInfo;
  const isVerified = profile?.isVerified;

  const inputRef = useRef();

  const { state } = useLocation();

  const user = state?.id;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidOTP(otp)) {
      return toast.error("Invalid OTP !");
    }

    const {
      error,
      message,
      user: userResponse,
    } = await verifyUserEmail({
      otp: otp.join(""),
      userId: user,
    });

    if (error) return toast.error(error);

    toast.success(message);

    localStorage.setItem("auth-token", userResponse.token);
    isAuth();
  };

  const handleClick = async (e) => {
    const { error, message } = await resendOtp({ userId: user });

    if (error) return toast.error(error);

    toast.success(message);
  };

  useEffect(() => {
    if (!user) navigate("/not-found"); 
    if (isLoggedIn && isVerified) navigate("/");
  }, [user, isLoggedIn, isVerified]);

  const focusNextInputField = (index) => {
    setactiveOtpIndex(index + 1);
  };

  const focusPreInputField = (index) => {
    let nextIndex;
    const deff = index - 1;
    nextIndex = deff !== 0 ? deff : 0;
    setactiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);

    if (!value) focusPreInputField(index);
    else focusNextInputField(index);
    setOtp([...newOtp]);
  };

  const handleKeyDown = (key, index) => {
    if (key === "Backspace") {
      focusPreInputField(index);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <FormContainer className="h-[60vh]">
      <h2 className="text-center mb-1 text-xl dark:text-dark-subtle text-light-subtle font-semibold">
        Please Enter the OTP to verify your accout
      </h2>
      <p className="text-center mb-4 dark:text-dark-subtle text-light-subtle">
        OTP has been sent to your email
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center space-x-4 mb-6">
          {otp.map((_, index) => {
            return (
              <input
                ref={activeOtpIndex === index ? inputRef : null}
                type="number"
                value={otp[index] || ""}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                key={index}
                className="w-12 h-12 dark:text-dark-subtle text-light-subtle dark:border-dark-subtle border-light-subtle border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none"
              />
            );
          })}
        </div>
        <Button type="submit">Verify Account</Button>
        <div className="mt-4 text-center">
          <p
            onClick={handleClick}
            className="dark:text-dark-subtle text-light-subtle font-semibold cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            Resend OTP
          </p>
        </div>
      </form>
    </FormContainer>
  );
};

export default EmailVerification;
