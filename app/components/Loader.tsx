"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const unlock = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2350);
    const remove = setTimeout(() => setGone(true), 3250);
    return () => {
      clearTimeout(unlock);
      clearTimeout(remove);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div className="loader" aria-hidden>
      <span className="loader__word">ANOOP</span>
    </div>
  );
}
