"use client";

import React from "react";

interface Skill {
  id: number;
  category: string;
  name: string;
  level: string;
}

interface Props {
  skills: Skill[];
}

export function Skills({ skills }: Props) {
  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-white">Skills</h2>

        <div className="space-y-6">
          {Object.entries(grouped).map(([category, categorySkills]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1.5 text-sm rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-sm text-slate-500 italic">
          Note: Godot Engine 4 (C# & GDScript) and Roblox Studio (Luau) only. No Unity experience.
        </div>
      </div>
    </section>
  );
}
