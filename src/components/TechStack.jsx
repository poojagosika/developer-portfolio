import { motion } from "framer-motion";
import { pop, spread } from "../animations";
import MacTerminal from "./MacTerminal";

const d = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}`;

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: d("javascript/javascript-original.svg") },
      { name: "TypeScript", icon: d("typescript/typescript-original.svg") },
      { name: "Python", icon: d("python/python-original.svg") },
      { name: "Java", icon: d("java/java-original.svg") },
      { name: "C++", icon: d("cplusplus/cplusplus-original.svg") },
      { name: "C", icon: d("c/c-original.svg") },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: d("react/react-original.svg") },
      { name: "Angular", icon: d("angular/angular-original.svg") },
      { name: "AngularJS", icon: d("angularjs/angularjs-original.svg") },
      { name: "Tailwind CSS", icon: d("tailwindcss/tailwindcss-original.svg") },
      { name: "Bootstrap", icon: d("bootstrap/bootstrap-original.svg") },
      { name: "HTML5", icon: d("html5/html5-original.svg") },
      { name: "CSS3", icon: d("css3/css3-original.svg") },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: d("nodejs/nodejs-original.svg") },
      { name: "Express", icon: d("express/express-original.svg") },
      { name: "MongoDB", icon: d("mongodb/mongodb-original.svg") },
      { name: "MySQL", icon: d("mysql/mysql-original.svg") },
      { name: "Oracle", icon: d("oracle/oracle-original.svg") },
      { name: "Firebase", icon: d("firebase/firebase-original.svg") },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      {
        name: "AWS",
        icon: d("amazonwebservices/amazonwebservices-plain-wordmark.svg"),
      },
      { name: "GCP", icon: d("googlecloud/googlecloud-original.svg") },
      { name: "Docker", icon: d("docker/docker-original.svg") },
      { name: "Git", icon: d("git/git-original.svg") },
      { name: "Jenkins", icon: d("jenkins/jenkins-original.svg") },
      { name: "Linux", icon: d("linux/linux-original.svg") },
      {
        name: "GitHub Actions",
        icon: d("githubactions/githubactions-original.svg"),
      },
    ],
  },
  {
    title: "Design & Other",
    items: [
      { name: "Figma", icon: d("figma/figma-original.svg") },
      { name: "Photoshop", icon: d("photoshop/photoshop-original.svg") },
      { name: "Matlab", icon: d("matlab/matlab-original.svg") },
      { name: "Postman", icon: d("postman/postman-original.svg") },
      { name: "Salesforce", icon: d("salesforce/salesforce-original.svg") },
    ],
  },
];

const viewportOnce = { once: false, amount: 0.3 };

export default function TechStack() {
  return (
    <section id="techstack" className="py-20">
      <motion.p
        variants={pop}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Tech Stack section --&gt;
      </motion.p>

      <motion.div
        variants={pop}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            tech<span className="text-text-muted">.stack</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      {/* MERN Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <MacTerminal title="primary-stack.config" className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "MongoDB", icon: d("mongodb/mongodb-original.svg") },
              { name: "Express.js", icon: d("express/express-original.svg") },
              { name: "React", icon: d("react/react-original.svg") },
              { name: "Node.js", icon: d("nodejs/nodejs-original.svg") },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/4 bg-white/2 hover:bg-white/4 transition-colors"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8"
                  loading="lazy"
                />
                <span className="text-[11px] text-text-secondary font-mono">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </MacTerminal>
      </motion.div>

      {/* All Categories */}
      <div className="space-y-6">
        {techCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={spread}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="font-mono text-xs text-text-muted mb-4">
              // {cat.title.toLowerCase()}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    transition: { duration: 0.15 },
                  }}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl glass-card transition-colors duration-300 cursor-default"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-5 h-5"
                    loading="lazy"
                    style={
                      item.name === "Express"
                        ? { filter: "invert(1)" }
                        : undefined
                    }
                  />
                  <span className="font-mono text-xs text-text-secondary">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
