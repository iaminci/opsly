import * as React from "react";

import { cn } from "@/lib/utils";

const Panel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))]",
      className,
    )}
    {...props}
  />
));
Panel.displayName = "Panel";

const PanelHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between border-b-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))] px-5 py-2.5 font-mono-accent text-[11px] uppercase tracking-[0.25em]",
      className,
    )}
    {...props}
  />
));
PanelHeader.displayName = "PanelHeader";

const PanelBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
PanelBody.displayName = "PanelBody";

const PanelFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-t-2 border-[hsl(var(--ink))]/30 bg-[hsl(var(--surface-2))] px-6 py-3 font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--ink))]/55",
      className,
    )}
    {...props}
  />
));
PanelFooter.displayName = "PanelFooter";

export { Panel, PanelHeader, PanelBody, PanelFooter };
