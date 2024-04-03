import React from "react";

const FormInput = ({name, placeholder, lable, ...rest}) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        name={name}
        className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-2 text-[#000] mt-1 bg-transparent peer"
        placeholder={placeholder}
        {...rest}
      />
       <label htmlFor={name} className="mb-[6px] peer-focus:text-primary">{lable}</label>
    </div>
  );
};

export default FormInput;
