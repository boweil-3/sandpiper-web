import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { LANGUAGES } from "@/i18n/translations";

const LANG_SLUGS = new Set(LANGUAGES.filter((l) => l.slug).map((l) => l.slug));

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!LANG_SLUGS.has(params.lang.toLowerCase())) throw notFound();
  },
  component: () => <Outlet />,
});
