import React from "react";

interface ILabelProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: ILabelProps) => {
  return (
    <label className="text-sm text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
