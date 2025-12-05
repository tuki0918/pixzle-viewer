import type { Meta, StoryObj } from "@storybook/react";
import { PixzleImage } from '@pixzle/react';

const meta: Meta<typeof PixzleImage> = {
  title: "Pixzle/PixzleImage",
  component: PixzleImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    blockSize: { control: "number" },
    seed: { control: "number" },
    imageInfo: { control: "object" },
    image: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PixzleImage>;

export const Image1: Story = {
  args: {
    blockSize: 8,
    seed: 214448,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "/public/img_1_fragmented.png",
  },
};

export const Image1__MismatchSeed: Story = {
  args: {
    ...Image1.args,
    seed: 12345,
  },
  name: "Image 1 - Mismatch Seed",
};

export const Image2: Story = {
  args: {
    blockSize: 8,
    seed: 214448,
    imageInfo: {
      w: 400,
      h: 600,
    },
    image: "/public/img_2_fragmented.png",
  },
};

export const Image2__MismatchSeed: Story = {
  args: {
    ...Image2.args,
    seed: 12345,
  },
  name: "Image 2 - Mismatch Seed",
};

export const Image3: Story = {
  args: {
    blockSize: 8,
    seed: 214448,
    imageInfo: {
      w: 600,
      h: 400,
    },
    image: "/public/img_3_fragmented.png",
  },
};

export const Image3__MismatchSeed: Story = {
  args: {
    ...Image3.args,
    seed: 12345,
  },
  name: "Image 3 - Mismatch Seed",
};

export const Error: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "/public/invalid_image.png",
    fallback: <div>Loading...</div>,
    errorFallback: <div>Failed to restore image.</div>,
  },
  name: "Error - Invalid Image URL",
};