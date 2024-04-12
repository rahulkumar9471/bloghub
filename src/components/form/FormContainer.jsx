import React from "react"; 

const FormContainer = ({children, className}) => {
  return (
    <div className="dark:bg-primary">
      <div className={"flex justify-center mx-auto items-center " + className}>
        <div className="shadow-xl dark:bg-tertiary border-t-4 dark:border-dark-subtle border-light-subtle p-10 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
