import { ContactForm } from "@/components/contact-form";
import { PageBanner } from "@/components/page-banner";
import { site } from "@/lib/site-content";

export default function ContactoPage() {
  const waDigits = site.contact.whatsapp.replace(/\D/g, "");
  const whatsappHref = waDigits ? `https://wa.me/${waDigits}` : null;
  const hasPhone = site.contact.phone.replace(/\s/g, "").length > 0;

  return (
    <main>
      <PageBanner
        eyebrow="Contacto"
        title="Escríbenos"
        description="Consultas comerciales, distribución o información sobre Don Santino."
      />
      <section className="section-block bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6 font-sans text-ink/80">
            {hasPhone ? (
              <p>
                <span className="block text-[11px] tracking-[0.18em] text-olive/70 uppercase">Teléfono</span>
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-lg text-olive hover:text-gold">
                  {site.contact.phone}
                </a>
              </p>
            ) : (
              <p>
                <span className="block text-[11px] tracking-[0.18em] text-olive/70 uppercase">Facebook</span>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-olive hover:text-gold"
                >
                  {site.contact.facebookLabel}
                </a>
                <span className="mt-2 block text-sm text-ink/60">
                  También puedes escribirnos por Facebook o usar el formulario.
                </span>
              </p>
            )}
            {whatsappHref ? (
              <p>
                <span className="block text-[11px] tracking-[0.18em] text-olive/70 uppercase">WhatsApp</span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-olive hover:text-gold"
                >
                  Abrir chat
                </a>
              </p>
            ) : null}
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
          </div>
          <div className="border border-line bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl text-olive uppercase">Formulario</h2>
            <ContactForm className="mt-6" />
          </div>
        </div>
      </section>
    </main>
  );
}
