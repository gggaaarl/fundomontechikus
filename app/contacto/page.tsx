import { PageBanner } from "@/components/page-banner";
import { site } from "@/lib/site-content";

function phoneHref(number: string, whatsapp?: boolean) {
  const digits = number.replace(/\D/g, "");
  if (!digits) return null;
  return whatsapp ? `https://wa.me/${digits}` : `tel:+${digits.replace(/^\+/, "")}`;
}

export default function ContactoPage() {
  const listedPhones = site.contact.phones.filter((entry) => entry.number.replace(/\s/g, "").length > 0);
  const instagram = site.social.instagram.trim();

  return (
    <main>
      <PageBanner
        eyebrow="Contacto"
        title="Escríbenos"
        description="Consultas comerciales, distribución o información sobre Don Santino."
      />
      <section className="section-block bg-background">
        <div className="mx-auto max-w-xl space-y-6 px-6 font-sans text-ink/80">
          {listedPhones.map((entry) => {
            const href = phoneHref(entry.number, "whatsapp" in entry && entry.whatsapp);
            return (
              <p key={entry.label}>
                <span className="block text-[11px] tracking-[0.18em] text-olive/70 uppercase">{entry.label}</span>
                {href ? (
                  <a
                    href={href}
                    target={"whatsapp" in entry && entry.whatsapp ? "_blank" : undefined}
                    rel={"whatsapp" in entry && entry.whatsapp ? "noopener noreferrer" : undefined}
                    className="text-lg text-olive hover:text-gold"
                  >
                    {entry.number}
                  </a>
                ) : (
                  <span className="text-lg text-ink/90">{entry.number}</span>
                )}
              </p>
            );
          })}
          <p>
            <span className="block text-[11px] tracking-[0.18em] text-olive/70 uppercase">Email</span>
            <a href={`mailto:${site.contact.email}`} className="text-lg text-olive hover:text-gold">
              {site.contact.email}
            </a>
          </p>
          <p>
            <span className="block text-[11px] tracking-[0.18em] text-olive/70 uppercase">Dirección</span>
            <span className="text-lg text-ink/90">{site.contact.address}</span>
          </p>
          <p>
            <span className="block text-[11px] tracking-[0.18em] text-olive/70 uppercase">Redes</span>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-olive hover:text-gold"
            >
              Facebook
            </a>
            {instagram ? (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-olive hover:text-gold"
              >
                Instagram
              </a>
            ) : null}
          </p>
        </div>
      </section>
    </main>
  );
}
