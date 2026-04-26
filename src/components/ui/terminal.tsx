import * as React from "react";

import { cn } from "@/lib/utils";

const Terminal = React.forwardRef<
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
Terminal.displayName = "Terminal";

const TerminalChrome = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between border-b-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface-2))] px-4 py-2.5",
      className,
    )}
    {...props}
  />
));
TerminalChrome.displayName = "TerminalChrome";

const TerminalTrafficLights = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const square = "size-[12px] shrink-0 border-2 border-black";
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    >
      <span className={cn(square, "bg-[#ff2d00]")} aria-hidden />
      <span
        className={cn(square, "bg-[#ffd400] translate-y-[1px]")}
        aria-hidden
      />
      <span className={cn(square, "bg-[#00ff66]")} aria-hidden />
    </div>
  );
});
TerminalTrafficLights.displayName = "TerminalTrafficLights";

const TerminalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "space-y-2 px-6 py-6 font-mono-accent text-[13.5px] leading-relaxed text-[hsl(var(--ink))]/85",
      className,
    )}
    {...props}
  />
));
TerminalBody.displayName = "TerminalBody";

export { Terminal, TerminalChrome, TerminalTrafficLights, TerminalBody };
