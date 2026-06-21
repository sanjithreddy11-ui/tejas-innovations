"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const TOP_OFFSET = 96; // px gap kept from top of viewport while pinned
const BOTTOM_GAP = 32; // px gap kept above the end of the content column
const BREAKPOINT = 1024; // matches Tailwind's `lg`

export default function StickyLayout({
  sidebar,
  children,
}: {
  sidebar: ReactNode;
  children: ReactNode;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({ position: "static" });

  useEffect(() => {
    const update = () => {
      const grid = gridRef.current;
      const column = columnRef.current;
      const inner = innerRef.current;
      if (!grid || !column || !inner) return;

      if (window.innerWidth < BREAKPOINT) {
        setStyle({ position: "static" });
        return;
      }

      const gridRect = grid.getBoundingClientRect();
      const columnRect = column.getBoundingClientRect();
      const innerHeight = inner.offsetHeight;

      // Not yet scrolled to the pin point — let it sit in normal flow.
      if (columnRect.top > TOP_OFFSET) {
        setStyle({ position: "static" });
        return;
      }

      // Near the bottom of the content column — park it there instead of
      // overlapping the footer/CTA.
      if (TOP_OFFSET + innerHeight + BOTTOM_GAP >= gridRect.bottom) {
        const top = gridRect.bottom - columnRect.top - innerHeight - BOTTOM_GAP;
        setStyle({
          position: "absolute",
          top: `${Math.max(top, 0)}px`,
          left: 0,
          width: "100%",
          maxHeight: `${window.innerHeight - TOP_OFFSET - BOTTOM_GAP}px`,
          overflowY: "auto",
        });
        return;
      }

      // Pinned state.
      const maxHeight = window.innerHeight - TOP_OFFSET - BOTTOM_GAP;
      setStyle({
        position: "fixed",
        top: `${TOP_OFFSET}px`,
        left: `${columnRect.left}px`,
        width: `${columnRect.width}px`,
        maxHeight: `${maxHeight}px`,
        overflowY: "auto",
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[260px_1fr]"
    >
      <div ref={columnRef} className="relative order-2 lg:order-1">
        <div ref={innerRef} style={style}>
          {sidebar}
        </div>
      </div>

      <div className="order-1 max-w-3xl lg:order-2">{children}</div>
    </div>
  );
}