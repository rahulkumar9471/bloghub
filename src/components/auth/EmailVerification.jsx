import React, { useEffect, useRef, useState } from "react";
import FormContainer from "../form/FormContainer";
import Button from "../user/Button";
import { useLocation, useNavigate } from "react-router-dom";

const OTP_LENGTH = 6;

const isValidOTP = (otp) => {
  let valid = false;
  for (let val of otp) {
    valid = !isNaN(parseInt(val))
    if(!valid) break;
  }
  return valid;
}

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState(0);
  const inputRef = useRef();

  const { state } = useLocation();

  const user = state?.id;

  const navigate = useNavigate();

  const focusNextInputField = (index) => {
    setactiveOtpIndex(index + 1);
  }

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

    if(!value) focusPreInputField(index);
    else focusNextInputField(index);
    setOtp([...newOtp]);
  };

  const handleKeyDown = (key, index) => {
    if(key === 'Backspace') {
        focusPreInputField(index);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  },[activeOtpIndex])

  // useEffect(() => {
  //   if(!user) navigate("/not-found");
  // }, [user]);

  return (
    <FormContainer>
      <h2 className="text-center mb-1 text-xl text-[#418160] font-semibold">
        Please Enter the OTP to verify your accout
      </h2>
      <p className="text-center mb-4 text-[#418160]">OTP has been sent to your email</p>
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
              className="w-12 h-12 text-[#418160] border-2 border-[#418160] focus:border-[#418160] rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none"
            />
          );
        })}
      </div>
      <Button type="submit">Verify Account</Button>
    </FormContainer>
  );
};

export default EmailVerification;
