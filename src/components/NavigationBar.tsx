import React from "react";
import IconButton from "./IconButton";

interface INavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar = ({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) => {
  return (
    <div className="w-full flex justify-between">
      <div className="navigation-title-wrapper flex">
        {/* 뒤로가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${
              isDark ? "-white" : ""
            }.svg`}
            onClick={onBackButtonClick}
          />
        )}
        {/* 페이지 이름 */}
        {showTitle && (
          <h1 className={`text-2xl ${isDark ? "text-white" : "text-primary"}`}>
            {title}
          </h1>
        )}
      </div>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="close"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${
            isDark ? "-white" : ""
          }.svg`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
};

export default NavigationBar;
