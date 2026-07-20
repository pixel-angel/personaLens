export async function getGithubProfile(input: string) {
  if (!input?.trim()) return null;

  try {
    // Accept:
    // octocat
    // github.com/octocat
    // https://github.com/octocat
    // https://github.com/octocat/
    const username = input
      .trim()
      .replace(/^https?:\/\/(www\.)?github\.com\//i, "")
      .replace(/^github\.com\//i, "")
      .replace(/\/$/, "")
      .split("/")[0];

    // console.log("GitHub username:", username);

    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const userRes = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers,
        cache: "no-store",
      }
    );

    if (!userRes.ok) {
      console.error("GitHub user request failed:", userRes.status);
      console.error(await userRes.text());
      return null;
    }

    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers,
        cache: "no-store",
      }
    );

    let repos: any[] = [];

    if (repoRes.ok) {
      repos = await repoRes.json();
    }

    const topRepos = repos
      .sort(
        (a, b) =>
          (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
      )
      .slice(0, 5)
      .map((repo) => ({
        name: repo.name,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics ?? [],
        description: repo.description,
      }));

    const profile = {
      username: user.login,
      name: user.name,
      bio: user.bio,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      location: user.location,
      company: user.company,
      blog: user.blog,
      topRepos,
    };

    console.log("GitHub profile:");
    console.log(profile);

    return profile;
  } catch (err) {
    console.error("GitHub fetch error:", err);
    return null;
  }
}