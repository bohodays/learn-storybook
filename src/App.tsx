import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요"
        value=""
        errorMessage="이메일을 확인해주세요"
        isError={isError}
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <div className="my-20"></div>
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        placeholder="주소를 입력하세요"
        value=""
        errorMessage="주소를 확인해주세요"
        isError={isError}
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <div className="my-20"></div>
      <button onClick={() => setIsError((prev) => !prev)}>
        에러 이벤트 핸들러
      </button>
    </>
  );
}

export default App;
