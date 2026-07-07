"use client";

import { useState } from "react";
import { LuMail, LuPhone, LuCopy, LuCheck, LuArrowUpRight } from "react-icons/lu";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { PROFILE } from "../data";

const phoneDigits = PROFILE.phone.replace(/\D/g, "");

/* ------------------------------------------------------------------ */
/*  Quick-contact cards                                                */
/* ------------------------------------------------------------------ */

export function ContactMethods() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  const methods = [
    {
      key: "email",
      Icon: LuMail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      copyable: true,
    },
    {
      key: "phone",
      Icon: LuPhone,
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:+${phoneDigits}`,
      copyable: true,
    },
    {
      key: "whatsapp",
      Icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${phoneDigits}`,
      copyable: false,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {methods.map(({ key, Icon, label, value, href, copyable }) => (
        <div
          key={key}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
          />
          <div className="flex items-center justify-between">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
              <Icon className="text-lg" />
            </span>
            {copyable ? (
              <button
                onClick={() => copy(value, key)}
                aria-label={`Copy ${label}`}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {copied === key ? (
                  <LuCheck className="text-accent-3" />
                ) : (
                  <LuCopy />
                )}
              </button>
            ) : (
              <LuArrowUpRight className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            )}
          </div>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mt-4"
          >
            <p className="text-[11px] uppercase tracking-wider text-muted">
              {label}
            </p>
            <p className="truncate text-sm font-medium text-foreground">
              {value}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Socials row                                                        */
/* ------------------------------------------------------------------ */

export function ContactSocials() {
  const socials = [
    { Icon: FaGithub, href: PROFILE.socials.github, label: "GitHub" },
    { Icon: FaLinkedinIn, href: PROFILE.socials.linkedin, label: "LinkedIn" },
    { Icon: LuMail, href: `mailto:${PROFILE.email}`, label: "Email" },
  ];
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-muted transition-colors hover:border-accent hover:text-foreground"
        >
          <Icon className="text-lg" />
        </a>
      ))}
    </div>
  );
}
