"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-slate-100 dark:bg-slate-900 overflow-hidden h-64 md:h-80 w-full transition-all duration-300 ease-out border border-slate-200/60 shadow-sm cursor-pointer",
        hovered !== null && hovered !== index && "blur-xs scale-[0.98] opacity-60"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-slate-950/70 flex flex-col justify-end p-6 transition-opacity duration-300 text-left",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="space-y-1.5">
          <span className="text-[9px] font-black tracking-widest text-blue-400 font-mono uppercase block">
            PRINCIPLE 0{index + 1}
          </span>
          <div className="text-base md:text-lg font-black text-white font-outfit tracking-tight leading-snug">
            {card.title}
          </div>
          {card.description && (
            <p className="text-[10px] md:text-xs text-slate-300 font-semibold leading-relaxed">
              {card.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  description?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
