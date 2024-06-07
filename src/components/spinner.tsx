import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface SpinnerIconProps {
  size?: number;
  className?: string;
}

export const Spinner: React.FC<SpinnerIconProps> = ({
  size = 9,
  className,
}) => {
  return (
    <Icons.spinner
      className={cn(`animate-spin h-${size} w-${size}`, className)}
    />
  );
};
