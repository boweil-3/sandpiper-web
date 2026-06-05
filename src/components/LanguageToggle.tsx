import { Globe2 } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { LANGUAGES, type LanguageCode } from "@/i18n/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageToggle() {
  const { lang, setLang, t } = useT();
  return (
    <Select value={lang} onValueChange={(v) => setLang(v as LanguageCode)}>
      <SelectTrigger
        aria-label={t("nav.language")}
        className="h-9 w-auto gap-1.5 rounded-full border-border/60 bg-background/40 px-3 text-[12px] backdrop-blur"
      >
        <Globe2 size={14} className="opacity-70" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {LANGUAGES.map((l) => (
          <SelectItem key={l.code} value={l.code} className="text-[13px]">
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
