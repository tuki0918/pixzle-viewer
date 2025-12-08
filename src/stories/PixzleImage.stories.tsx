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
    manifest: { control: "text" },
    manifestData: { control: "object" },
    imageIndex: { control: "number" },
    fallback: { control: false },
    errorFallback: { control: false },
    protected: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PixzleImage>;

export const Image1: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
  },
};

export const Image1__MismatchSeed: Story = {
  args: {
    blockSize: 8,
    seed: 11111,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
  },
  name: "Image 1 - Mismatch Seed",
};

export const Image2: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 400,
      h: 600,
    },
    image: "img_2_fragmented.png",
  },
};

export const Image2__MismatchSeed: Story = {
  args: {
    blockSize: 8,
    seed: 11111,
    imageInfo: {
      w: 400,
      h: 600,
    },
    image: "img_2_fragmented.png",
  },
  name: "Image 2 - Mismatch Seed",
};

export const Image3: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 600,
      h: 400,
    },
    image: "img_3_fragmented.png",
  },
};

export const Image3__MismatchSeed: Story = {
  args: {
    blockSize: 8,
    seed: 11111,
    imageInfo: {
      w: 600,
      h: 400,
    },
    image: "img_3_fragmented.png",
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
    image: "invalid_image.png",
    fallback: <div>Loading...</div>,
    errorFallback: <div>Failed to restore image.</div>,
  },
  name: "Error - Invalid Image URL",
};

// ============================================================
// Manifest URL Pattern Stories
// ============================================================

export const WithManifestUrl: Story = {
  args: {
    manifest: "manifest.json",
    image: "img_1_fragmented.png",
  },
  name: "With Manifest URL",
};

export const WithManifestUrl__Image2: Story = {
  args: {
    manifest: "manifest.json",
    image: "img_2_fragmented.png",
    imageIndex: 1,
  },
  name: "With Manifest URL - Image 2",
};

export const WithManifestUrl__Image3: Story = {
  args: {
    manifest: "manifest.json",
    image: "img_3_fragmented.png",
    imageIndex: 2,
  },
  name: "With Manifest URL - Image 3",
};

// ============================================================
// Manifest Data Pattern Stories
// ============================================================

export const WithManifestData: Story = {
  args: {
    manifestData: {
      id: "4d2193b6-e51e-49df-a517-c79eb070ab95",
      version: "0.0.26",
      timestamp: "2025-12-05T14:22:44.764Z",
      config: {
        blockSize: 8,
        prefix: "img",
        seed: 12345,
        preserveName: false,
        crossImageShuffle: false,
      },
      images: [
        { w: 500, h: 500 },
        { w: 400, h: 600 },
        { w: 600, h: 400 },
      ],
    },
    image: "img_1_fragmented.png",
  },
  name: "With Manifest Data",
};

// ============================================================
// Protected Property Stories
// ============================================================

export const ProtectedEnabled: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
    protected: true,
  },
  name: "Protected - Enabled (Default)",
};

export const ProtectedDisabled: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
    protected: false,
  },
  name: "Protected - Disabled",
};

// ============================================================
// Fallback Stories
// ============================================================

export const CustomFallback: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
    fallback: (
      <div style={{ width: 500, height: 500, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" }}>
        <span>🔄 Restoring image...</span>
      </div>
    ),
  },
  name: "Custom Fallback",
};

export const ErrorFallbackAsFunction: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "invalid_image.png",
    fallback: <div>Loading...</div>,
    errorFallback: (error: Error) => (
      <div style={{ color: "red", padding: "20px", border: "1px solid red" }}>
        <strong>Error:</strong> {error.message}
      </div>
    ),
  },
  name: "Error Fallback - Function",
};

// ============================================================
// HTML Image Attributes Stories
// ============================================================

export const WithAltText: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
    alt: "Sample image with alt text",
  },
  name: "With Alt Text",
};

export const WithCustomStyle: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
    style: {
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
  },
  name: "With Custom Style",
};

export const WithClassName: Story = {
  args: {
    blockSize: 8,
    seed: 12345,
    imageInfo: {
      w: 500,
      h: 500,
    },
    image: "img_1_fragmented.png",
    className: "custom-pixzle-image",
  },
  name: "With ClassName",
};