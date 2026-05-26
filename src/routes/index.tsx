// Converted to a standard React component for Vite SPA (removed TanStack file route)
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
  Star,
  Sparkles,
  Scissors,
  Heart,
  Crown,
  Menu,
  X,
  ChevronRight,
  Mail,
  Award,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import bridalImg from "@/assets/bridal.jpg";
import hairImg from "@/assets/hair.jpg";
import skinImg from "@/assets/skin.jpg";
import nailsImg from "@/assets/nails.jpg";
import makeupImg from "@/assets/makeup.jpg";
import aboutImg from "@/assets/about.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default Index;

const PHONE = "+919673590780";
const PHONE_DISPLAY = "+91 96735 90780";
const WHATSAPP_URL = `https://wa.me/919673590780?text=${encodeURIComponent(
  "Hi Manisha Women's World, I'd like to book an appointment.",
)}`;
const INSTAGRAM_URL = "https://instagram.com/";
const ADDRESS =
  "Shop No 18, near Khade Washing Center, Sun City, Anand Nagar, Pune, Maharashtra 411051";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Sun+City+Anand+Nagar+Pune+411051&output=embed";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
} as const;

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#bridal", label: "Bridal" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass mx-3 mt-3 rounded-full px-5 py-3 md:px-8 md:py-4 flex items-center justify-between shadow-[0_8px_30px_rgba(183,110,121,0.08)]">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg md:text-xl tracking-tight text-soft-black">
            Manisha <span className="text-gradient-gold">Women's World</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-soft-black/80 hover:text-rose-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-soft-black text-cream px-5 py-2.5 text-sm font-medium hover:bg-rose-gold transition-colors"
          >
            <MessageCircle className="size-4" /> Book Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full hover:bg-blush/50"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass mx-3 mt-2 rounded-2xl p-5 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm py-2 text-soft-black/80 hover:text-rose-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury salon interior with marble and rose gold accents"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/10 to-cream/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blush/40 via-transparent to-champagne/20" />

      {/* Floating ornaments */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-10 hidden md:block"
      >
        <Sparkles className="size-10 text-rose-gold/60" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-12 hidden md:block"
      >
        <Heart className="size-8 text-rose-gold/50" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24 md:pt-48 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <Crown className="size-4 text-rose-gold" />
          <span className="text-xs tracking-[0.2em] uppercase text-soft-black/80">
            Pune's Premium Beauty Destination
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-soft-black"
        >
          Where Beauty <br />
          Meets <span className="text-gradient-gold italic">Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-soft-black/70 leading-relaxed"
        >
          Luxury beauty, bridal, hair, skin & self-care services crafted for confidence and
          elegance — at Manisha Women's World, Anand Nagar, Pune.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-soft-black text-cream px-8 py-4 text-sm font-medium hover:bg-rose-gold transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="size-4" /> Book on WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full glass text-soft-black px-8 py-4 text-sm font-medium hover:bg-white/80 transition-all hover:scale-105"
          >
            <Phone className="size-4" /> Call to Book
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-4"
        >
          {[
            { v: "10K+", l: "Happy Clients" },
            { v: "500+", l: "Bridal Stories" },
            { v: "4.9★", l: "Google Rating" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-4">
              <div className="font-display text-2xl md:text-3xl text-gradient-gold">{s.v}</div>
              <div className="text-[11px] md:text-xs tracking-wider uppercase text-soft-black/60 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      <div
        className={`text-xs tracking-[0.3em] uppercase mb-4 ${
          light ? "text-cream/70" : "text-rose-gold"
        }`}
      >
        — {eyebrow} —
      </div>
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl leading-tight ${
          light ? "text-cream" : "text-soft-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-cream/70" : "text-soft-black/65"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-blush to-champagne/30 rounded-[2rem] blur-2xl opacity-60" />
          <img
            src={aboutImg}
            alt="Luxury salon interior with chandelier and rose gold details"
            loading="lazy"
            width={1400}
            height={1600}
            className="relative rounded-[2rem] w-full h-[520px] md:h-[640px] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-6 py-5 hidden md:block">
            <div className="flex items-center gap-3">
              <Award className="size-8 text-rose-gold" />
              <div>
                <div className="font-display text-lg text-soft-black">8+ Years</div>
                <div className="text-xs text-soft-black/60">of Beauty Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-rose-gold mb-4">
            — Our Story —
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-soft-black leading-tight">
            A sanctuary of <span className="italic text-gradient-gold">elegance</span>, crafted for
            the modern woman.
          </h2>
          <p className="mt-6 text-base md:text-lg text-soft-black/70 leading-relaxed">
            At Manisha Women's World, every visit is an experience — not just a service. From bridal
            transformations to everyday self-care rituals, our master stylists blend artistry with
            premium products to bring out your most radiant self.
          </p>
          <p className="mt-4 text-base text-soft-black/70 leading-relaxed">
            Nestled in the heart of Anand Nagar, our boutique salon is designed to make every woman
            feel like royalty — surrounded by marble, rose gold, and the gentle hush of luxury.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "Certified bridal & HD makeup artists",
              "Premium imported products",
              "Hygienic, private studio rooms",
              "Personalised beauty consultations",
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <Sparkles className="size-4 text-rose-gold mt-1 shrink-0" />
                <span className="text-sm text-soft-black/80">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { name: "Hair Styling", icon: Scissors },
  { name: "Hair Spa & Smoothening", icon: Sparkles },
  { name: "Keratin & Hair Color", icon: Sparkles },
  { name: "Bridal Makeup", icon: Crown },
  { name: "Party & HD Makeup", icon: Star },
  { name: "Skin Treatment & Facial", icon: Heart },
  { name: "Cleanup & Detan", icon: Sparkles },
  { name: "Nail Extensions & Art", icon: Star },
  { name: "Manicure & Pedicure", icon: Heart },
  { name: "Eyebrow & Waxing", icon: Scissors },
  { name: "Saree Draping", icon: Crown },
  { name: "Pre Bridal Packages", icon: Award },
];

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 gradient-luxe">
      <SectionHeader
        eyebrow="Premium Services"
        title={
          <>
            Curated beauty,{" "}
            <span className="italic text-gradient-gold">head to toe.</span>
          </>
        }
        subtitle="From bridal artistry to everyday glow rituals, explore our full menu of indulgent services."
      />
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group relative glass rounded-3xl p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
          >
            <div className="size-12 rounded-2xl bg-gradient-to-br from-rose-gold to-champagne flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon className="size-5 text-cream" />
            </div>
            <h3 className="font-display text-lg md:text-xl text-soft-black leading-tight">
              {s.name}
            </h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs text-rose-gold/90 font-medium uppercase tracking-wider"
            >
              Book <ChevronRight className="size-3" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  const items = [
    { img: bridalImg, title: "Bridal & HD Makeup", tag: "Signature" },
    { img: hairImg, title: "Hair Transformations", tag: "New Season" },
    { img: skinImg, title: "Skin & Facial Rituals", tag: "Glow" },
    { img: nailsImg, title: "Nail Art Studio", tag: "Trending" },
    { img: makeupImg, title: "Party Glam", tag: "Editorial" },
  ];
  return (
    <section id="bridal" className="relative py-24 md:py-32 px-6">
      <SectionHeader
        eyebrow="Showcase"
        title={
          <>
            Crafted with love. <br />
            <span className="italic text-gradient-gold">Worn with confidence.</span>
          </>
        }
      />
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {items.map((it, i) => (
          <motion.figure
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className={`relative overflow-hidden rounded-3xl group ${
              i === 0 ? "md:row-span-2 md:col-span-1 aspect-[3/4] md:aspect-auto" : "aspect-[3/4]"
            }`}
          >
            <img
              src={it.img}
              alt={it.title}
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-soft-black/10 to-transparent" />
            <figcaption className="absolute bottom-0 inset-x-0 p-5 md:p-6">
              <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-champagne mb-1">
                {it.tag}
              </div>
              <div className="font-display text-lg md:text-2xl text-cream">{it.title}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

const PACKAGES = [
  {
    name: "Signature Glow",
    price: "₹2,499",
    tag: "Self-care",
    perks: [
      "Premium facial or cleanup",
      "Express manicure",
      "Eyebrow shaping",
      "Hair spa head massage",
    ],
  },
  {
    name: "Pre-Bridal Radiance",
    price: "₹14,999",
    tag: "Most Loved",
    featured: true,
    perks: [
      "4 sessions over 30 days",
      "Body polishing & detan",
      "Hair spa + keratin gloss",
      "Skin brightening facial",
      "Mani-pedi luxe ritual",
    ],
  },
  {
    name: "Bridal Day Glam",
    price: "₹24,999",
    tag: "Editorial",
    perks: [
      "HD bridal makeup",
      "Signature hair styling",
      "Saree / lehenga draping",
      "Touch-up kit included",
    ],
  },
];

function Packages() {
  return (
    <section id="packages" className="relative py-24 md:py-32 px-6 gradient-luxe">
      <SectionHeader
        eyebrow="Beauty Packages"
        title={
          <>
            Indulgent rituals,{" "}
            <span className="italic text-gradient-gold">thoughtfully curated.</span>
          </>
        }
        subtitle="Premium beauty packages designed for every chapter — daily glow, pre-bridal, and the big day."
      />
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-5">
        {PACKAGES.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative rounded-[2rem] p-8 ${
              p.featured
                ? "bg-soft-black text-cream shadow-2xl md:scale-105"
                : "bg-white/70 backdrop-blur text-soft-black border border-white"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-gold to-champagne text-cream text-[10px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full">
                Most Loved
              </div>
            )}
            <div
              className={`text-[10px] tracking-[0.3em] uppercase mb-3 ${
                p.featured ? "text-champagne" : "text-rose-gold"
              }`}
            >
              {p.tag}
            </div>
            <h3 className="font-display text-3xl mb-2">{p.name}</h3>
            <div className="font-display text-4xl mb-6">
              {p.price}
              <span
                className={`text-sm font-sans ml-2 ${
                  p.featured ? "text-cream/60" : "text-soft-black/50"
                }`}
              >
                onwards
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm">
                  <Sparkles
                    className={`size-4 mt-0.5 shrink-0 ${
                      p.featured ? "text-champagne" : "text-rose-gold"
                    }`}
                  />
                  <span className={p.featured ? "text-cream/85" : "text-soft-black/80"}>
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 rounded-full py-3 px-6 text-sm font-medium transition-all hover:scale-[1.02] ${
                p.featured
                  ? "bg-cream text-soft-black hover:bg-blush"
                  : "bg-soft-black text-cream hover:bg-rose-gold"
              }`}
            >
              <MessageCircle className="size-4" /> Reserve Package
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Bride, Pune",
    text:
      "Manisha didi made me feel like the most beautiful version of myself on my wedding day. Every detail — from skin prep to draping — was perfection.",
  },
  {
    name: "Anjali Deshmukh",
    role: "Regular Client",
    text:
      "The ambience is dreamy and the team is so warm. My monthly hair spa and facial here is the best part of my routine. Absolute luxury at honest prices.",
  },
  {
    name: "Sneha Patil",
    role: "Party Makeup",
    text:
      "Got an HD party makeup and people couldn't stop complimenting. Stayed flawless for 10+ hours. Highly recommend for any occasion!",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 bg-soft-black text-cream">
      <SectionHeader
        light
        eyebrow="Loved by women across Pune"
        title={
          <>
            Stories of <span className="italic text-gradient-gold">confidence.</span>
          </>
        }
      />
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-dark rounded-3xl p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="size-4 fill-champagne text-champagne" />
              ))}
            </div>
            <p className="font-display text-lg leading-snug text-cream/90 flex-1">
              "{t.text}"
            </p>
            <footer className="mt-6 pt-5 border-t border-cream/15">
              <div className="text-sm font-medium text-cream">{t.name}</div>
              <div className="text-xs text-cream/60">{t.role}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 glass-dark rounded-full px-6 py-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="size-4 fill-champagne text-champagne" />
            ))}
          </div>
          <span className="text-sm text-cream/90">
            <strong className="text-cream">4.9 / 5</strong> · Trusted by 500+ Google reviews
          </span>
        </div>
      </div>
    </section>
  );
}

const EXPERTS = [
  { name: "Manisha", role: "Founder · Bridal & Makeup Director" },
  { name: "Kavita", role: "Senior Hair & Color Specialist" },
  { name: "Riya", role: "Skin & Facial Therapist" },
  { name: "Tanvi", role: "Nail Art Lead" },
];

function Experts() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <SectionHeader
        eyebrow="Meet Our Experts"
        title={
          <>
            The talent behind <br /> your <span className="italic text-gradient-gold">glow</span>.
          </>
        }
      />
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-5">
        {EXPERTS.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group text-center"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-4 bg-gradient-to-br from-blush via-nude to-champagne/40">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl text-rose-gold/40 group-hover:scale-110 transition-transform">
                  {e.name.charAt(0)}
                </span>
              </div>
            </div>
            <h3 className="font-display text-xl text-soft-black">{e.name}</h3>
            <p className="text-xs text-soft-black/60 mt-1 px-2">{e.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Do you accept walk-ins or only appointments?",
    a: "We welcome both, but appointments are highly recommended — especially for bridal, hair color and party makeup services. Book via WhatsApp or call to secure your preferred time.",
  },
  {
    q: "What products do you use?",
    a: "We use premium professional brands including Loreal, Schwarzkopf, MAC, Huda Beauty and Cheryl's — handpicked for quality, safety, and lasting finish.",
  },
  {
    q: "Do you offer bridal trials?",
    a: "Yes. Bridal trials are part of all wedding bookings, where we customise your look, lehenga draping and skin prep weeks before the big day.",
  },
  {
    q: "What are your timings?",
    a: "We're open daily from 9:00 AM to 9:00 PM. Special early/late slots can be arranged for brides on request.",
  },
  {
    q: "Do you serve all hair, skin and event types?",
    a: "Absolutely. Our team is trained for every hair texture, skin tone, and occasion — from casual self-care to weddings, photoshoots and parties.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 gradient-luxe">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Frequently Asked"
          title={
            <>
              Your questions, <span className="italic text-gradient-gold">answered.</span>
            </>
          }
        />
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl mb-3 px-6 border-none"
            >
              <AccordionTrigger className="text-left font-display text-lg text-soft-black hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-soft-black/70 text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <SectionHeader
        eyebrow="Visit & Book"
        title={
          <>
            Begin your <span className="italic text-gradient-gold">luxury</span> experience.
          </>
        }
        subtitle="We'd love to host you. Reach out for bookings, pricing or a personalised beauty consultation."
      />
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-rose-gold to-champagne flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-cream" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-rose-gold mb-1">
                  Visit Us
                </div>
                <div className="font-display text-lg text-soft-black leading-snug">{ADDRESS}</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <a
              href={`tel:${PHONE}`}
              className="glass rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Phone className="size-6 text-rose-gold mb-3" />
              <div className="text-xs tracking-widest uppercase text-rose-gold/80 mb-1">
                Call
              </div>
              <div className="font-display text-lg text-soft-black">{PHONE_DISPLAY}</div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <MessageCircle className="size-6 text-rose-gold mb-3" />
              <div className="text-xs tracking-widest uppercase text-rose-gold/80 mb-1">
                WhatsApp
              </div>
              <div className="font-display text-lg text-soft-black">Chat with us</div>
            </a>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-rose-gold to-champagne flex items-center justify-center shrink-0">
                <Clock className="size-5 text-cream" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-rose-gold mb-1">Hours</div>
                <div className="font-display text-lg text-soft-black">Open Daily</div>
                <div className="text-sm text-soft-black/70 mt-0.5">9:00 AM — 9:00 PM</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
            <iframe
              title="Manisha Women's World Location"
              src={MAPS_EMBED}
              loading="lazy"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const msg = `Hi! I'd like to book.%0A%0AName: ${fd.get("name")}%0APhone: ${fd.get(
              "phone",
            )}%0AService: ${fd.get("service")}%0AMessage: ${fd.get("message")}`;
            window.open(`https://wa.me/919673590780?text=${msg}`, "_blank");
          }}
          className="glass rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-rose-gold">— Inquiry Form —</div>
          <h3 className="font-display text-3xl text-soft-black">Book an appointment</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              name="name"
              required
              placeholder="Your name"
              className="bg-white/60 border-white/80 h-12 rounded-xl"
            />
            <Input
              name="phone"
              required
              type="tel"
              placeholder="Phone number"
              className="bg-white/60 border-white/80 h-12 rounded-xl"
            />
          </div>
          <Input
            name="service"
            placeholder="Service of interest (e.g. Bridal, Hair Spa)"
            className="bg-white/60 border-white/80 h-12 rounded-xl"
          />
          <Textarea
            name="message"
            placeholder="Tell us a little about what you're looking for…"
            rows={4}
            className="bg-white/60 border-white/80 rounded-xl"
          />
          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-soft-black hover:bg-rose-gold text-cream"
          >
            <MessageCircle className="size-4" /> Send via WhatsApp
          </Button>
          <p className="text-xs text-soft-black/50 text-center">
            We'll get back to you within minutes during salon hours.
          </p>
        </form>
      </div>
    </section>
  );
}

function OffersBanner() {
  return (
    <section className="px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-r from-rose-gold via-blush to-champagne p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-cream/80 mb-2">
            — Premium Offer —
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-cream leading-tight">
            Flat 20% off on your first <em>luxury ritual</em>.
          </h3>
          <p className="mt-2 text-cream/80 text-sm">
            Valid on hair spa, facial & nail services. Limited weekly slots.
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-soft-black text-cream px-7 py-4 text-sm font-medium hover:bg-cream hover:text-soft-black transition-all"
        >
          Claim Offer <ChevronRight className="size-4" />
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-soft-black text-cream/80 pt-20 pb-8 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-cream mb-3">
            Manisha <span className="text-gradient-gold">Women's World</span>
          </div>
          <p className="text-sm text-cream/60 max-w-sm leading-relaxed">
            A luxury women's beauty salon in Anand Nagar, Pune — crafting bridal, hair, skin and
            self-care experiences that feel as beautiful as they look.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="size-10 rounded-full glass-dark flex items-center justify-center hover:bg-rose-gold/30 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="size-10 rounded-full glass-dark flex items-center justify-center hover:bg-rose-gold/30 transition-colors"
              aria-label="Call"
            >
              <Phone className="size-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="size-10 rounded-full glass-dark flex items-center justify-center hover:bg-rose-gold/30 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-champagne mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-cream transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-champagne mb-4">Visit</div>
          <p className="text-sm text-cream/70 leading-relaxed">{ADDRESS}</p>
          <p className="text-sm text-cream/70 mt-3">{PHONE_DISPLAY}</p>
          <p className="text-sm text-cream/70">Open daily · 9 AM — 9 PM</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Manisha Women's World. All rights reserved.</p>
        <p>Crafted with love in Pune.</p>
      </div>
    </footer>
  );
}

function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Book on WhatsApp"
        className="size-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call now"
        className="size-14 rounded-full bg-rose-gold text-cream shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-cream text-soft-black overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Showcase />
      <OffersBanner />
      <Packages />
      <Testimonials />
      <Experts />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTAs />
    </main>
  );
}
