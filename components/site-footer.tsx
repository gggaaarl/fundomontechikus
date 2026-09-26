import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-content";

function whatsappUrl() {
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
}

export function SiteFooter() {
  const wa = whatsappUrl();
  const hasPhone = site.contact.phone.replace(/\s/g, "").length > 0;

  return (
    <footer className="mt-auto border-t border-line bg-olive text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-block rounded-sm bg-white p-2 shadow-sm">
              <Image
                src="/logo_nuevo.jpeg"
                alt={site.name}
                width={120}
                height={120}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-4 font-sans text-sm tracking-wide text-paper/80">{site.contact.address}</p>
          </div>

          <div className="space-y-3 text-center font-sans text-sm text-paper/85 md:text-left">
            {hasPhone ? (
              <>
                <p>
                  <span className="text-[11px] tracking-[0.18em] text-paper/60 uppercase">Contacto</span>
                  <br />
                  <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                    {site.contact.phone}
                  </a>
                </p>
                {wa ? (
                  <p>
                    <span className="text-[11px] tracking-[0.18em] text-paper/60 uppercase">WhatsApp</span>
                    <br />
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                      {site.contact.phone}
                    </a>
                  </p>
                ) : null}
              </>
            ) : (
              <p>
                <span className="text-[11px] tracking-[0.18em] text-paper/60 uppercase">Redes</span>
                <br />
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {site.contact.facebookLabel}
                </a>
              </p>
            )}
            <p>
              <span className="text-[11px] tracking-[0.18em] text-paper/60 uppercase">Email</span>
              <br />
              <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                {site.contact.email}
              </a>
            </p>
            <Link
              href="/contacto"
              className="inline-block text-[11px] tracking-[0.18em] text-gold uppercase hover:text-paper"
            >
              Formulario de contacto →
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-colors hover:text-gold"
            >
              <span className="text-[11px] tracking-[0.18em] uppercase text-paper/80 group-hover:text-gold">
                Síguenos en Facebook
              </span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <p className="border-t border-white/10 px-6 py-4 text-center text-[11px] tracking-[0.18em] text-paper/60 uppercase font-sans">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
