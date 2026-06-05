import { createFileRoute } from "@tanstack/react-router";
import { langFromSlug } from "@/i18n/paths";
import { DeleteAccountPage, deleteAccountHead } from "../delete-account";

export const Route = createFileRoute("/$lang/delete-account")({
  component: DeleteAccountPage,
  head: ({ params }) => {
    const lang = langFromSlug(params.lang);
    return deleteAccountHead(lang ?? "en");
  },
});
