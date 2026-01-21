"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 text-sm">
      {links.map((l) => {
        const isActive = pathname === l.href;

        return (
          <Link
            key={l.href}
            href={l.href}
            className={[
              "rounded-lg px-3 py-2 transition",
              "text-white/70 hover:text-white",
              "hover:bg-white/5",
              "hover:shadow-[0_0_18px_rgb(var(--accent)/0.22)]",
              isActive
                ? "text-white bg-white/10 shadow-[0_0_20px_rgb(var(--accent)/0.30)]"
                : "",
            ].join(" ")}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
