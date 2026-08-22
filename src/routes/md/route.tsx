import { createFileRoute, Outlet } from "@tanstack/react-router";

import { TooltipProvider } from "@/components/ui/tooltip";

import mdHomeCss from "@/styles/md-home-editorial.css?url";

export const Route = createFileRoute("/md")({
  head: () => ({
    links: [{ rel: "stylesheet", href: mdHomeCss }],
  }),
  component: MdLayout,
});

function MdLayout() {
  return (
    <TooltipProvider>
      <Outlet />
    </TooltipProvider>
  );
}
