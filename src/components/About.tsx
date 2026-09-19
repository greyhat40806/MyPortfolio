"use client";

import React from "react";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">About Me</h2>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            I&apos;m an IT student and Game Developer with hands-on experience 
            developing game prototypes and systems using Godot Engine and Roblox Studio.
          </p>

          <p>
            I enjoy designing gameplay mechanics, writing technical documentation, 
            and turning paper concepts into playable prototypes. My current project 
            is <strong className="text-white">Huling Linya</strong>, a disaster response 
            simulation set during Typhoon Ramon in the Philippines, built in Godot 4 with C#.
          </p>

          <p>
            I&apos;m looking for entry-level Game Designer roles where I can apply my 
            development background to gameplay systems, mechanics design, and technical 
            prototyping.
          </p>
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-semibold text-white mb-3">What I Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              "Gameplay Mechanics Design",
              "Game Systems & Loops",
              "Quest & Narrative Design",
              "Technical Documentation (GDD)",
              "Rapid Prototyping",
              "UI & Game Information Design",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
