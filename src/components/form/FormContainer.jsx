import React from "react"; 

const FormContainer = ({children, className}) => {
  return (
    <div className="">
      <div className={"flex justify-center mx-auto items-center " + className}>
        <div className="shadow-xl border-t-4 bg-white border-[#418160] p-10 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
