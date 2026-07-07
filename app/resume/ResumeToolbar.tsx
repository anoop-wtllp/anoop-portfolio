"use client";

import Link from "next/link";
import { FaArrowLeft, FaDownload } from "react-icons/fa6";

export default function ResumeToolbar() {
  return (
    <div className="no-print sticky top-0 z-10 mb-8 flex items-center justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-muted backdrop-blur transition-colors hover:border-accent hover:text-foreground"
      >
        <FaArrowLeft className="text-xs" /> Back to site
      </Link>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-4 px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.04]"
      >
        <FaDownload className="text-xs" /> Download PDF
      </button>
    </div>
  );
}
