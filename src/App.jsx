import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Download, MapPin, Briefcase, Phone, Camera } from "lucide-react";
import headshot from "./assets/IMG_7953.jpeg";

// ——————————————————————————————————————————
// Personalize these values
// ——————————————————————————————————————————
const data = {
  name: "Andrew Jackson",
  role: "Software Engineer • AI & Systems Integration",
  location: "Huntsville, AL",
  blurb:
    "I build reliable, human‑centered software. Recent work spans AI assistants, defense systems tooling, and data‑driven apps.",
  resumeUrl: "file:///C:/Users/Drewj/OneDrive/Desktop/AndrewJacksonPortfolio/src/assets/Andrew%20Jackson%20-%20Resume%20(V.2).pdf",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/andrew-jackson-059134297/", icon: Linkedin },
    { label: "Email", url: "mailto:andrewth848@gmail.com", icon: Mail },
    { label: "Call", url: "tel:2566043089", icon: Phone },
    { label: "Photography", url: "https://www.instagram.com/drewjack_flickzz/", icon: Camera },
  ],
  highlights: [
    "Northrop Grumman — missile defense tools (RHEL, networking)",
    "NASA MSFC — additive manufacturing + automation",
    "FICO Analytics Challenge — 4th nationally (fraud AI)",
  ],
  skills: [
    "Python", "Java", "Web development", "Tailwind", "PostgreSQL", "Linux/RHEL", "Docker", "Azure",
    "Machine Learning", "Data Analytics", "CustomTkinter", "SolidWorks", "NXCAD", 'Python', 'C++',
    'Web Development (HTML)', 'Microsoft Office 365', 'Adobe Photoshop', 'SolidWorks', 'AutoCAD',
    'NXCAD', 'Machine Learning', 'Data Analytics', 'CCNA', 'Cybersecurity Fundamentals', 'Linux/Unix/Kali',
    'Cloud Computing', 'CAD Modeling (SolidWorks, NXCAD, AutoCAD)', '3D Modeling', 'Finite Element Analysis (FEA)',
    'Prototype Fabrication', 'Mechanical Design', 'Systems Integration', 'Technical Documentation', 'Engineering Testing',
    'MATLAB', 'Problem-Solving'],

  projects: [
    {
      title: "Sierra AI Assistant",
      description:
        "Personal AI assistant inspired by JARVIS; built with Python, featuring speech recognition, quick response processing, and a GUI for user interaction.",
      tags: ["Python", "AI", "Speech Recognition"],
      links: [{ label: "Overview", url: "#" }],
    },

    {
      title: "Sober+Health Track App",
      description:
        "Lifestyle app that tracks sobriety milestones alongside health habits; includes nutrition logging, fitness tracking, journaling, and progress dashboards.",
      tags: ["React", "Recharts", "Wellness"],
      links: [{ label: "Overview", url: "#" }],
    },

    {
      title: "Fraud Detection Model — FICO Data Analytics Challenge",
      description:
        "Developed a machine learning fraud detection model using advanced data analytics techniques. Competed nationally in the FICO Data Analytics Challenge and placed 4th overall. Focused on improving prediction accuracy, feature engineering, and explainability of the model.",
      tags: ["Python", "Machine Learning", "Data Analytics", "Fraud Detection"],
      links: [{ label: "Overview", url: "https://www.linkedin.com/posts/andrew-jackson-059134297_grateful-to-share-that-on-thursday-night-activity-7321968972147417088-V4Ph?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe-ikUBRXZrjNv2Tg4UMZLuAudmasIfx-w" }],
    },

  ],
experience: [
    {
      org: "Northrop Grumman",
      role: "Part-Time Software Developer",
      period: "May 2025 – Present",
      points: [
        "Developed a Java and Python-based application to monitor and verify the integrity of missile defense systems",
        "Utilized Red Hat Enterprise Linux (RHEL) to deploy and manage software in secure, mission-critical environments",
        "Conducted functional testing and validation to confirm system performance and operational readiness",
        "Participated in technical briefings and documented application workflows, deployment procedures, and system health checks",
      ],
    },
    {
      org: "NASA – Marshall Space Flight Center",
      role: "Technician Intern",
      period: "September 2024 – Present",
      points: [
        "Designed and optimized mechanical components for aerospace applications using SolidWorks, NXCAD, and CREO",
        "Assisted in the design, analysis, and testing of aerospace components and systems",
        "Worked on prototype fabrication, assembly, and testing in lab environments",
        "Documented findings and presented technical reports to NASA engineers and project leads",
        "Contributed technical insights and problem-solving approaches during project meetings",
      ],
    },
    {
      org: "FICO Analytics Challenge (Analytics Course)",
      role: "Analytics Scientist I",
      period: "January 2025 – May 2025",
      points: [
        "Analyzed financial datasets to develop predictive models for credit risk assessment",
        "Applied FICO’s decision optimization and risk management strategies",
        "Manipulated and analyzed datasets using Python and Excel",
        "Used Pandas, NumPy, Scikit-learn, and Matplotlib/Seaborn for data processing and visualization",
        "Evaluated key credit scoring factors such as payment history, debt-to-income ratio, and credit utilization",
      ],
    },
    {
      org: "NASA – Tuskegee University",
      role: "Intern (MUREP Program)",
      period: "May 2024 – July 2024",
      points: [
        "Worked on 3D-Concrete Printing research in partnership with NASA MUREP",
        "Performed tensile tests on sample mixtures using an Instron machine and documented test data",
        "Developed skills in CAD, Additive Manufacturing, Selective Laser Melting, and Optical Microscopy",
        "Applied engineering formulas to analyze stress and strain of samples",
        "Presented project results to NASA MUREP officers in August 2024",
      ],
    },
  ],
};

// Small helpers
const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
    {children}
  </span>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
    <motion.h2
      className="text-3xl md:text-4xl font-bold tracking-tight"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fade(0)}
    >
      {title}
    </motion.h2>
    <div className="mt-8">{children}</div>
  </section>
);

const NavLink = ({ href, label }) => (
  <a href={href} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">
    {label}
  </a>
);

export default function PortfolioSite() {
  const [theme, setTheme] = useState("dark");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzvygrr"; // <-- replace with your Formspree form ID

  React.useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const heroGradient = useMemo(
    () =>
      "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.22),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.25),transparent_40%)]",
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const name = form.name?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const message = form.message?.value?.trim() || "";
    const botTrap = form.company?.value || ""; // honeypot

    if (botTrap) return; // silently drop bots

    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-fuchsia-400/40">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">{data.name}</a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <NavLink href="#about" label="About" />
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#contact" label="Contact" />
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              title="Toggle theme"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <a
              href={data.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className={`relative overflow-hidden ${heroGradient}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fade(0)}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400"
          >
            <MapPin className="h-4 w-4" /> {data.location}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fade(0.08)}
            className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.1]"
          >
            {data.name}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fade(0.16)}
            className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300"
          >
            {data.role}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fade(0.24)}
            className="mt-6 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300"
          >
            {data.blurb}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fade(0.32)}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border text-sm font-semibold hover:translate-y-[-1px] transition-transform"
            >
              See Projects <ArrowRight className="h-4 w-4" />
            </a>
            {data.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border text-sm hover:bg-black/5 dark:hover:bg-white/10"
              >
                {s.icon ? <s.icon className="h-4 w-4" /> : null}
                {s.label}
              </a>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={fade(0.4)}
            className="mt-10 grid md:grid-cols-3 gap-3"
          >
            {data.highlights.map((h, i) => (
              <li key={i} className="rounded-2xl border p-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 font-semibold"><Briefcase className="h-4 w-4" /> Highlight</div>
                <p className="mt-2">{h}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        {/* Photo directly under the About header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0)} className="flex justify-center">
          <img
            src={headshot}
            alt="Andrew Jackson headshot"
            className="mt-4 w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* About content */}
        <div className="mt-8 grid md:grid-cols-[1.2fr,0.8fr] gap-8">
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0)} className="text-slate-700 dark:text-slate-300 leading-7">
            I’m Andrew — a software developer and engineer who loves building tools that blend clean design with real impact. My background spans backend, frontend, and machine learning, and I enjoy solving problems with a mix of creativity and precision. Outside of code, I’m a photographer with an eye for detail, a motorcycle enthusiast always chasing new adventures, and a campus leader dedicated to community and growth. I thrive on learning, building, and leaving things better than I found them.
          </motion.p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0.1)} className="rounded-2xl border p-6">
            <h3 className="font-semibold">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>🎓 CIS and Mechanical Engineering student; aiming software dev</li>
              <li>🛰️ Defense & space enthusiast</li>
              <li>🧠 I love learning new things</li>
              <li>🌱 Always open to new opportunities</li>
              <li>📍 Based in Huntsville, AL</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          {data.experience.map((job, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(i * 0.05)} className="rounded-2xl border p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-slate-500">{job.period}</p>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{job.org}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((proj, i) => (
            <motion.article
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade(i * 0.05)}
              className="group rounded-2xl border p-6 hover:translate-y-[-2px] transition-transform"
            >
              <h3 className="text-lg font-semibold leading-tight">{proj.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{proj.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {proj.links?.map((l, idx) => (
                  <a key={idx} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm underline decoration-dotted">
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0)} className="rounded-2xl border p-6">
            <h3 className="font-semibold">Let’s build something</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Call, email, or send me a message via the form.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                  {s.icon ? <s.icon className="h-4 w-4" /> : null}
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {status === "success" ? (
            <div className="rounded-2xl border p-6 bg-green-500/10 border-green-500/30">
              <h3 className="font-semibold">Thanks! Your message was sent.</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">I'll get back to you soon.</p>
              <button onClick={() => setStatus("idle")} className="mt-4 inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold hover:translate-y-[-1px] transition-transform">Send another</button>
            </div>
          ) : (
            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade(0.05)}
              onSubmit={handleSubmit}
              className="rounded-2xl border p-6 grid gap-3"
            >
              {/* Honeypot field */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

              <label className="grid gap-1 text-sm">
                <span>Name</span>
                <input name="name" required className="rounded-xl border px-3 py-2 bg-transparent" placeholder="Your name" />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Email</span>
                <input name="email" type="email" required className="rounded-xl border px-3 py-2 bg-transparent" placeholder="you@example.com" />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Message</span>
                <textarea name="message" rows={4} required className="rounded-xl border px-3 py-2 bg-transparent" placeholder="Say hello…" />
              </label>
              <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold hover:translate-y-[-1px] transition-transform disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "loading" ? "Sending…" : <>Send <ArrowRight className="h-4 w-4" /></>}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
            </motion.form>
          )}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 text-sm text-slate-500 flex flex-wrap gap-3 items-center justify-between">
          <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <a href="#home" className="underline decoration-dotted">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
