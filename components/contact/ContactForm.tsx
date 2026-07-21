"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Loader2, Send } from "lucide-react";

type FormData = {
  from_name: string;
  from_email: string;
  message: string;
};

const initialForm: FormData = {
  from_name: "",
  from_email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.message.trim()
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully 🚀");

      setForm(initialForm);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        h-full
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        sm:p-6
        lg:p-7
        backdrop-blur-xl
      "
    >
      <h3 className="text-2xl font-bold text-white">
        Send a Message
      </h3>

      <p className="mt-3 text-zinc-400 leading-7">
        Have an opportunity or an idea? Fill out the form below and I'll get
        back to you as soon as possible.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Name
          </label>

          <input
            id="name"
            name="from_name"
            type="text"
            value={form.from_name}
            onChange={handleChange}
            placeholder="Your name"
            disabled={loading}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400/40
              focus:ring-2
              focus:ring-cyan-400/10
              disabled:cursor-not-allowed
              disabled:opacity-60
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
            name="from_email"
            type="email"
            value={form.from_email}
            onChange={handleChange}
            placeholder="you@example.com"
            disabled={loading}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400/40
              focus:ring-2
              focus:ring-cyan-400/10
              disabled:cursor-not-allowed
              disabled:opacity-60
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
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            disabled={loading}
            placeholder="Tell me about your project, idea or opportunity..."
            className="
              min-h-[170px]
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400/40
              focus:ring-2
              focus:ring-cyan-400/10
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            group
            mt-2
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-cyan-400
            px-6
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_35px_rgba(103,232,249,0.35)]
            disabled:cursor-not-allowed
            disabled:opacity-70
            disabled:hover:scale-100
          "
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>

              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}