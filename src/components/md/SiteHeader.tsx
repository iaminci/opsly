import { Link } from "@tanstack/react-router";

import { GitHubIcon } from "@/components/md/GitHubIcon";
import { HeaderLogo } from "@/components/md/HeaderLogo";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const GITHUB_URL = "https://github.com/iaminci/opsly-md";

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header className={cn("w-full border-b-2 border-[hsl(var(--ink))]", className)}>
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 py-3">
        <Link
          to="/md"
          aria-label="Opsly MD"
          className="flex min-w-0 items-center leading-none no-underline hover:opacity-90"
        >
          <HeaderLogo className="h-8 w-auto shrink-0 sm:h-10" />
        </Link>
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="size-9 rounded-none border-2 border-[hsl(var(--ink))] bg-[hsl(var(--background))] text-[hsl(var(--ink))] shadow-[4px_4px_0_0_hsl(var(--ink))] transition-[transform,box-shadow] duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--ink))] hover:shadow-[2px_2px_0_0_hsl(var(--ink))] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0_0_hsl(var(--ink))]"
                asChild
              >
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                >
                  <GitHubIcon className="size-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              View on GitHub
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
