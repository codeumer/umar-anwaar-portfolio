"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  Menu,
  Play,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  aboutPoints,
  contactLinks,
  credibilityStats,
  experiences,
  focusAreas,
  heroLinks,
  labItems,
  navItems,
  profile,
  projects,
  sectionKicker,
  skills,
} from "@/app/data/portfolio";

export type GitHubRepo = {
  name: string;
  description: string;
  stars: number;
  languages: string[];
  url: string;
};

type PortfolioPageProps = {
  repositories: GitHubRepo[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200 shadow-sm shadow-black/20">
      {children}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100">
            UA
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Umar Anwaar
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:inline-flex"
        >
          <Mail className="size-4" aria-hidden="true" />
          Hire Umar
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-[#070b12] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto aspect-[0.82] w-full max-w-[390px]"
      aria-label="Mobile product engineering preview"
    >
      <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-violet-400/10 to-amber-300/20 blur-3xl" />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [0, -1.5, 0] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full rounded-[2rem] border border-white/15 bg-slate-950 p-4 shadow-2xl shadow-cyan-950/40"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="h-5 w-24 rounded-full bg-white/10" />
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-emerald-300" />
            <span className="size-2 rounded-full bg-amber-300" />
            <span className="size-2 rounded-full bg-rose-300" />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                Live route
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">DXB → RUH</p>
            </div>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              Pusher
            </span>
          </div>
          <div className="relative h-36 overflow-hidden rounded-xl bg-slate-900">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.12)_25%,transparent_25%,transparent_50%,rgba(34,211,238,0.12)_50%,rgba(34,211,238,0.12)_75%,transparent_75%,transparent)] bg-[length:28px_28px]" />
            <motion.div
              animate={prefersReducedMotion ? undefined : { x: [0, 120, 210] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              className="absolute left-8 top-16 size-4 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(103,232,249,0.9)]"
            />
            <div className="absolute bottom-5 left-6 right-6 h-px bg-cyan-300/50" />
            <div className="absolute bottom-4 left-6 size-3 rounded-full bg-cyan-200" />
            <div className="absolute bottom-4 right-6 size-3 rounded-full bg-violet-200" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {["eSIM active", "Hotel sync", "GPS zones", "App size ↓"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-medium text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pt-32 md:px-8 md:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(245,158,11,0.1),transparent_28%)]" />
      <motion.div
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-0 top-24 -z-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 pb-24 md:grid-cols-[1.05fr_0.95fr] md:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
          >
            <Sparkles className="size-4" aria-hidden="true" />
            React Native, Reanimated, realtime mobile systems
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-2xl font-medium text-cyan-100 md:text-3xl"
          >
            {profile.title}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {profile.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
            aria-label="Primary actions"
          >
            {heroLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={
                    index === 0
                      ? "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                      : "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  }
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {credibilityStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={sectionKicker.about}
          title="I build mobile products where realtime data, maps, and booking complexity have to feel effortless."
          description="My work sits close to business-critical flows: flight tickets, hotels, eSIM activation, participant tracking, and interaction-heavy screens that need to hold up under production pressure."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {aboutPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20"
              >
                <Icon className="mb-6 size-8 text-cyan-200" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{point.body}</p>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {focusAreas.map((area) => (
            <Badge key={area}>{area}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={sectionKicker.experience}
          title="Experience built around shipping serious mobile product work."
        />
        <div className="relative">
          <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-white/20 to-amber-300 md:block" />
          <div className="space-y-5">
            {experiences.map((job, index) => {
              const Icon = job.icon;
              return (
                <motion.article
                  key={job.company}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="relative rounded-2xl border border-white/10 bg-slate-950/70 p-6 md:ml-16"
                >
                  <div className="absolute -left-[4.75rem] top-6 hidden size-10 place-items-center rounded-xl border border-cyan-300/25 bg-[#07111f] text-cyan-200 md:grid">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        {job.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-slate-300">{job.role}</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-3">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-slate-300">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ accent, title }: { accent: string; title: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950 p-4">
      <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${accent}`} />
      <div className="relative mx-auto aspect-[0.72] max-h-72 w-44 rounded-[1.5rem] border border-white/20 bg-slate-950 p-3 shadow-2xl">
        <div className="mb-3 h-4 rounded-full bg-white/10" />
        <div className={`h-20 rounded-xl bg-gradient-to-br ${accent}`} />
        <div className="mt-3 space-y-2">
          <div className="h-3 rounded-full bg-white/20" />
          <div className="h-3 w-2/3 rounded-full bg-white/10" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-lg bg-white/10" />
          <div className="h-16 rounded-lg bg-white/10" />
        </div>
        <p className="sr-only">Screenshot placeholder for {title}</p>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={sectionKicker.projects}
          title="Featured projects with mobile engineering depth."
          description="Each project is framed around production concerns: realtime feedback, booking reliability, maps, messaging, and performance."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-black/20"
            >
              <ProjectPreview accent={project.accent} title={project.title} />
              <div className="flex flex-1 flex-col p-2 pt-5">
                <p className="text-sm font-semibold text-cyan-200">
                  {project.metric}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical toolbox"
          title="Focused skills for React Native product teams."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LabSection() {
  return (
    <section id="lab" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={sectionKicker.lab}
          title="Interaction & Animation Lab"
          description="A dedicated space for advanced mobile interactions: gestures, shared transitions, bottom sheets, drag systems, and realtime-friendly motion patterns."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {labItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="relative h-52 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_75%_65%,rgba(245,158,11,0.18),transparent_32%)]" />
                  <motion.div
                    animate={{ x: [0, 18, -10, 0], y: [0, -8, 10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-8 top-8 h-28 w-24 rounded-2xl border border-white/20 bg-white/10 backdrop-blur"
                  />
                  <motion.div
                    animate={{ rotate: [0, 6, -4, 0], y: [0, 12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-8 top-14 h-32 w-24 rounded-2xl border border-cyan-200/25 bg-cyan-200/10 backdrop-blur"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                    {item.previewType === "video" ? (
                      <Play className="size-3" aria-hidden="true" />
                    ) : (
                      <Sparkles className="size-3" aria-hidden="true" />
                    )}
                    {item.previewType.toUpperCase()} preview slot
                  </div>
                </div>
                <div className="p-2 pt-5">
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-cyan-200" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GitHubSection({ repositories }: { repositories: GitHubRepo[] }) {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={sectionKicker.github}
          title="GitHub repositories"
          description="Fetched dynamically when GitHub is available, with curated fallbacks so the page remains reliable."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition hover:border-cyan-300/35 hover:bg-cyan-300/5"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <GitBranch className="size-6 text-cyan-200" aria-hidden="true" />
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-200">
                  <Star className="size-4 fill-current" aria-hidden="true" />
                  {repo.stars}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {repo.name}
              </h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-300">
                {repo.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {repo.languages.map((language) => (
                  <Badge key={language}>{language}</Badge>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            {sectionKicker.contact}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Let’s talk about mobile systems that need senior ownership.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            I’m especially interested in React Native roles involving Reanimated,
            realtime platforms, booking products, maps, app performance, and
            technical leadership.
          </p>
          <div className="mt-8 space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
                >
                  <Icon className="size-5 text-cyan-200" aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        <form
          className="grid gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5"
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Name
            <input
              name="name"
              autoComplete="name"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
              placeholder="Your name"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
              placeholder="you@company.com"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Message
            <textarea
              name="message"
              rows={6}
              className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
              placeholder="Tell me about the React Native role, product, or team."
              required
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Send message
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default function PortfolioPage({ repositories }: PortfolioPageProps) {
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LabSection />
        <GitHubSection repositories={repositories} />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400 md:px-8">
        <p>
          © {new Date().getFullYear()} Umar Anwaar. Senior React Native
          Developer focused on realtime mobile systems.
        </p>
      </footer>
    </div>
  );
}
