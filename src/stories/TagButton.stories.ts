import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import TagButton from "../components/TagButton";

// Docs 정보
const meta = {
  title: "Buttons/TagButton", // 경로를 나타냄
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      desciption: "버튼의 text",
      defaultValue: "Button",
    },
    isChecked: {
      control: "boolean",
      description: "버튼 활성화 여부",
      defaultValue: false,
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: false,
    children: "Button",
    onClick: () => {},
  },
};
