"use client";

import { useEffect, useState } from "react";

/**
 * Rotating typewriter effect that types a phrase, pauses, deletes,
 * then advances to the next.
 */
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? 45 : 95
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className="caret font-mono text-accent-2">{text}</span>
  );
}
