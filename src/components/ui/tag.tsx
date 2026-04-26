import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "border-2 border-[hsl(var(--ink))] bg-[hsl(var(--ink))] text-[hsl(var(--background))]",
  {
    variants: {
      size: {
        sm: "px-2 py-0.5",
        lg: "px-3 py-1 font-mono-accent text-[10px] font-bold uppercase tracking-[0.2em]",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  asChild?: boolean;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        ref={ref}
        className={cn(tagVariants({ size }), className)}
        {...props}
      />
    );
  },
);
Tag.displayName = "Tag";

export { Tag, tagVariants };
