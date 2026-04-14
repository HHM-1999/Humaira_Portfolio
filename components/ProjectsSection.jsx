import Image from "next/image";
import Link from "next/link";
import React from "react";
import banglaDeshkal from "../app/assets/media/bangla_deshkal.png";
import barta from "../app/assets/media/barta.png";
import bdGuardian from "../app/assets/media/bdguardian.png";
import channel24 from "../app/assets/media/channel24.png";
import deshkal from "../app/assets/media/deshkal.png";
import thenews24 from "../app/assets/media/thenews24.png";

const projects = [
  {
    title: "The News 24.com",
    // desc: "A multiplayer Pong game with a modern twist, built using Next.js, TailwindCSS, and Django.",
    tags: ["React.js", "Bootstrap", "React Router", "React Context API", "React Hooks"],
    img: thenews24,
    sitelink: "https://www.thenews24.com/",
    // featured: true,
  },
  {
    title: "Barta 24.com",
    // desc: "Modern Todo app built with React, Redux, TypeScript.",
    tags: ["React.js", "Bootstrap", "React Router", "React Context API", "React Hooks"],
    img: barta,
    sitelink: "https://www.barta24.com/",
    // featured: true,
  },
  {
    title: "DeshkalNews.com",
    // desc: "Docker based project with NGINX and WordPress",
    tags: ["React.js", "Bootstrap", "React Router", "React Context API", "React Hooks"],
    img: deshkal,
  },
  {
    title: "Deshkal.com",
    // desc: "Internet Relay Chat server project",
    tags: ["React.js", "Bootstrap", "React Router", "React Context API", "React Hooks"],
    img: banglaDeshkal,
    sitelink: "https://deshkalnews.com/",
  },
  {
    title: "Channel24bd.tv",
    // desc: "Raycasting 3D game",
    tags: ["React.js", "Bootstrap", "React Router", "React Context API", "React Hooks", "DOM Manipulation"],
    img: channel24,
    sitelink: "https://www.channel24bd.tv/",
  },
  {
    title: "Bangladesh Guardian.com",
    // desc: "Shell implementation",
    tags: ["React.js", "Bootstrap", "React Router", "React Context API", "React Hooks"],
    img: bdGuardian,
    sitelink: "https://www.bangladeshguardian.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Selected Projects</h2>
      <p className="subtitle">
        Blending design and development to create fast, modern web experiences
      </p>
      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>

            {p.featured && (
              <div className="badge">Featured</div>
            )}

            <Image src={p.img} className="img-fluid" width={"100%"} height={"100%"} alt={p.title} title={p.title} />

            <div className="content">
              <h3>{p.title}</h3>
              {/* <p>{p.desc}</p> */}

              <div className="tags">
                {p.tags.map((t, k) => (
                  <span key={k}>{t}</span>
                ))}
              </div>

              {p.sitelink && (
                <Link href={p.sitelink} target="_blank" rel="noopener noreferrer">
                  <div className="code">View Site</div>
                </Link>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}