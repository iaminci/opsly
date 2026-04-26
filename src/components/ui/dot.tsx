import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dotVariants = cva("bg-[hsl(var(--orange))]", {
  variants: {
    size: {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface DotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dotVariants> {}

const Dot = React.forwardRef<HTMLSpanElement, DotProps>(
  ({ className, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(dotVariants({ size }), className)}
      {...props}
    />
  ),
);
Dot.displayName = "Dot";

export { Dot, dotVariants };
