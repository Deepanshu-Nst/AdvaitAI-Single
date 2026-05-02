import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Real-world applied intelligence systems from AdvaitAI — designed to demonstrate structured reasoning, decision intelligence, and autonomous execution.",
  openGraph: {
    title: "Products | AdvaitAI",
    description:
      "Real-world applied intelligence systems from AdvaitAI — designed to demonstrate structured reasoning, decision intelligence, and autonomous execution.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
