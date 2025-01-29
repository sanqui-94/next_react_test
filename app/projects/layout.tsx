import NavigationBar from "@/components/common/NavigationBar";
import React from "react";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <title>Projects</title>
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
}
