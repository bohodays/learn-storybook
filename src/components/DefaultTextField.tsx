import React, { useState } from "react";
import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";

interface IDefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

const DefaultTextField = ({
  errorMessage,
  iconPath,
  iconAlt,
  onChange,
  placeholder,
  onIconClick,
  value,
  isError,
  id,
}: IDefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
    ? "border-mono300"
    : "border-primary";

  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          className="outline-none"
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;
