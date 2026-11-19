import { existsSync } from "node:fs";
import path from "node:path";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Separator } from "@/components/ui/Separator";
import { Rise } from "@/components/ui/Rise";
import { Cursor } from "@/components/ui/Cursor";
import { Header } from "@/components/Header";
import { Contributions } from "@/components/Contributions";
import { Work } from "@/components/Work";
import { Contributed, OpenSource } from "@/components/OpenSource";
import { Education, Experience, Skills } from "@/components/Experience";
import { Visitors } from "@/components/Visitors";
import { Contact } from "@/components/Contact";

// The header uses cover images if they have been added to /public:
// cover.* for the light theme and cover-dark.* for the dark theme.
function findCover() {
  const find = (base: string) => {
    const file = ["jpg", "png", "webp"]
      .map((ext) => `${base}.${ext}`)
      .find((name) => existsSync(path.join(process.cwd(), "public", name)));
    return file ? `/${file}` : undefined;
  };
  const light = find("cover");
  const dark = find("cover-dark");
  if (!light && !dark) return undefined;
  return { light: light ?? dark, dark: dark ?? light };
}

export default function Home() {
  const sections = [
    <Contributions key="contributions" />,
    <Work key="work" />,
    <OpenSource key="open-source" />,
    <Contributed key="contributed" />,
    <Experience key="experience" />,
    <Education key="education" />,
    <Skills key="skills" />,
    <Visitors key="visitors" />,
    <Contact key="contact" />,
  ];

  return (
    <MotionProvider>
      <ToastProvider>
        <Cursor />
        <div className="mx-auto max-w-2xl px-4 pb-20">
          <Rise>
            <Header cover={findCover()} />
          </Rise>
          <main>
            {sections.map((section) => (
              <Rise key={section.key}>
                <Separator />
                {section}
              </Rise>
            ))}
          </main>
        </div>
      </ToastProvider>
    </MotionProvider>
  );
}
