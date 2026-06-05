import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/$")({
  beforeLoad: ({ params }) => {
    const rest = (params as Record<string, string>)["_splat"] ?? "";
    throw redirect({ to: `/${rest}`, replace: true });
  },
  component: () => null,
});
