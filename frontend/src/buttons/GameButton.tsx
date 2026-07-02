import "./GameButton.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GameButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "positive" | "negative";
}

export default function GameButton({
  children,
  variant = "positive",
  className = "",
  ...props
}: GameButtonProps) {
  return (
    <button
      className={`game-button ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}