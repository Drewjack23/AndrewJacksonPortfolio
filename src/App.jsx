import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronUp,
  Code2,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import headshot from "./assets/IMG_7953.jpeg";
import resumeFile from "./assets/Andrew-Jackson-Resume.pdf";

const data = {
  name: "Andrew Jackson",
  role: "FICO Analytic Science Intern | Cybersecurity, AI/ML & Software Engineering",
  location: "Huntsville, AL",
  blurb:
    "I build data-driven, secure, and human-centered systems across fraud analytics, cybersecurity research, AI assistants, web products, and aerospace engineering design.",
  resumeUrl: resumeFile,
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/andrew-jackson-059134297/", icon: Linkedin },
    { label: "Email", url: "mailto:andrewth848@gmail.com", icon: Mail },
    { label: "Call", url: "tel:2566043089", icon: Phone },
  ],
  highlights: [
    "FICO Analytic Science Intern focused on fraud analytics and applied modeling",
    "Cybersecurity, AI/ML, data analytics, React, Python, Java, and engineering design",
    "National recognition through FICO analytics work, NASA programs, and STEM leadership",
  ],
  metrics: [
    { value: "4", label: "Major technical domains" },
    { value: "3+", label: "Industry and research organizations" },
    { value: "Top 4", label: "National FICO Analytics Challenge" },
  ],
  skills: [
    { name: "Python", category: "Software + Data", url: "https://www.python.org/about/" },
    { name: "Java", category: "Software + Data", url: "https://www.oracle.com/java/" },
    { name: "C++", category: "Software + Data", url: "https://isocpp.org/" },
    { name: "React", category: "Software + Data", url: "https://react.dev/" },
    { name: "Web Development", category: "Software + Data", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
    { name: "Tailwind CSS", category: "Software + Data", url: "https://tailwindcss.com/docs" },
    { name: "PostgreSQL", category: "Software + Data", url: "https://www.postgresql.org/about/" },
    { name: "Machine Learning", category: "AI + Analytics", url: "https://en.wikipedia.org/wiki/Machine_learning" },
    { name: "Data Analytics", category: "AI + Analytics", url: "https://en.wikipedia.org/wiki/Data_analysis" },
    { name: "Pandas / NumPy / Scikit-learn", category: "AI + Analytics", url: "https://scikit-learn.org/stable/" },
    { name: "Fraud Analytics", category: "AI + Analytics", url: "https://www.fico.com/en/solutions/fraud-security" },
    { name: "Cybersecurity Fundamentals", category: "Cyber + Cloud", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
    { name: "CCNA", category: "Cyber + Cloud", url: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html" },
    { name: "Linux / RHEL", category: "Cyber + Cloud", url: "https://www.redhat.com/en/topics/linux" },
    { name: "Linux / Unix / Kali", category: "Cyber + Cloud", url: "https://www.kali.org/docs/introduction/what-is-kali-linux/" },
    { name: "Docker", category: "Cyber + Cloud", url: "https://www.docker.com/resources/what-container/" },
    { name: "Azure", category: "Cyber + Cloud", url: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure/" },
    { name: "Cloud Computing", category: "Cyber + Cloud", url: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/" },
    { name: "SolidWorks", category: "Engineering Design", url: "https://www.solidworks.com/" },
    { name: "NX CAD", category: "Engineering Design", url: "https://plm.sw.siemens.com/en-US/nx/" },
    { name: "AutoCAD", category: "Engineering Design", url: "https://www.autodesk.com/products/autocad/overview" },
    { name: "CAD Modeling", category: "Engineering Design", url: "https://en.wikipedia.org/wiki/Computer-aided_design" },
    { name: "3D Modeling", category: "Engineering Design", url: "https://en.wikipedia.org/wiki/3D_modeling" },
    { name: "Finite Element Analysis", category: "Engineering Design", url: "https://en.wikipedia.org/wiki/Finite_element_method" },
    { name: "Prototype Fabrication", category: "Engineering Design", url: "https://en.wikipedia.org/wiki/Prototype" },
    { name: "Mechanical Design", category: "Engineering Design", url: "https://en.wikipedia.org/wiki/Mechanical_engineering_design" },
    { name: "Systems Integration", category: "Professional Tools", url: "https://en.wikipedia.org/wiki/System_integration" },
    { name: "Technical Documentation", category: "Professional Tools", url: "https://en.wikipedia.org/wiki/Technical_documentation" },
    { name: "Engineering Testing", category: "Professional Tools", url: "https://en.wikipedia.org/wiki/Test_engineering" },
    { name: "MATLAB", category: "Professional Tools", url: "https://www.mathworks.com/products/matlab.html" },
    { name: "Microsoft Office 365", category: "Professional Tools", url: "https://www.microsoft.com/microsoft-365" },
    { name: "Adobe Photoshop", category: "Professional Tools", url: "https://www.adobe.com/products/photoshop.html" },
  ],
  projects: [
    {
      title: "VHS-22 Network Intrusion Detection EDA",
      description:
        "Exploratory cybersecurity analysis focused on network intrusion patterns, suspicious traffic behavior, and practical signals for detection workflows.",
      tags: ["Cybersecurity", "EDA", "Python", "Network Traffic"],
      impact: "Built analytical intuition around intrusion indicators and security-focused data storytelling.",
    },
    {
      title: "Fraud Detection Model - FICO Data Analytics Challenge",
      description:
        "Developed a machine learning fraud detection model with feature engineering, model evaluation, and explainability work for a national analytics competition.",
      tags: ["Python", "Machine Learning", "Data Analytics", "Fraud Detection"],
      impact: "Placed top 4 nationally while translating financial data into practical risk insights.",
      links: [
        {
          label: "LinkedIn recap",
          url: "https://www.linkedin.com/posts/andrew-jackson-059134297_grateful-to-share-that-on-thursday-night-activity-7321968972147417088-V4Ph?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe-ikUBRXZrjNv2Tg4UMZLuAudmasIfx-w",
        },
      ],
    },
    {
      title: "Sierra AI Assistant",
      description:
        "Personal AI assistant inspired by JARVIS, built with Python speech recognition, fast response handling, and a GUI for user interaction.",
      tags: ["Python", "AI", "Speech Recognition", "GUI"],
      impact: "Explored how voice interfaces can make everyday automation feel more natural.",
    },
    {
      title: "Sober+Health Track App",
      description:
        "Lifestyle application concept for tracking sobriety milestones, nutrition, fitness, journaling, and progress dashboards in one focused experience.",
      tags: ["React", "Recharts", "Wellness", "Product Design"],
      impact: "Designed around behavior change, clear progress feedback, and practical personal accountability.",
    },
    {
      title: "NASA Engineering Design Research",
      description:
        "Supported aerospace and materials research through CAD modeling, prototype fabrication, tensile testing, and technical documentation.",
      tags: ["NASA", "CAD", "Testing", "Engineering Design"],
      impact: "Connected mechanical design work with research communication and lab-based validation.",
    },
  ],
  experience: [
    {
      org: "FICO",
      role: "Analytic Science Intern",
      period: "2026",
      points: [
        "Applying data analytics and modeling concepts to fraud, risk, and decision intelligence problems.",
        "Working across Python-based analysis, model evaluation, and clear communication of technical findings.",
        "Building on national FICO Analytics Challenge experience in fraud detection and explainable modeling.",
      ],
    },
    {
      org: "Northrop Grumman",
      role: "Part-Time Software Developer",
      period: "May 2025 - Present",
      points: [
        "Developed Java and Python software supporting secure, mission-focused system monitoring workflows.",
        "Used Red Hat Enterprise Linux to deploy, test, and manage software in controlled technical environments.",
        "Conducted functional validation and documented workflows, deployment procedures, and system health checks.",
      ],
    },
    {
      org: "NASA - Marshall Space Flight Center",
      role: "Technician Intern",
      period: "September 2024 - Present",
      points: [
        "Designed and optimized mechanical components for aerospace applications using SolidWorks, NX CAD, and Creo.",
        "Supported design, analysis, prototype fabrication, assembly, and testing in lab environments.",
        "Documented findings and presented technical reports to engineers and project leads.",
      ],
    },
    {
      org: "FICO Analytics Challenge",
      role: "Analytics Scientist I",
      period: "January 2025 - May 2025",
      points: [
        "Analyzed financial datasets to develop predictive models for credit and fraud risk assessment.",
        "Used Pandas, NumPy, Scikit-learn, Matplotlib, and Seaborn for processing, modeling, and visualization.",
        "Evaluated credit scoring factors including payment history, debt-to-income ratio, and utilization.",
      ],
    },
    {
      org: "NASA - Tuskegee University",
      role: "MUREP Program Intern",
      period: "May 2024 - July 2024",
      points: [
        "Contributed to 3D concrete printing research in partnership with NASA MUREP.",
        "Performed tensile tests with an Instron machine and analyzed stress and strain behavior.",
        "Presented project results to NASA MUREP officers after research, testing, and documentation work.",
      ],
    },
  ],
  awards: [
    {
      title: "Jacobs Frontier Research Scholar",
      description: "Selected as a NASA MSFC scholar supporting research innovation and STEM advancement.",
      year: "2024",
    },
    {
      title: "NASA Retiree Scholarship",
      description: "Recognized for academic excellence and future contribution potential in aerospace and technology.",
      year: "2024",
    },
    {
      title: "FICO Analytics Challenge - National 4th Place",
      description: "Placed top 4 nationwide for advanced credit and fraud prediction modeling.",
      year: "2025",
    },
    {
      title: "BEA Ambassador President Leadership Award",
      description: "Awarded for student leadership, service impact, and student-body advocacy.",
      year: "2025",
    },
    {
      title: "NSC Space Club Scholarship",
      description: "Awarded for academic contribution, aerospace leadership, and dedication to STEM advancement.",
      year: "2024",
    },
  ],
  featuredIn: [
    {
      title: "Leaders Magazine - Summer Edition",
      publication: "leaders.lounge",
      description:
        "A leadership-focused publication featuring emerging professionals, students, and community leaders making a positive impact.",
      year: "2025",
      url: "https://issuu.com/chatwithmakingmoveswithpam/docs/leaders_magazine_summer_edition",
    },
    {
      title: "Andrew Jackson, Recipient of Coveted FICO Internship, Shares His Story",
      publication: "Drake State Community & Technical College",
      description:
        "A feature on my academic journey, FICO Analytics Challenge work, competitive FICO internship selection, and interests in cybersecurity, AI, and data analytics.",
      year: "2026",
      url: "https://drakestate.edu/andrew-jackson-recipient-of-coveted-fico-internship-shares-his-story/",
    },
  ],
};

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: "easeOut" } },
});

const navItems = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#skills", "Skills"],
  ["#awards", "Awards"],
  ["#contact", "Contact"],
];

const skillGroups = data.skills.reduce((groups, skill) => {
  groups[skill.category] = [...(groups[skill.category] || []), skill];
  return groups;
}, {});

const cx = (...classes) => classes.filter(Boolean).join(" ");

function ButtonLink({ href, children, variant = "secondary", className = "", ...props }) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
        variant === "primary"
          ? "bg-cyan-300 text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.28)] hover:-translate-y-0.5 hover:bg-cyan-200"
          : "border border-white/12 bg-white/[0.04] text-slate-100 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/[0.08]",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function Chip({ children, href }) {
  const className =
    "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} title={`Learn about ${children}`}>
        {children}
        <ExternalLink className="h-3 w-3 opacity-70" />
      </a>
    );
  }

  return <span className={className}>{children}</span>;
}

function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={cx("section-shell", className)}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={fade(0)}>
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <div className="section-heading">
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
      </motion.div>
      <div className="mt-9">{children}</div>
    </section>
  );
}

function NavLink({ href, label }) {
  return (
    <a href={href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white">
      {label}
    </a>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fade(index * 0.05)}
      className="group flex h-full flex-col rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
        <Code2 className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
      <p className="mt-4 border-l border-cyan-300/40 pl-3 text-sm leading-6 text-slate-200">{project.impact}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
      {project.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 transition hover:text-white"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

function PortfolioSite() {
  const [status, setStatus] = useState("idle");
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzvygrr";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const name = form.name?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const message = form.message?.value?.trim() || "";
    const botTrap = form.company?.value || "";

    if (botTrap) return;

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error("Message failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#home" className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">AJ</span>
            <span className="hidden sm:inline">{data.name}</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(([href, label]) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
              <Download className="h-4 w-4" />
              Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="primary" className="px-3">
              Contact
            </ButtonLink>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="flex-none rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero-surface relative overflow-hidden">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
            <div>
              <motion.p
                initial="hidden"
                animate="show"
                variants={fade(0)}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Open to technical internships and early-career roles
              </motion.p>

              <motion.h1 initial="hidden" animate="show" variants={fade(0.08)} className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] text-white md:text-7xl">
                Building secure, intelligent systems with real-world impact.
              </motion.h1>

              <motion.p initial="hidden" animate="show" variants={fade(0.16)} className="mt-6 text-lg font-medium text-cyan-100 md:text-xl">
                {data.name} - {data.role}
              </motion.p>

              <motion.p initial="hidden" animate="show" variants={fade(0.24)} className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {data.blurb}
              </motion.p>

              <motion.div initial="hidden" animate="show" variants={fade(0.32)} className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#projects" variant="primary">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#contact">
                  Contact Andrew
                  <Mail className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={data.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Resume
                  <Download className="h-4 w-4" />
                </ButtonLink>
              </motion.div>

              <motion.div initial="hidden" animate="show" variants={fade(0.4)} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <a href="https://www.google.com/maps/place/Huntsville,+AL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-200">
                  <MapPin className="h-4 w-4" />
                  {data.location}
                </a>
                {data.socials.map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-200">
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.div initial="hidden" animate="show" variants={fade(0.18)} className="relative">
              <div className="profile-panel">
                <div className="profile-orbit" />
                <img src={headshot} alt="Andrew Jackson" className="relative z-10 aspect-[4/5] w-full rounded-lg object-cover" />
                <div className="relative z-10 mt-5 grid grid-cols-3 gap-3">
                  {data.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-2xl font-black text-white">{metric.value}</p>
                      <p className="mt-1 text-xs leading-4 text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="About"
          title="Technical range with a builder's mindset."
          intro="I am drawn to work where software, data, security, and engineering design meet. My background spans hands-on research, applied analytics, secure systems, and personal products."
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0)} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <p className="text-lg leading-8 text-slate-200">
                I'm Andrew, a technology student and early-career builder with interests in AI, cybersecurity, software engineering, and data analytics. I like turning complex problems into tools, experiments, and stories that people can actually use.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                My experience includes FICO analytics work, Northrop Grumman software development, NASA engineering design, cybersecurity analysis, and personal web projects. Outside of school and work, I enjoy photography, travel, and taking on new challenges that stretch the way I think.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0.08)} className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                <ShieldCheck className="h-5 w-5 text-cyan-200" />
                Quick Signal
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-200">
                {data.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Applied work across analytics, secure software, and engineering."
          intro="A timeline of roles and programs that shaped how I approach technical problems: test carefully, document clearly, and build with purpose."
        >
          <div className="relative grid gap-5">
            {data.experience.map((job, index) => (
              <motion.article
                key={`${job.org}-${job.role}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                variants={fade(index * 0.05)}
                className="experience-card"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{job.org}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{job.role}</h3>
                  </div>
                  <p className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-slate-300">{job.period}</p>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Briefcase className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work that shows range and direction."
          intro="A focused set of projects across cybersecurity, fraud analytics, AI assistants, product design, and engineering research."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="A practical technical toolkit."
          intro="Organized by how recruiters and collaborators are likely to scan it: software, analytics, cyber/cloud, engineering design, and professional tools."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skillGroups).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fade(index * 0.04)}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-lg font-semibold text-white">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Chip key={skill.name} href={skill.url}>
                      {skill.name}
                    </Chip>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="awards"
          eyebrow="Recognition"
          title="Awards, honors, and public features."
          intro="Signals of leadership, technical growth, research contribution, and community involvement."
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-4">
              {data.awards.map((award, index) => (
                <motion.article
                  key={award.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fade(index * 0.04)}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-violet-300/10 text-violet-200">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{award.year}</p>
                      <h3 className="mt-1 font-semibold text-white">{award.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{award.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="grid content-start gap-4">
              {data.featuredIn.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fade(index * 0.06)}
                  className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    <Newspaper className="h-4 w-4" />
                    {feature.publication} - {feature.year}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
                  <a href={feature.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 transition hover:text-white">
                    Read feature
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's connect on the next technical challenge."
          intro="Reach out for internships, analytics work, software projects, cybersecurity conversations, or engineering collaborations."
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade(0)} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white">Direct lines</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Email is best for opportunities and project conversations. LinkedIn works well for quick professional context.
              </p>
              <div className="mt-6 grid gap-3">
                {data.socials.map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white">
                    <span className="inline-flex items-center gap-3">
                      <social.icon className="h-4 w-4 text-cyan-200" />
                      {social.label}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {status === "success" ? (
              <div className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white">Thanks. Your message was sent.</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">I'll get back to you soon.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40">
                  Send another
                </button>
              </div>
            ) : (
              <motion.form
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fade(0.05)}
                onSubmit={handleSubmit}
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8"
              >
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Name
                  <input name="name" required className="form-field" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Email
                  <input name="email" type="email" required className="form-field" placeholder="you@example.com" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Message
                  <textarea name="message" rows={5} required className="form-field resize-none" placeholder="Tell me what you're building or hiring for." />
                </label>
                <button type="submit" disabled={status === "loading"} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                {status === "error" && <p className="text-sm font-medium text-red-300">Something went wrong. Please try again or email me directly.</p>}
              </motion.form>
            )}
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>Copyright {new Date().getFullYear()} {data.name}. Built with curiosity.</p>
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-cyan-200">
            Back to top
            <ChevronUp className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default PortfolioSite;
