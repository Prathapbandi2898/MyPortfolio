import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, ExternalLink, BookOpen, Code2 } from "lucide-react";
import "./style.css";

// Replace these sample details with your own information.
const profile = {
  name: "Prathap Bandi",
  role: "Developer | Cybersecurity Enthusiast",
  intro:
    "I enjoy building useful applications, learning new technologies, and solving problems through code.",
  github: "https://github.com/prathapbandi2898",
  linkedin: "https://www.linkedin.com/in/prathap-bandi-23800b34a",
};

const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does.",
    repo: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does.",
    repo: "https://github.com/your-username/project-two",
  },
];

const blogs = [
  {
    title: "My First Blog",
    description: "A short note about the topic you wrote about.",
    url: "https://example.com",
  },
];

function App() {
  return (
    <main className="container">
      <header className="topbar">
        <a className="brand" href="#">Portfolio<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#links">Links</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">HELLO, I'M</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="intro">{profile.intro}</p>
        <div className="socials">
          <a className="button" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a className="button button-dark" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <Code2 size={19} />
          <h3>GitHub Repositories</h3>
        </div>
        <div className="items">
          {projects.map((project) => (
            <article className="item" key={project.title}>
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
              <a className="icon-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                <ExternalLink size={18} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="blogs" className="section">
        <div className="section-heading">
          <BookOpen size={19} />
          <h3>Blogs & Articles</h3>
        </div>
        <div className="items">
          {blogs.map((blog) => (
            <article className="item" key={blog.title}>
              <div>
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
              </div>
              <a className="icon-link" href={blog.url} target="_blank" rel="noreferrer" aria-label={`Read ${blog.title}`}>
                <ExternalLink size={18} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="links" className="section link-section">
        <h3>Find me online</h3>
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub account <ExternalLink size={14} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn profile <ExternalLink size={14} /></a>
      </section>

      <footer>© {new Date().getFullYear()} {profile.name}. Built with React.</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);