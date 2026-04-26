import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("bg-card text-card-foreground", {
  variants: {
    variant: {
      default: "rounded-xl border shadow",
      brutal:
        "rounded-none border-2 border-[hsl(var(--ink))] shadow-none",
      product:
        "rounded-none border-2 border-[hsl(var(--ink))] shadow-[14px_14px_0_0_hsl(var(--ink))]",
      spec:
        "rounded-none border-2 border-[hsl(var(--ink))]/70 bg-[hsl(var(--background))] shadow-none",
      slot:
        "rounded-none border-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))] p-4 font-mono-accent text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--ink))]/60 shadow-[6px_6px_0_0_hsl(var(--ink))]",
      ghost:
        "rounded-none border-2 border-dashed border-[hsl(var(--ink))]/35 bg-transparent p-5 font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--ink))]/45 shadow-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
};
