import PortfolioPage, { type GitHubRepo } from "@/app/components/PortfolioPage";
import { profile, repoFallbacks } from "@/app/data/portfolio";

type GitHubApiRepo = {
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
  language: string | null;
  fork: boolean;
};

async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const username = profile.githubUrl.split("/").filter(Boolean).at(-1);

  if (!username) {
    return repoFallbacks;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return repoFallbacks;
    }

    const repos = (await response.json()) as GitHubApiRepo[];
    const mapped = repos
      .filter((repo) => !repo.fork)
      .slice(0, 3)
      .map((repo) => ({
        name: repo.name,
        description:
          repo.description ??
          "React Native and mobile engineering work focused on production-ready implementation.",
        stars: repo.stargazers_count,
        languages: [repo.language ?? "TypeScript"],
        url: repo.html_url,
      }));

    return mapped.length > 0 ? mapped : repoFallbacks;
  } catch {
    return repoFallbacks;
  }
}

export default async function Home() {
  const repositories = await getGitHubRepos();

  return <PortfolioPage repositories={repositories} />;
}
