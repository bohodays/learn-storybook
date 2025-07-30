import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import ErrorMessage from "../components/ErrorMessage";

// Docs 정보
const meta = {
  title: "Text/ErrorMessage", // 경로를 나타냄
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "ErrorMessage의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "에러 메세지는 여기로",
  },
};
