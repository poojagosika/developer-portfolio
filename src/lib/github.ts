// Reads the public contribution calendar from a GitHub profile. GitHub has no
// open API for it, so this reads the same HTML the profile page loads.

export type ContributionDay = {
  date: string; // "2026-11-19"
  level: number; // 0 (none) to 4 (most), as GitHub shades it
  count: number;
};

export type Contributions = {
  total: number;
  days: ContributionDay[];
};

const SIX_HOURS = 60 * 60 * 6;

export async function getContributions(
  user: string,
): Promise<Contributions | null> {
  try {
    const response = await fetch(
      `https://github.com/users/${user}/contributions`,
      {
        headers: { "User-Agent": "Mozilla/5.0 (portfolio site)" },
        next: { revalidate: SIX_HOURS },
      },
    );
    if (!response.ok) return null;
    const html = await response.text();

    // Each day's tooltip says how many contributions it had.
    const counts = new Map<string, number>();
    for (const match of html.matchAll(
      /<tool-tip[^>]*\sfor="([^"]+)"[^>]*>([^<]*)</g,
    )) {
      const number = match[2].match(/^\s*([\d,]+)\s+contribution/);
      counts.set(match[1], number ? Number(number[1].replace(/,/g, "")) : 0);
    }

    const days: ContributionDay[] = [];
    for (const match of html.matchAll(/<td[^>]*\sdata-date="[^"]*"[^>]*>/g)) {
      const cell = match[0];
      const date = cell.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
      const level = cell.match(/data-level="(\d)"/)?.[1];
      const id = cell.match(/\sid="([^"]+)"/)?.[1];
      if (!date || level === undefined) continue;
      days.push({
        date,
        level: Number(level),
        count: id ? (counts.get(id) ?? 0) : 0,
      });
    }
    if (days.length < 300) return null;
    days.sort((a, b) => a.date.localeCompare(b.date));

    const heading = html.match(
      /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/,
    );
    const total = heading
      ? Number(heading[1].replace(/,/g, ""))
      : days.reduce((sum, day) => sum + day.count, 0);

    return { total, days };
  } catch {
    return null;
  }
}
