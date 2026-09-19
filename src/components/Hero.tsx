"use client";

import React from "react";
import Link from "next/link";
import { Download, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Hi, I&apos;m Ryan Casalme
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400">
            Junior Game Developer
          </p>
        </div>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          I design gameplay systems, mechanics, and interactive experiences. 
          Currently building a disaster response simulation in Godot Engine 4 with C#.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition"
          >
            View My Work
          </a>
          <Link
            href="/resume"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition"
          >
            <Download className="w-4 h-4" />
            Resume
          </Link>
        </div>

        <div className="pt-12">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition"
          >
            Learn more about me
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
