"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function HashRedirect({ hash }: { hash: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${hash}`);
    const id = hash.replace("#", "");
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    scroll();
    window.setTimeout(scroll, 100);
  }, [hash, router]);

  return null;
}
