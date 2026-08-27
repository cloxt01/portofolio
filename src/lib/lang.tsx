import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import { DATA_EN } from "@/data/resume.en";
import { cn } from "@/lib/utils";

export type Lang = "id" | "en";
const KEY = "site-lang";
const EVT = "site-lang-change";

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("id");
  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored === "en" || stored === "id") setLangState(stored);
    const onChange = (e: Event) => setLangState((e as CustomEvent).detail as Lang);
    window.addEventListener(EVT, onChange);
    return () => window.removeEventListener(EVT, onChange);
  }, []);
  const setLang = (l: Lang) => {
    localStorage.setItem(KEY, l);
    window.dispatchEvent(new CustomEvent(EVT, { detail: l }));
  };
  return [lang, setLang];
}

export function getData(lang: Lang): typeof DATA {
  return lang === "en" ? DATA_EN : DATA;
}

export function LanguageToggle({ className }: { className?: string }) {
  const [lang, setLang] = useLang();
  return (
    <div
      data-testid="lang-toggle"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background p-0.5 text-xs font-semibold",
        className
      )}
    >
      {(["id", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          data-testid={`lang-${l}`}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors cursor-pointer",
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
