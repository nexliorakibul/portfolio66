import React, { useMemo, useState } from "react";

// ✅ Single-file React portfolio, styled with Tailwind classes
// - Replace placeholder text and image URLs with your real content
// - Drop into any React/Vite/Next project and render <Portfolio />
// - Smooth, modern, and mobile-first

export default function Portfolio() {
  // ---- Editable Profile Info ----
  const profile = {
    name: "Rakibul Hasan",
    title: "Brand • Social Media • Digital Marketing",
    tagline:
      "I help brands grow with strategy-led design, social content, and performance marketing.",
    location: "Dhaka, Bangladesh",
    email: "rakibulaqib04@gmail.com",
    avatar: "/edited-photo (1) copy.png",
    heroImage:
      "https://images.unsplash.com/photo-1529336953121-a0fadde0bb43?w=1600&q=80&auto=format&fit=crop",
    socials: [
    
      { label: "Facebook", href: "https://www.facebook.com/rakibul.aqib" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rakibul-aqib/" },
      { label: "Instagram", href: "https://www.instagram.com/rakibul__aqib/" },
    ],
  };

  // ---- Services ----
  const services = [
    {
      title: "Brand Identity",
      desc: "Logo systems, color, typography, and brand kits that scale across touchpoints.",
      bullets: ["Logo & System", "Guidelines", "Pitch/Decks"],
      icon: "🏷️",
    },
    {
      title: "Social Media Manager",
      desc: "End-to-end management of your brand’s social presence. From content scheduling and posting to community engagement and growth strategies.",
      bullets: ["Strategy & Planning", "Content Scheduling", "Community Engagement"],
      icon: "📱",
    },
    {
      title: "Digital Marketing",
      desc: "Campaign strategy, creative, and reporting for awareness and conversions.",
      bullets: ["Ad Creative", "Landing Pages", "Analytics"],
      icon: "📈",
    },
  ];

  // ---- Case Studies / Projects ----
  const projects = [
 {
  title: "Collab Design – Social Media Manager",
  subtitle: "Strategy • Content • Community",
  cover:
    "https://collab.design/images/vancouver.webp",
  metrics: [
    { k: "+175%", v: "Engagement" },
    { k: "+8.2K", v: "Followers" },
    { k: "2.5x", v: "Interactions" },
  ],
  tags: ["Social", "Manager", "Collab"],
},
    {
      title: "Nova Café – Launch Campaign",
      subtitle: "Identity • Content System • Paid Social",
      cover:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop",
      metrics: [
        { k: "+210%", v: "Follows" },
        { k: "1.8x", v: "CTR" },
        { k: "+35%", v: "Sales" },
      ],
      tags: ["Campaign", "Food & Bev"],
    },
    {
      title: "Atlas App – Product Branding",
      subtitle: "Identity • Store Assets • Launch Site",
      cover:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80&auto=format&fit=crop",
      metrics: [
        { k: "4.7★", v: "Store Rating" },
        { k: "+92k", v: "Installs" },
        { k: "-18%", v: "CPA" },
      ],
      tags: ["Apps", "Tech"],
    },
  ];

  // ---- Testimonials ----
  const testimonials = [
    {
      quote:
        "Rakibul elevated our brand visuals and built a content system that tripled our engagement in 60 days.",
      name: "A. Karim",
      role: "Founder, Nova Café",
    },
    {
      quote:
        "Thoughtful strategy + sharp execution. Our paid social finally performs and looks on-brand.",
      name: "R. Chowdhury",
      role: "Marketing Lead, Atlas",
    },
  ];

  // ---- FAQ ----
  const faqs = [
    {
      q: "What industries do you work with?",
      a: "I partner with startups, cafés/F&B, tech, and lifestyle brands—but I’m industry-agnostic.",
    },
    {
      q: "Do you offer monthly support?",
      a: "Yes—retainer packages for content design and performance reporting are available.",
    },
    {
      q: "How soon can we start?",
      a: "Typically within 1–2 weeks depending on scope. Reach out to confirm availability.",
    },
  ];

  const year = useMemo(() => new Date().getFullYear(), []);
  const [active, setActive] = useState(0);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">{profile.name}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="opacity-80 hover:opacity-100" href="#work">Work</a>
            <a className="opacity-80 hover:opacity-100" href="#services">Services</a>
            <a className="opacity-80 hover:opacity-100" href="#about">About</a>
            <a className="opacity-80 hover:opacity-100" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
            Let’s talk
            <span aria-hidden>↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <img
          src={profile.heroImage}
          alt="Hero"
          className="h-[60svh] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for projects
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
                {profile.title}
              </h1>
              <p className="mt-4 max-w-xl text-neutral-300">
                {profile.tagline}
              </p>
              <div className="mt-6 flex items-center gap-3">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-sm opacity-80 hover:opacity-100 underline-offset-4 hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="backdrop-blur bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 w-full md:max-w-md">
                <div className="flex items-center gap-4">
                  <img src={profile.avatar} alt="Avatar" className="size-16 rounded-xl object-cover" />
                  <div>
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-sm opacity-80">{profile.location}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { k: "60+", v: "Brands" },
                    { k: "8yr", v: "Experience" },
                    { k: "$MM+", v: "Ad Spend" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className="text-xl font-semibold">{m.k}</p>
                      <p className="text-xs opacity-80">{m.v}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex w-full justify-center rounded-xl border border-white/10 bg-emerald-500/90 px-4 py-2 text-neutral-900 font-medium hover:bg-emerald-400"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="text-sm opacity-80 max-w-xl">
            Strategy-first creative across identity, social, and growth marketing. Tailored scopes for startups and SMBs.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 md:p-6 hover:from-white/[0.1]">
              <div className="text-2xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 opacity-90">{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-8 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <div className="text-sm opacity-80">Swipe metrics →</div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, idx) => (
            <article key={p.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} className="size-full object-cover hover:scale-[1.05] transition-transform" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 opacity-90">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
                <p className="text-sm opacity-80">{p.subtitle}</p>

                {/* Metrics Tabs */}
                <div className="mt-4">
                  <div className="flex gap-2">
                    {p.metrics.map((m, i) => (
                      <button
                        key={m.k}
                        onClick={() => setActive(i)}
                        className={`text-xs rounded-full px-2 py-1 border ${
                          active === i
                            ? "bg-emerald-400 text-neutral-900 border-emerald-300"
                            : "bg-white/5 border-white/10"
                        }`}
                      >
                        {m.v}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-2xl font-semibold">{p.metrics[active].k}</p>
                    <p className="text-xs opacity-80">{p.metrics[active].v}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-neutral-300">
              I’m a brand and digital designer focused on practical, performance-driven outcomes. I turn positioning and goals
              into visual systems and content that work across social and paid.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="opacity-90">• Figma, Adobe CC, CapCut, Google Ads, Meta Ads</li>
              <li className="opacity-90">• Content systems, campaign playbooks, performance dashboards</li>
              <li className="opacity-90">• Comfortable collaborating with founders, marketers, and devs</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-medium">Process</h3>
            <ol className="mt-3 space-y-2 text-sm">
              <li><span className="font-medium">01. Discovery –</span> goals, audience, success metrics</li>
              <li><span className="font-medium">02. Strategy –</span> positioning, content pillars, KPIs</li>
              <li><span className="font-medium">03. Design –</span> identity, kits, templates, landing pages</li>
              <li><span className="font-medium">04. Launch –</span> scheduling, paid setup, QA</li>
              <li><span className="font-medium">05. Optimize –</span> reporting and iteration</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">What clients say</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-lg">“{t.quote}”</p>
              <footer className="mt-3 text-sm opacity-80">— {t.name}, {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4 md:gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-medium">{f.q}</p>
              <p className="mt-2 text-sm opacity-80">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Let’s build your next launch</h2>
          <p className="mt-2 text-sm opacity-80 max-w-2xl">
            Tell me about your brand and goals. I’ll reply within 24 hours with next steps and a quick scope suggestion.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I’ll get back to you shortly.");
            }}
            className="mt-6 grid md:grid-cols-3 gap-4"
          >
            <input required className="rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="Your name" />
            <input required className="rounded-xl bg-white/5 border border-white/10 p-3 outline-none" placeholder="Email" type="email" />
            <input className="rounded-xl bg-white/5 border border-white/10 p-3 outline-none md:col-span-3" placeholder="Company / Brand (optional)" />
            <textarea required className="rounded-xl bg-white/5 border border-white/10 p-3 outline-none md:col-span-3" placeholder="Project details" rows={4} />
            <button className="rounded-xl border border-white/10 bg-emerald-500/90 px-4 py-3 text-neutral-900 font-medium hover:bg-emerald-400 md:col-span-3">
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm opacity-80">© {year} {profile.name}. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href={`mailto:${profile.email}`} className="underline underline-offset-4">Email</a>
            <a href="#home" className="opacity-80 hover:opacity-100">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
