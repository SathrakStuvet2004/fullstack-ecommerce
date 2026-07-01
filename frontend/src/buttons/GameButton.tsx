import "./GameButton.css";

interface GameButtonProps {
  children: React.ReactNode;
  variant?: "positive" | "negative";
}

export default function GameButton({
  children,
  variant = "positive",
}: GameButtonProps) {
  return (
    <button className={`game-button ${variant}`}>
      {children}
    </button>
  );
}