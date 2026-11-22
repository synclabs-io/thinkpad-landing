import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Server, Terminal } from "lucide-react";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

const STACK = [
  "Go",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "gRPC",
  "Docker",
  "Kubernetes (k3s)",
  "Linux",
];

const PROJECTS = [
  {
    name: "ordergate",
    description:
      "High-throughput order processing service with Redis Lua rate-limiting, idempotency keys, and testcontainers integration suite.",
    tags: ["Go", "PostgreSQL", "Redis", "Lua"],
    repo: "https://github.com/CodesForge/ordergate",
  },
  {
    name: "keyguard",
    description:
      "Cryptographic token and session service built with standard-library constant-time primitives and gRPC API.",
    tags: ["Go", "gRPC", "crypto/subtle", "Redis"],
    repo: "https://github.com/CodesForge/keyguard",
  },
  {
    name: "GateForge",
    description:
      "Self-hosted API gateway and tunneling infrastructure deployed on k3s with automated TLS and CI/CD.",
    tags: ["Go", "k3s", "Helm", "Nginx"],
    repo: "https://github.com/synclabs-io/gotun",
  },
];

export function App() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800">
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 space-y-8 sm:space-y-10">
        <header className="space-y-4">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[11px] sm:text-xs text-zinc-400">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
            <span className="truncate">
              Hosted on bare-metal ThinkPad · k3s &amp; Docker
            </span>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
              Vlad Baruzin
            </h1>
            <p className="text-base sm:text-lg text-zinc-400">
              Go Backend &amp; DevOps Engineer · Moscow
            </p>
          </div>

          <p className="text-sm leading-relaxed text-zinc-400">
            Building resilient backend services in Go with Clean Architecture,
            PostgreSQL, Redis, and Kafka. Running self-hosted cloud
            infrastructure on Linux and Kubernetes.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
            <a
              href="https://github.com/CodesForge"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "w-full sm:w-auto inline-flex items-center justify-center gap-2"
              )}
            >
              <FaGithub className="h-4 w-4 shrink-0" />
              <span>GitHub</span>
            </a>

            <a
              href="https://t.me/CodesForge"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full sm:w-auto inline-flex items-center justify-center gap-2 border-zinc-800 bg-transparent hover:bg-zinc-900"
              )}
            >
              <FaTelegramPlane className="h-4 w-4 shrink-0" />
              <span>@CodesForge</span>
            </a>
          </div>
        </header>

        <Separator className="bg-zinc-800/80" />

        <section className="space-y-3">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Terminal className="h-3.5 w-3.5 shrink-0" />
            <span>Core Stack</span>
          </h2>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {STACK.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Server className="h-3.5 w-3.5 shrink-0" />
            <span>Selected Projects</span>
          </h2>

          <div className="grid gap-3.5 sm:gap-4">
            {PROJECTS.map((project) => (
              <Card
                key={project.name}
                className="border-zinc-800/90 bg-zinc-900/40 text-zinc-100 transition-colors hover:border-zinc-700"
              >
                <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base font-semibold">
                      {project.name}
                    </CardTitle>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-xs text-zinc-400 hover:text-zinc-100"
                    >
                      Source →
                    </a>
                  </div>
                  <CardDescription className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5 p-4 pt-1 sm:p-6 sm:pt-1">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-zinc-800 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="pt-2 sm:pt-4 text-xs text-zinc-600 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>codesforge.ru</span>
          <span>ThinkPad Node · Ubuntu WSL / k3s</span>
        </footer>
      </main>
    </div>
  );
}

export default App;