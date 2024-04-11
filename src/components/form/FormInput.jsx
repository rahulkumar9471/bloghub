import React from "react";

const FormInput = ({name, placeholder, lable, className, ...rest}) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        name={name}
        className={`w-full sm:w-full rounded-[4px] border-2 dark:border-dark-subtle border-light-subtle p-[10px] px-[10px] mb-2 dark:text-dark-subtle text-light-subtle mt-1 bg-transparent peer ` + className}
        placeholder={placeholder}
        {...rest}
      />
       <label htmlFor={name} className="mb-[6px] peer-focus:dark:text-dark-subtle peer-focus:text-light-subtle dark:text-dark-subtle text-light-subtle">{lable}</label>
    </div>
  );
};

export default FormInput;
