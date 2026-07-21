import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group inline-flex items-center gap-3 select-none transition-transform duration-500 hover:scale-[1.02]"
    >
      <div className="
        flex h-10 w-10 items-center justify-center
        rounded-2xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition-all duration-500
        group-hover:scale-110
        group-hover:-rotate-3
        group-hover:border-cyan-400/50
        group-hover:bg-cyan-400/10
        group-hover:shadow-[0_0_25px_rgba(103,232,249,.25)]
      ">
        <span className="
          bg-gradient-to-br
          from-cyan-200
          to-cyan-400
          bg-clip-text
          text-lg
          font-bold
          text-transparent
          transition-all
          duration-500
          group-hover:drop-shadow-[0_0_8px_rgba(103,232,249,.5)]
        ">
          VC
        </span>
      </div>

      <div className="leading-none">
        <p className="text-sm font-semibold tracking-wide text-white">
          Vaidik Choudhary
        </p>

        <p className="text-xs text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
          Full Stack Developer
        </p>
      </div>
    </Link>
  );
}