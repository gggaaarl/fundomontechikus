import Image from "next/image";
import { site } from "@/lib/site-content";

function phoneHref(number: string, whatsapp?: boolean) {
  const digits = number.replace(/\D/g, "");
  if (!digits) return null;
  return whatsapp ? `https://wa.me/${digits}` : `tel:+${digits.replace(/^\+/, "")}`;
}

export function SiteFooter() {
  const listedPhones = site.contact.phones.filter((entry) => entry.number.replace(/\s/g, "").length > 0);
  const instagram = site.social.instagram.trim();

  return (
    <footer className="mt-auto border-t border-line bg-olive text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-block rounded-sm bg-white p-3 shadow-sm">
              <Image
                src="/logo_nuevo.jpeg"
                alt={site.name}
                width={200}
                height={200}
                className="h-20 w-auto object-contain sm:h-24 md:h-28"
              />
            </div>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed tracking-wide text-paper/80">
              {site.contact.address}
            </p>
          </div>

          <div className="space-y-3 text-center font-sans text-sm text-paper/85 md:text-left">
            {listedPhones.map((entry) => {
              const href = phoneHref(entry.number, "whatsapp" in entry && entry.whatsapp);
              return (
                <p key={entry.label}>
                  <span className="text-[11px] tracking-[0.18em] text-paper/60 uppercase">{entry.label}</span>
                  <br />
                  {href ? (
                    <a
                      href={href}
                      target={"whatsapp" in entry && entry.whatsapp ? "_blank" : undefined}
                      rel={"whatsapp" in entry && entry.whatsapp ? "noopener noreferrer" : undefined}
                      className="hover:text-gold"
                    >
                      {entry.number}
                    </a>
                  ) : (
                    entry.number
                  )}
                </p>
              );
            })}
            <p>
              <span className="text-[11px] tracking-[0.18em] text-paper/60 uppercase">Email</span>
              <br />
              <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                {site.contact.email}
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-colors hover:text-gold"
            >
              <span className="text-[11px] tracking-[0.18em] uppercase text-paper/80 group-hover:text-gold">
                Facebook
              </span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {instagram ? (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-gold"
              >
                <span className="text-[11px] tracking-[0.18em] uppercase text-paper/80 group-hover:text-gold">
                  Instagram
                </span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <p className="border-t border-white/10 px-6 py-4 text-center text-[11px] tracking-[0.18em] text-paper/60 uppercase font-sans">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
