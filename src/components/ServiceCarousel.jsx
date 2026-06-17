"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const CARD_WIDTH = typeof window !== "undefined" && window.innerWidth < 640
  ? 280
  : 360;
  const AUTOPLAY_INTERVAL = 5000;

export default function ServiceCarousel({
  services,
  onConfigureClick,
}) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const n = services.length;

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % n);
  }, [n]);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + n) % n);
  }, [n]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(
      goNext,
      AUTOPLAY_INTERVAL
    );

    return () => clearInterval(interval);
  }, [goNext, isHovered]);

  const getDiff = (index) => {
    let diff = index - active;

    if (diff > n / 2) diff -= n;
    if (diff < -n / 2) diff += n;

    return diff;
  };

  const handleDragEnd = (_, info) => {
    const threshold = 100;

    if (info.offset.x < -threshold) {
      goNext();
    } else if (info.offset.x > threshold) {
      goPrev();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     <div className="relative h-[500px] flex items-center justify-center overflow-x-hidden overflow-y-visible">
        {services.map((service, index) => {
          const diff = getDiff(index);
          const Icon = service.icon;

          const isCenter = diff === 0;
          const isVisible = Math.abs(diff) <= 1;

          const x = diff * CARD_WIDTH;
          const scale = isCenter ? 1 : 0.88;
          const opacity = isCenter ? 1 : 0.55;

          return (
            <motion.div
              key={service.title}
              drag={isCenter ? "x" : false}
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.12}
              onDragEnd={
                isCenter
                  ? handleDragEnd
                  : undefined
              }
              animate={{
                x,
                scale,
                opacity,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                zIndex: isCenter ? 20 : 10,
                pointerEvents: isVisible
                  ? "auto"
                  : "none",
              }}
              onClick={() =>
                !isCenter &&
                isVisible &&
                setActive(index)
              }
              className={`
                absolute
                w-[320px]
                sm:w-[360px]
                h-[420px]
                rounded-3xl
                border
                backdrop-blur-xl
                bg-[#0B0F14]
                p-8
                flex
                flex-col
                ${
                  isCenter
                    ? "border-white/15 shadow-[0_0_60px_rgba(255,255,255,0.05)]"
                    : "border-white/8"
                }
              `}
            >
              <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-white text-3xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed flex-1">
                {service.description}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onConfigureClick?.();
                }}
                className="mt-8 bg-white text-black px-6 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
              >
                Configure Project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-white"
                    : "w-2 bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}