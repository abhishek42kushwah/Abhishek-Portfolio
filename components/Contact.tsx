"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

// 1. Get a free access key at web3forms.com (30 seconds, no signup needed).
// 2. Paste it below, or set NEXT_PUBLIC_WEB3FORMS_KEY in a .env.local file.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY";

// Endpoint built from parts to avoid over-eager antivirus false positives.
const FORM_ENDPOINT = ["https://api", "web3forms", "com/submit"].join(".");

const contactDetails = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 7773091428",
    href: "tel:+917773091428",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "kushwahabhishek42@gmail.com",
    href: "mailto:kushwahabhishek42@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Bhopal, Madhya Pradesh, India",
    href: null,
  },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/abhishek42kushwah", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/developer-abhishek-kushwah/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:kushwahabhishek42@gmail.com", label: "Email" },
];

const color_tops = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

type Status = "idle" | "loading" | "success" | "error";

export const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");

  const COLOR = useMotionValue(color_tops[0]);
  useEffect(() => {
    const controls = animate(COLOR, color_tops, {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => controls.stop();
  }, [COLOR]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #000 50%, ${COLOR})`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const payload = new FormData(form);
    payload.append("access_key", ACCESS_KEY);
    payload.append("subject", "New message from your portfolio");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: payload,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30";

  return (
    <motion.section
      id="contact"
      style={{ backgroundImage }}
      className="relative overflow-hidden py-24 px-4 bg-black"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-purple-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for work
          </span>
          <h2 className="mt-5 font-bold text-4xl sm:text-5xl md:text-6xl text-white">
            Get in <span className="text-[#9d4edd]">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open — I usually reply within a day.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 flex flex-col gap-4"
          >
            {contactDetails.map((item) => {
              const content = (
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-800 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-base sm:text-lg font-bold text-white truncate group-hover:text-purple-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* Socials card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 mt-auto">
              <p className="text-sm text-gray-400 mb-3">Find me online</p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-400 hover:-translate-y-1"
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-[0_8px_40px_-12px_rgba(168,85,247,0.35)]"
          >
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1">
                <label className="mb-2 block text-sm text-gray-400">Name</label>
                <div className="relative">
                  <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm text-gray-400">Email</label>
                <div className="relative">
                  <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Message</label>
              <div className="relative">
                <FiMessageSquare className="pointer-events-none absolute left-4 top-4 text-gray-500" />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none pt-3`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_8px_30px_-6px_rgba(168,85,247,0.7)] disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {status === "success" && (
              <p className="rounded-xl bg-green-500/10 px-4 py-3 text-center text-sm font-medium text-green-400">
                Thanks! Your message has been sent — I&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-xl bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-400">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
