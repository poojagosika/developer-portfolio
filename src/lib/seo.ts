import { education, experience, person, projects, stack } from "../data/site";

// Everything search engines and link previews read about the site.
export const SITE = {
  url: "https://poojagosika.com",
  name: "Pooja Gosika",
  title: "Pooja Gosika | Lead Software Engineer, Full-Stack & AI",
  description:
    "Pooja Gosika is a Lead Software Engineer in Hyderabad who builds AI products end-to-end with React, Next.js, Node.js, OpenAI and AWS. Builder of Upivot and InterviewPrepUp, founder of Deliver Website, and open-source contributor with 20 merged fixes.",
  shortDescription:
    "I build AI products end-to-end, usually as the only engineer on them. Builder of Upivot, InterviewPrepUp and Deliver Website.",
  keywords: [
    "Pooja Gosika",
    "Lead Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "LLM application developer",
    "OpenAI and LangChain engineer",
    "AWS engineer",
    "Open-source contributor",
    "Software engineer in Hyderabad",
    "Remote software engineer India",
    "Upivot",
    "InterviewPrepUp",
    "Deliver Website",
  ],
  twitter: "@0xPoojaDev",
  locale: "en_US",
};

// Structured data: tells search engines this page is a person's profile, who
// that person is, what they do and which other profiles are theirs.
export function jsonLd() {
  const personId = `${SITE.url}/#person`;
  const siteId = `${SITE.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": siteId,
        url: `${SITE.url}/`,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE.url}/#profile`,
        url: `${SITE.url}/`,
        name: SITE.title,
        description: SITE.description,
        inLanguage: "en",
        isPartOf: { "@id": siteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: `${SITE.url}/pooja.jpg`,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        url: `${SITE.url}/`,
        image: `${SITE.url}/pooja.jpg`,
        email: `mailto:${person.email}`,
        jobTitle: person.role,
        description: SITE.shortDescription,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        worksFor: [
          {
            "@type": "Organization",
            name: "Upivot",
            url: "https://www.upivot.in",
          },
          {
            "@type": "Organization",
            name: "Deliver Website",
            url: "https://deliverwebsite.com",
          },
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education[0].place,
        },
        hasOccupation: {
          "@type": "Occupation",
          name: person.role,
          occupationLocation: { "@type": "Country", name: "India" },
          skills: stack.flatMap((group) => group.items).join(", "),
        },
        knowsAbout: stack.flatMap((group) => group.items),
        sameAs: [person.links.github, person.links.linkedin, person.links.x],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/#work`,
        name: "Work by Pooja Gosika",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.detail,
            url: project.live ?? project.code,
            creator: { "@id": personId },
            keywords: project.tech.join(", "),
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/#experience`,
        name: "Experience",
        itemListElement: experience.map((job, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "OrganizationRole",
            roleName: job.role,
            description: job.points.join(" "),
            memberOf: { "@type": "Organization", name: job.company },
          },
        })),
      },
    ],
  };
}
