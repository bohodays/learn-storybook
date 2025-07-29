import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import Label from "../components/Label";

// Docs 정보
const meta = {
  title: "Text/Label", // 경로를 나타냄
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", desciption: "label의 for 속성" },
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "이메일",
  },
};
