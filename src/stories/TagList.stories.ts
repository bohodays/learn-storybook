import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import TagList from "../components/TagList";

// Docs 정보
const meta = {
  title: "Buttons/TagList", // 경로를 나타냄
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: "object",
      desciption: "태그 리스트",
      defaultValue: ["tag1", "tag2", "tag3"],
    },
    onTagClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
    onTagClick: () => {},
  },
};
