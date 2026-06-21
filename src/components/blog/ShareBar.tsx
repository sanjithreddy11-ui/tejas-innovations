"use client";

import { useState } from "react";

export default function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — fail silently
    }
  };

  const shareLinks = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      icon: (
        <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-6.9L4.3 22H1.2l8.1-9.3L0.7 2h7.3l5 6.4L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
      ),
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      icon: (
        <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.45 21h-3.37v-6.06c0-1.45-.03-3.31-2.02-3.31-2.03 0-2.34 1.58-2.34 3.21V21H9.35V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.6 2.26 4.6 5.19V21Z" />
      ),
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      icon: (
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.84.5 3.56 1.36 5.03L2 22l5.21-1.46a9.85 9.85 0 0 0 4.83 1.27h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.78 14.1c-.24.68-1.4 1.3-1.93 1.34-.5.05-1.13.07-1.83-.12-.42-.12-.96-.3-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.18-.2.76-.89.96-1.2.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.49.22.56.34.07.13.07.74-.17 1.42Z" />
      ),
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        title={copied ? "Link copied" : "Copy link"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2A332D] bg-[#161D19] text-[#8B978E] transition hover:border-[#a2fa8e] hover:text-[#a2fa8e]"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 3a3.5 3.5 0 0 0-3.47 4.02l-5.5 3.18a3.5 3.5 0 1 0 0 3.6l5.5 3.18a3.5 3.5 0 1 0 .9-1.56l-5.5-3.18a3.52 3.52 0 0 0 0-1.48l5.5-3.18A3.5 3.5 0 1 0 16.5 3Z" />
          </svg>
        )}
      </button>

      {shareLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2A332D] bg-[#161D19] text-[#8B978E] transition hover:border-[#a2fa8e] hover:text-[#a2fa8e]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}