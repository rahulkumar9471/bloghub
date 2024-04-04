import React from "react"; 

const FormContainer = ({children}) => {
  return (
    <div className="mt-10">
      <div className="flex justify-center mx-auto">
        <div className="shadow-xl border-t-4 dark:bg-primary bg-white border-[#418160] p-10 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
