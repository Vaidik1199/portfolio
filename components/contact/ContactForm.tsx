"use client";

import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        rounded-2xl
        sm:rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        sm:p-6
        lg:p-8
        backdrop-blur-xl
      "
    >
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        Send a Message
      </h3>

      <p className="mt-3 text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-8">
        Have an opportunity or an idea? Fill out the form below and I'll get
        back to you as soon as possible.
      </p>

      <div className="mt-8 space-y-5 sm:space-y-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-3.5
              sm:px-5
              sm:py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400/40
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-3.5
              sm:px-5
              sm:py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400/40
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            placeholder="Tell me / Ask me everything..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-3.5
              sm:px-5
              sm:py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400/40
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        <button
          type="submit"
          className="
            group
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-cyan-400
            px-6
            py-3.5
            sm:py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_35px_rgba(103,232,249,0.35)]
          "
        >
          <span>Send Message</span>

          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.form>
  );
}