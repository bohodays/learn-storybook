import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import IconButton from "../components/IconButton";

// Docs 정보
const meta = {
  title: "Buttons/IconButton", // 경로를 나타냄
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: { control: "text", desciption: "이미지의 alt 속성", defaultValue: "" },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    // iconPath: deleteIcon,
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    onClick: () => {},
  },
};
