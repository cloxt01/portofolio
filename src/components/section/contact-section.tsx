import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  const contactLinks = Object.entries(DATA.contact.social).filter(([, social]) => social.navbar);

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{DATA.sections.contact.label}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.sections.contact.text}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {contactLinks.map(([name, social]) => {
            const Icon = social.icon;
            const isExternal = social.url.startsWith("http");

            return (
              <a
                key={name}
                href={social.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
              >
                <Icon className="size-4" />
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

