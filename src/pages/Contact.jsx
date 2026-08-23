import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    Building2,
    CheckCircle2,
    Clock3,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

function Contact() {
    const pageRef = useRef(null);
    const gridRef = useRef(null);
    const glowRef = useRef(null);

    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    // ============================================================
    // EMAILJS CONFIGURATION
    // ============================================================

    const EMAILJS_SERVICE_ID = "service_i9jxe9n";
    const EMAILJS_TEMPLATE_ID = "template_0smau57";
    const EMAILJS_PUBLIC_KEY = "aCfIVjPw-D6bGYdQT";

    // ============================================================
    // GSAP ANIMATIONS
    // ============================================================

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            tl.from(".contact-eyebrow", {
                y: 30,
                opacity: 0,
                duration: 0.7,
            })
                .from(
                    ".contact-title-line",
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.12,
                    },
                    "-=0.35"
                )
                .from(
                    ".contact-description",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.45"
                )
                .from(
                    ".contact-hero-button",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.45"
                )
                .from(
                    ".contact-visual",
                    {
                        x: 80,
                        opacity: 0,
                        scale: 0.9,
                        duration: 1.1,
                    },
                    "-=0.8"
                );

            // Animated grid
            if (gridRef.current) {
                gsap.to(gridRef.current, {
                    backgroundPosition: "60px 60px",
                    duration: 18,
                    repeat: -1,
                    ease: "none",
                });
            }

            // Animated glow
            if (glowRef.current) {
                gsap.to(glowRef.current, {
                    x: 60,
                    y: -30,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }

            // Floating orbs
            gsap.to(".contact-orb", {
                y: -18,
                duration: 3,
                repeat: -1,
                yoyo: true,
                stagger: 0.5,
                ease: "sine.inOut",
            });

            // Contact cards
            gsap.utils.toArray(".contact-card").forEach((card, index) => {
                gsap.from(card, {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        once: true,
                    },
                });
            });

            // Form
            gsap.from(".contact-form", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".contact-form",
                    start: "top 85%",
                    once: true,
                },
            });

            // Form side content
            gsap.from(".form-info", {
                x: -40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".form-info",
                    start: "top 85%",
                    once: true,
                },
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    // ============================================================
    // CONTACT DETAILS
    // ============================================================

    const contactDetails = [
        {
            icon: Phone,
            label: "Call Us",
            value: "+91 00000 00000",
            description: "Speak directly with our team",
            href: "tel:+910000000000",
        },
        {
            icon: Mail,
            label: "Email",
            value: "info@technomachineproducts.com",
            description: "Send us your requirements",
            href: "mailto:info@technomachineproducts.com",
        },
        {
            icon: MapPin,
            label: "Visit Us",
            value: "Tamil Nadu, India",
            description: "Industrial engineering facility",
            href: "#location",
        },
        {
            icon: Clock3,
            label: "Working Hours",
            value: "Mon – Sat",
            description: "09:00 AM – 06:00 PM",
            href: "#hours",
        },
    ];

    // ============================================================
    // FORM SUBMIT
    // ============================================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSending(true);
        setSent(false);
        setError("");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                e.currentTarget,
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            );

            setSent(true);

            e.currentTarget.reset();

            // Automatically remove success message
            setTimeout(() => {
                setSent(false);
            }, 7000);
        } catch (err) {
            console.error("EmailJS Error:", err);

            setError(
                "Unable to send your enquiry right now. Please try again."
            );

            setTimeout(() => {
                setError("");
            }, 7000);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <main
            ref={pageRef}
            className="overflow-hidden bg-[#08090b] text-white"
        >
            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative min-h-[85vh] overflow-hidden border-b border-white/10">
                {/* Animated Grid */}

                <div
                    ref={gridRef}
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Background Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.06),transparent_28%)]" />

                {/* Main Glow */}

                <div
                    ref={glowRef}
                    className="pointer-events-none absolute right-[5%] top-[20%] h-112.5 w-112.5 rounded-full bg-orange-500/10 blur-[140px]"
                />

                {/* Floating Orbs */}

                <div className="contact-orb absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.9)]" />

                <div className="contact-orb absolute bottom-[25%] left-[12%] h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />

                <div className="container-main relative flex min-h-[85vh] items-center py-32 lg:py-24">
                    <div className="grid w-full items-center gap-20 lg:grid-cols-[1fr_0.8fr]">
                        {/* =================================================
                            LEFT HERO
                        ================================================== */}

                        <div>
                            <div className="contact-eyebrow mb-8">
                                <span className="section-label">
                                    Start a Conversation
                                </span>
                            </div>

                            <div className="overflow-hidden">
                                <h1 className="text-[clamp(4rem,8vw,8.5rem)] font-black leading-[0.82] tracking-[-0.06em]">
                                    <span className="contact-title-line block">
                                        LET'S
                                    </span>

                                    <span className="contact-title-line block text-orange-500">
                                        BUILD
                                    </span>

                                    <span className="contact-title-line block">
                                        TOGETHER.
                                    </span>
                                </h1>
                            </div>

                            <p className="contact-description mt-10 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                                Have a machine requirement, automation
                                challenge or production problem? Tell us what
                                you need. Our engineering team will work with
                                you to develop the right industrial solution.
                            </p>

                            {/* Hero Buttons */}

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href="#contact-form"
                                    className="contact-hero-button group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-7 text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_0_rgba(249,115,22,0)] transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)]"
                                >
                                    <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[500%]" />

                                    <span className="relative z-10">
                                        Send Enquiry
                                    </span>

                                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </span>
                                </a>

                                <Link
                                    to="/machines"
                                    className="contact-hero-button group flex h-14 items-center gap-3 rounded-full border border-white/15 bg-white/3 px-7 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10"
                                >
                                    Explore Machines

                                    <ArrowRight
                                        size={16}
                                        className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* =================================================
                            ENGINEERING VISUAL
                        ================================================== */}

                        <div className="contact-visual relative hidden h-130 items-center justify-center lg:flex">
                            {/* Technical Circles */}

                            <div className="absolute h-107.5 w-107.5 rounded-full border border-white/5" />

                            <div className="absolute h-82.5 w-82.5 rounded-full border border-orange-500/8" />

                            <div className="absolute h-55 w-55 rounded-full border border-white/4" />

                            {/* Center Glow */}

                            <div className="absolute h-65 w-65 rounded-full bg-orange-500/10 blur-[100px]" />

                            {/* Center Icon */}

                            <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full border border-orange-500/30 bg-[#0b0d10]/80 shadow-[0_0_80px_rgba(249,115,22,0.12)] backdrop-blur-xl">
                                <Building2
                                    size={58}
                                    strokeWidth={1}
                                    className="text-orange-500"
                                />

                                <div className="absolute inset-3 rounded-full border border-white/5" />
                            </div>

                            {/* Orbit Points */}

                            <div className="absolute right-[18%] top-[18%] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.8)]" />

                            <div className="absolute bottom-[18%] left-[17%] h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                            <div className="absolute left-[10%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/60" />

                            {/* Engineering Card */}

                            <div className="absolute bottom-12 right-0 rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-xl">
                                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                    Engineering Support
                                </div>

                                <div className="mt-2 text-sm font-semibold text-white">
                                    From Requirement
                                    <br />
                                    to Machine.
                                </div>

                                <div className="mt-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-orange-500">
                                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                                    Ready to Connect
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTACT DETAILS
            ====================================================== */}

            <section className="relative border-b border-white/10 bg-[#0b0d10] py-28 md:py-36">
                <div className="container-main">
                    <div className="mb-14">
                        <span className="section-label">
                            Contact Information
                        </span>

                        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                            Let's talk about your{" "}
                            <span className="text-zinc-500">
                                next project.
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                        {contactDetails.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="contact-card group relative min-h-60 overflow-hidden bg-[#0b0d10] p-8 transition-all duration-500 hover:bg-[#101318]"
                                >
                                    {/* Glow */}

                                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition-all duration-500 group-hover:bg-orange-500/10" />

                                    <div className="relative z-10 flex items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-400 transition-all duration-500 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 group-hover:text-orange-500">
                                            <Icon size={19} />
                                        </div>

                                        <ArrowUpRight
                                            size={17}
                                            className="text-zinc-600 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
                                        />
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                                            {item.label}
                                        </div>

                                        <div className="mt-3 wrap-break-words text-sm font-semibold text-white">
                                            {item.value}
                                        </div>

                                        <div className="mt-2 text-xs text-zinc-500">
                                            {item.description}
                                        </div>
                                    </div>

                                    {/* Bottom Orange Line */}

                                    <div className="absolute bottom-0 left-0 h-px w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTACT FORM
            ====================================================== */}

            <section
                id="contact-form"
                className="relative overflow-hidden py-32 md:py-44"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(249,115,22,0.06),transparent_30%)]" />

                <div className="container-main relative">
                    <div className="grid gap-20 lg:grid-cols-[0.75fr_1.25fr] xl:gap-28">
                        {/* =================================================
                            FORM INFORMATION
                        ================================================== */}

                        <div className="form-info">
                            <span className="section-label">
                                Send An Enquiry
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
                                Tell us what you{" "}
                                <span className="text-orange-500">
                                    need.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-md text-base leading-8 text-zinc-500">
                                Share your machine requirement, production
                                challenge or automation idea. Give us enough
                                information to understand your application and
                                our team will take it forward.
                            </p>

                            <div className="mt-10 space-y-5">
                                {[
                                    "Machine requirement consultation",
                                    "Custom machinery & SPM",
                                    "Abrasive conversion solutions",
                                    "Industrial automation",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-zinc-400"
                                    >
                                        <CheckCircle2
                                            size={17}
                                            className="shrink-0 text-orange-500"
                                        />

                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* =================================================
                            FORM
                        ================================================== */}

                        <div className="contact-form rounded-3xl border border-white/10 bg-[#0b0d10] p-7 shadow-2xl md:p-10 lg:p-12">
                            <div className="mb-10 flex items-center justify-between">
                                <div>
                                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                                        Project Enquiry
                                    </div>

                                    <h3 className="mt-2 text-2xl font-semibold text-white">
                                        Start your conversation
                                    </h3>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
                                    <Send
                                        size={17}
                                        className="text-orange-500"
                                    />
                                </div>
                            </div>

                            {/* =================================================
                                FORM
                            ================================================== */}

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Name + Company */}

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            required
                                            autoComplete="name"
                                            className="h-14 w-full rounded-xl border border-white/10 bg-white/2.5 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-orange-500/50 focus:bg-orange-500/3 focus:ring-1 focus:ring-orange-500/20"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                            Company
                                        </label>

                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company name"
                                            required
                                            autoComplete="organization"
                                            className="h-14 w-full rounded-xl border border-white/10 bg-white/2.5 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-orange-500/50 focus:bg-orange-500/3 focus:ring-1 focus:ring-orange-500/20"
                                        />
                                    </div>
                                </div>

                                {/* Email + Phone */}

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="you@company.com"
                                            required
                                            autoComplete="email"
                                            className="h-14 w-full rounded-xl border border-white/10 bg-white/2.5 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-orange-500/50 focus:bg-orange-500/3 focus:ring-1 focus:ring-orange-500/20"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                            Phone
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 XXXXX XXXXX"
                                            required
                                            autoComplete="tel"
                                            className="h-14 w-full rounded-xl border border-white/10 bg-white/2.5 px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-orange-500/50 focus:bg-orange-500/3 focus:ring-1 focus:ring-orange-500/20"
                                        />
                                    </div>
                                </div>

                                {/* Requirement */}

                                <div>
                                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                        Requirement
                                    </label>

                                    <select
                                        name="requirement"
                                        defaultValue=""
                                        required
                                        className="h-14 w-full rounded-xl border border-white/10 bg-[#0e1013] px-5 text-sm text-zinc-400 outline-none transition-all duration-300 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
                                    >
                                        <option value="" disabled>
                                            Select requirement
                                        </option>

                                        <option value="Belt Conversion">
                                            Belt Conversion
                                        </option>

                                        <option value="Jumbo Conversion">
                                            Jumbo Conversion
                                        </option>

                                        <option value="Flap Conversion">
                                            Flap Conversion
                                        </option>

                                        <option value="Disc Conversion">
                                            Disc Conversion
                                        </option>

                                        <option value="Testing Machine">
                                            Testing Machine
                                        </option>

                                        <option value="Belt Grinding">
                                            Belt Grinding
                                        </option>

                                        <option value="Custom Machine / SPM">
                                            Custom Machine / SPM
                                        </option>

                                        <option value="Industrial Automation">
                                            Industrial Automation
                                        </option>
                                    </select>
                                </div>

                                {/* Message */}

                                <div>
                                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                        Message
                                    </label>

                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        placeholder="Tell us about your machine or production requirement..."
                                        className="w-full resize-none rounded-xl border border-white/10 bg-white/2.5 px-5 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-orange-500/50 focus:bg-orange-500/3 focus:ring-1 focus:ring-orange-500/20"
                                    />
                                </div>

                                {/* =================================================
                                    SEND BUTTON
                                ================================================== */}

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-orange-500 px-7 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[500%]" />

                                    <span className="relative z-10">
                                        {isSending
                                            ? "Sending..."
                                            : "Send Requirement"}
                                    </span>

                                    {!isSending && (
                                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                                            <ArrowUpRight
                                                size={16}
                                                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </span>
                                    )}

                                    {isSending && (
                                        <span className="relative z-10 h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                                    )}
                                </button>

                                {/* =================================================
                                    SUCCESS MESSAGE
                                ================================================== */}

                                {sent && (
                                    <div className="flex items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-4 text-xs text-green-400">
                                        <CheckCircle2 size={17} />

                                        <span>
                                            Your enquiry has been sent
                                            successfully.
                                        </span>
                                    </div>
                                )}

                                {/* =================================================
                                    ERROR MESSAGE
                                ================================================== */}

                                {error && (
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-4 text-center text-xs text-red-400">
                                        {error}
                                    </div>
                                )}

                                <p className="text-center text-[9px] leading-5 text-zinc-700">
                                    Your information will only be used to
                                    respond to your enquiry.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section
                id="location"
                className="relative border-t border-white/10 bg-[#0b0d10] py-28 md:py-36"
            >
                <div className="container-main">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08090b] p-8 md:p-12 lg:p-16">
                        {/* Glow */}

                        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

                        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <span className="section-label">
                                    Techno Machine Products
                                </span>

                                <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                                    Let's turn your production challenge into
                                    an{" "}
                                    <span className="text-orange-500">
                                        engineered solution.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
                                    From concept and design to manufacturing,
                                    automation and support — our team is ready
                                    to discuss your requirement.
                                </p>
                            </div>

                            <a
                                href="mailto:info@technomachineproducts.com"
                                className="group flex h-14 shrink-0 items-center justify-center gap-3 rounded-full border border-orange-500/40 bg-orange-500/10 px-7 text-xs font-bold uppercase tracking-[0.16em] text-orange-500 transition-all duration-500 hover:-translate-y-1 hover:bg-orange-500 hover:text-black hover:shadow-[0_15px_45px_rgba(249,115,22,0.25)]"
                            >
                                Email Our Team

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;