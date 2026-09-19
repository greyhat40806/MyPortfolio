"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import profilePhoto from "@/image/myPicture.jpg";
import {
  ArrowLeft,
  Download,
  Mail,
  MapPin,
  Globe,
  GraduationCap,
  Wrench,
  Gamepad2,
  Trophy,
  User,
  Loader2,
} from "lucide-react";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current || downloading) return;
    setDownloading(true);

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);

      // A4 size: 210mm x 297mm
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      // Fit to A4 page
      pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, Math.min(imgHeight, pageHeight));

      pdf.save("Ryan_Casalme_Resume.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4">
      {/* Action bar */}
      <div className="max-w-[210mm] mx-auto mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <button
          onClick={handleDownloadPDF}
          disabled={downloading}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold transition disabled:opacity-60"
        >
          {downloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating PDF...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Download PDF (A4)
            </>
          )}
        </button>
      </div>

      {/* ============ RESUME SHEET (A4: 210mm x 297mm) ============ */}
      <div
        ref={resumeRef}
        className="resume-sheet mx-auto bg-white text-neutral-900 overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-[240px_1fr] min-h-[297mm]">
          {/* ===== LEFT SIDEBAR ===== */}
          <aside className="bg-slate-900 text-white p-6 space-y-6">
            {/* Photo + Name block */}
            <div className="space-y-3">
              {/* Circular Profile Photo */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-500 bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profilePhoto.src}
                  alt="Ryan Casalme formal photo"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center space-y-0.5">
                <h1 className="text-xl font-black leading-tight">RYAN CASALME</h1>
                <p className="text-cyan-400 text-xs font-semibold">
                  Aspiring Game Developer and Artist 
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-700 pb-1">
                Contact
              </h2>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-start gap-1.5">
                  <Mail className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="break-all">ryancasalme1@gmail.com</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Globe className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="break-all">github.com/greyhat40806</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Philippines</span>
                </div>
              </div>
            </div>

            {/* Game Engines */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-700 pb-1">
                Game Engines
              </h2>
              <ul className="space-y-1 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></span>
                  Godot Engine 4 (C# / GDScript)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></span>
                  Roblox Studio (Luau)
                </li>
              </ul>
            </div>

            {/* Programming */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-700 pb-1">
                Programming Languages
              </h2>
              <ul className="space-y-1 text-[11px]">
                {["C# / .NET", "GDScript", "Luau", "Python", "Java", "JavaScript / HTML / CSS"].map(
                  (s) => (
                    <li key={s} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></span>
                      {s}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Design Skills */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-700 pb-1">
                Design Skills
              </h2>
              <ul className="space-y-1 text-[11px]">
                {[
                  "Gameplay Mechanics",
                  "Game Systems & Loops",
                  "GDD / Technical Docs",
                  "Quest & Narrative Design",
                  "Puzzle Design",
                  "Rapid Prototyping",
                  "UI / Info Design",
                ].map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-700 pb-1">
                Education
              </h2>

              <div className="flex items-start gap-1.5 text-[11px]">
                <GraduationCap className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">STI College Global City</div>
                  <div className="text-slate-300 text-[10px]">Senior High School</div>
                  <div className="text-slate-400 text-[10px] leading-snug">
                    Information Technology in Mobile App Development and Web Development
                  </div>
                  <div className="text-cyan-400 text-[10px] font-semibold">2023 – 2025</div>
                </div>
              </div>

              <div className="flex items-start gap-1.5 text-[11px]">
                <GraduationCap className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Divine Word College of Calapan</div>
                  <div className="text-slate-300 text-[10px]">Junior High School</div>
                  <div className="text-cyan-400 text-[10px] font-semibold">2017 – 2020</div>
                </div>
              </div>
            </div>
          </aside>

          {/* ===== RIGHT MAIN CONTENT ===== */}
          <main className="p-7 space-y-5">
            {/* Profile */}
            <section className="space-y-2">
              <h2 className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-slate-900 border-b-2 border-cyan-500 pb-1">
                <User className="w-3.5 h-3.5 text-cyan-600" />
                Profile
              </h2>
              <p className="text-xs leading-relaxed text-neutral-700">
                I'm an IT student and Game Developer with hands-on experience building game
                prototypes and systems in Godot Engine 4 and Roblox Studio. I design
                gameplay mechanics, write clear technical documentation, and turn paper
                concepts into playable prototypes. I am currently seeking an entry-level Game Designer
                role where I can apply my development background to gameplay systems and
                mechanics design.
              </p>
            </section>

            {/* Projects */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-slate-900 border-b-2 border-cyan-500 pb-1">
                <Gamepad2 className="w-3.5 h-3.5 text-cyan-600" />
                Game Projects
              </h2>

              {/* Huling Linya */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Huling Linya — Disaster Response Simulation / Narrative Game
                  </h3>
                  <span className="text-[10px] font-semibold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded">
                    In Development
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500 font-medium">
                  Godot Engine 4 • C# / .NET • Solo Designer &amp; Developer
                </div>
                <ul className="text-xs text-neutral-700 space-y-0.5 list-disc list-inside">
                  <li>
                    Designed the core emergency-dispatch loop: answer calls, triage, send
                    rescue teams, deal with consequences.
                  </li>
                  <li>
                    Implemented call queues, dispatch state machines, and building
                    deterioration systems in C#.
                  </li>
                  <li>
                    Wrote the full Game Design Document and a branching narrative with 4
                    endings based on real DRRM procedures.
                  </li>
                </ul>
              </div>

              {/* CyberXCore */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    CyberXCore — 2D Educational Cybersecurity Platformer
                  </h3>
                  <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-1.5 py-0.5 rounded">
                    Prototype
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500 font-medium">
                  Godot Engine • GDScript
                </div>
                <ul className="text-xs text-neutral-700 space-y-0.5 list-disc list-inside">
                  <li>
                    Built a quiz-to-combat mechanic: correct answers power player attacks,
                    wrong answers trigger enemy counter-attacks.
                  </li>
                  <li>Designed enemy encounters, level flow, and gameplay HUD feedback.</li>
                </ul>
              </div>

              {/* Rune Door Puzzle */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Rune Door Puzzle — Mathematical Puzzle Prototype
                  </h3>
                  <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-1.5 py-0.5 rounded">
                    Prototype
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500 font-medium">
                  Godot Engine • GDScript
                </div>
                <ul className="text-xs text-neutral-700 space-y-0.5 list-disc list-inside">
                  <li>
                    Designed rotating rune dials with real-time equation previews and a
                    three-life failure system.
                  </li>
                  <li>
                    Focused on tactile feedback, interaction feel, and clear success/fail
                    states.
                  </li>
                </ul>
              </div>

              {/* Lambak ng Diwata */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Lambak ng Diwata — Filipino Folklore Environment &amp; Quest NPCs
                  </h3>
                  <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-1.5 py-0.5 rounded">
                    Prototype
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500 font-medium">
                  Roblox Studio • Luau
                </div>
                <ul className="text-xs text-neutral-700 space-y-0.5 list-disc list-inside">
                  <li>
                    Built a tropical valley environment with natural wayfinding and mood
                    lighting.
                  </li>
                  <li>
                    Scripted the &ldquo;Lola Inday&rdquo; branching dialogue and multi-stage
                    quest system in Luau.
                  </li>
                </ul>
              </div>
            </section>

            {/* Game Jam */}
            <section className="space-y-2">
              <h2 className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-slate-900 border-b-2 border-cyan-500 pb-1">
                <Trophy className="w-3.5 h-3.5 text-cyan-600" />
                Game Jam
              </h2>
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    YGG Hackathon / Game Jam
                  </h3>
                  <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-1.5 py-0.5 rounded">
                    48 Hours
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500 font-medium">
                  Role: Game Designer &amp; Systems Prototyper
                </div>
                <ul className="text-xs text-neutral-700 space-y-0.5 list-disc list-inside">
                  <li>
                    Turned the jam theme into scoped, playable mechanics in the first hours
                    of the sprint.
                  </li>
                  <li>
                    Kept the team aligned with flowcharts and lightweight design docs; ran
                    playtests to tune difficulty before submission.
                  </li>
                </ul>
              </div>
            </section>

            {/* Tools */}
            <section className="space-y-2">
              <h2 className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-slate-900 border-b-2 border-cyan-500 pb-1">
                <Wrench className="w-3.5 h-3.5 text-cyan-600" />
                Tools &amp; Workflow
              </h2>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Git &amp; GitHub, Markdown documentation, flowchart-based design specs,
                iterative playtest cycles.
              </p>
            </section>
          </main>
        </div>
      </div>

      <p className="max-w-[210mm] mx-auto mt-4 text-center text-xs text-slate-500">
        Click <strong>&ldquo;Download PDF (A4)&rdquo;</strong> above — your resume will be
        saved automatically as <strong>Ryan_Casalme_Resume.pdf</strong>.
      </p>
    </div>
  );
}
