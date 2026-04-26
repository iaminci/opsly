import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const marqueeVariants = cva("marquee overflow-hidden", {
  variants: {
    variant: {
      default: "",
      primary:
        "relative bg-[hsl(var(--orange))] [--marquee-fade:hsl(var(--orange))]",
      mono: "border-b-2 border-[hsl(var(--ink))]/60 bg-[hsl(var(--surface))] py-2 [--marquee-fade:hsl(var(--surface))]",
    },
    orientation: {
      horizontal: "w-full",
      vertical: "marquee-vertical h-full",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      orientation: "horizontal",
      className: "border-y-2 border-[hsl(var(--ink))] py-4",
    },
    {
      variant: "primary",
      orientation: "vertical",
      className: "border-x-2 border-[hsl(var(--ink))]",
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

const marqueeTrackVariants = cva("track flex shrink-0 select-none", {
  variants: {
    variant: {
      default: "",
      primary:
        "font-mono-accent text-base font-bold uppercase tracking-[0.16em] text-[hsl(var(--ink))]",
      mono: "font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--ink))]/70",
    },
    orientation: {
      horizontal: "w-max flex-row items-center",
      vertical: "h-max flex-col items-center justify-start",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

export interface MarqueeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof marqueeVariants> {
  text: string;
  reverse?: boolean;
  trackClassName?: string;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      text,
      reverse,
      trackClassName,
      variant,
      orientation,
      ...props
    },
    ref,
  ) => {
    const isReverse = reverse ?? variant === "mono";
    const isVertical = orientation === "vertical";
    const animationClass = isVertical
      ? isReverse
        ? "animate-marquee-vertical-reverse"
        : "animate-marquee-vertical"
      : isReverse
        ? "animate-marquee-reverse"
        : "animate-marquee";

    return (
      <div
        ref={ref}
        className={cn(marqueeVariants({ variant, orientation }), className)}
        {...props}
      >
        <div
          className={cn(
            marqueeTrackVariants({ variant, orientation }),
            animationClass,
            trackClassName,
          )}
        >
          <span
            className={cn(
              "shrink-0 whitespace-pre",
              isVertical && "[writing-mode:vertical-rl]",
            )}
          >
            {text}
          </span>
          <span
            className={cn(
              "shrink-0 whitespace-pre",
              isVertical && "[writing-mode:vertical-rl]",
            )}
            aria-hidden="true"
          >
            {text}
          </span>
        </div>
      </div>
    );
  },
);
Marquee.displayName = "Marquee";

export { Marquee, marqueeVariants, marqueeTrackVariants };
