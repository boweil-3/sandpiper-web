import { createFileRoute } from "@tanstack/react-router";
import { langFromSlug } from "@/i18n/paths";
import { SupportPage, supportHead } from "../support";

export const Route = createFileRoute("/$lang/support")({
  component: SupportPage,
  head: ({ params }) => {
    const lang = langFromSlug(params.lang);
    return supportHead(lang ?? "en");
  },
});
