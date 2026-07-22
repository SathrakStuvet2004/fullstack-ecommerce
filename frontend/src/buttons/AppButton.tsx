import "./AppButton.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
}

export default function AppButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: AppButtonProps) {
  return (
    <button
      className={`app-button ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}