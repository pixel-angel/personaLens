import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-[#111113] p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
