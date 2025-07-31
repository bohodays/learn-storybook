import React from "react";

interface ITagButtonProps {
  isChecked: boolean;
  children: string;
  onClick: () => void;
}

const TagButton = ({ isChecked, children, onClick }: ITagButtonProps) => {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "bg-dark-opacity text-white";

  return (
    <button
      className={`h-[33px] rounded-tag-button px-[10px] border border-white text-sm font-medium ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TagButton;
