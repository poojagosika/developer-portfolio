import { getContributions } from "../lib/github";
import { ContributionGrid } from "./Contributions";

// Reads the grid at build time; the client part refreshes it live.
export async function Contributions() {
  const data = await getContributions("poojagosika");
  return <ContributionGrid initial={data} />;
}
