import { createFileRoute } from "@tanstack/react-router";
import { Index } from "../index";

export const Route = createFileRoute("/$lang/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sandpiper — Beat jet lag. Arrive ready." },
      {
        name: "description",
        content:
          "A personalized hour-by-hour schedule for your body, starting 48 hours before departure. Built for international travelers.",
      },
      { property: "og:title", content: "Sandpiper — Beat jet lag. Arrive ready." },
      {
        property: "og:description",
        content:
          "A personalized hour-by-hour schedule for your body, starting 48 hours before departure.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});
