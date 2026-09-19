"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { initialProjects, initialSkills } from "@/db/seed-data";

const fallbackProjects = initialProjects.map((project, index) => ({
  ...project,
  id: index + 1,
}));

const fallbackSkills = initialSkills.map((skill, index) => ({
  ...skill,
  id: index + 1,
}));

export function PortfolioHome() {
  const [projects, setProjects] = useState<any[]>(fallbackProjects);
  const [skills, setSkills] = useState<any[]>(fallbackSkills);

  useEffect(() => {
    // Fetch projects
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProjects(data);
      })
      .catch(() => {});

    // Fetch skills
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setSkills(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
