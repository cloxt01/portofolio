import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA as DATA_ID } from "@/data/resume";
import { getData, useLang } from "@/lib/lang";

const BLUR_FADE_DELAY = 0.04;

type Project = (typeof DATA_ID.projects)[number];

export default function ProjectsSection() {
    const [lang] = useLang();
    const DATA = getData(lang);
    const mainProjects = DATA.projects.filter((p: Project) => !p.academic);
    const academicProjects = DATA.projects.filter((p: Project) => p.academic);

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">{DATA.sections.projects.label}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{DATA.sections.projects.heading}</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            {DATA.sections.projects.text}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr" data-testid="main-projects-grid">
                    {mainProjects.map((project: Project, id: number) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                detailHref={`/projects/${project.slug}`}
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
                {academicProjects.length > 0 && (
                    <div className="max-w-[800px] mx-auto w-full flex flex-col gap-y-3" data-testid="academic-projects-section">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            {DATA.sections.projects.academicHeading}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {academicProjects.map((project: Project) => (
                                <a
                                    key={project.slug}
                                    href={`/projects/${project.slug}`}
                                    data-testid={`academic-project-${project.slug}`}
                                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-lg border border-border px-4 py-3 hover:bg-accent/50 transition-colors"
                                >
                                    <div className="min-w-0">
                                        <span className="text-sm font-medium">{project.title}</span>
                                        <p className="text-xs text-muted-foreground line-clamp-1">{project.description}</p>
                                    </div>
                                    <span className="text-xs tabular-nums text-muted-foreground flex-none">{project.dates}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
