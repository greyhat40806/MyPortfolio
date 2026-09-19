"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-900/50">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        </div>

        <p className="text-slate-400">
          Interested in working together? Feel free to reach out.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:ryancasalme1@gmail.com"
            className="block text-cyan-400 hover:text-cyan-300 transition"
          >
            ryancasalme1@gmail.com
          </a>

          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/greyhat40806"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-6 border-t border-slate-800">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm text-slate-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-slate-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 resize-none"
              placeholder="Your message..."
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="w-4 h-4" />
              {errorMessage}
            </div>
          )}

          {status === "success" && (
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
