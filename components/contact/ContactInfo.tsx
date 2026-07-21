"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { contactItems } from "./contact.data";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-bold text-white">
        Get In Touch
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        Whether you have an opportunity, a project idea, or simply want to
        connect, I'm always happy to have a conversation.
      </p>

      <div className="mt-10 space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:shadow-[0_0_35px_rgba(103,232,249,0.08)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Icon size={20} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    {item.title}
                  </p>

                  <p className="font-medium text-white transition-colors group-hover:text-cyan-300">
                    {item.value}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300" />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}