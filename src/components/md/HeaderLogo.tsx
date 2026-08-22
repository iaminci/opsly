import type { SVGProps } from "react";

export function HeaderLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 56"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      {...props}
    >
      <text
        x="0"
        y="44"
        fontFamily="JetBrains Mono, Fira Code, ui-monospace, monospace"
        fontWeight="800"
        fontSize="48"
        letterSpacing="0"
      >
        <tspan fill="hsl(var(--ink))" fontStyle="italic">
          #
        </tspan>
        <tspan fill="hsl(var(--ink))" dx="8">
          OPSLY
        </tspan>
        <tspan fill="hsl(var(--ink))" dx="12">
          MD
        </tspan>
      </text>
    </svg>
  );
}
