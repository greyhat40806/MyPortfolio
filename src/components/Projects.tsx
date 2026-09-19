"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Gamepad2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  status: string;
  engine: string;
  programming: string;
  shortDescription: string;
  fullPremise?: string;
  coverImage?: string;
  features?: string[];
  demoUrl?: string;
}

interface Props {
  projects: Project[];
}

export function Projects({ projects }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-white">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-700 transition"
            >
              {/* Project Banner */}
              <div className="relative isolate h-48 overflow-hidden bg-cyan-950">
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt=""
                    fill
                    className="object-cover opacity-35"
                  />
                )}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-cyan-300/30" />
                <div className="absolute -right-5 -top-9 h-32 w-32 rounded-full border border-cyan-300/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-cyan-950/45 to-cyan-400/20" />
                <div className="relative flex h-full flex-col justify-between p-5">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                    <span className="flex items-center gap-2">
                      <Gamepad2 className="h-4 w-4 text-cyan-300" />
                      Game Design / Systems
                    </span>
                    <span className="border border-cyan-300/40 px-2 py-1 text-cyan-100">
                      0{project.id}
                    </span>
                  </div>
                  <div className="max-w-[85%]">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {project.status}
                    </p>
                    <h3 className="text-2xl font-black leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.status === "Currently In Development"
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">
                    {project.engine}
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">
                    {project.programming}
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Expand Button */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition"
                >
                  {expandedId === project.id ? (
                    <>
                      Show less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read more <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Expanded Details */}
                {expandedId === project.id && (
                  <div className="pt-3 border-t border-slate-800 space-y-3 animate-in fade-in duration-200">
                    {project.fullPremise && (
                      <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                        {project.fullPremise}
                      </div>
                    )}

                    {project.features && project.features.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Features</h4>
                        <ul className="space-y-1.5">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                              <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
