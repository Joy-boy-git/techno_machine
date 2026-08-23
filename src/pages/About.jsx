import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    Cog,
    Factory,
    Gauge,
    Settings,
    Wrench,
} from "lucide-react";
import gsap from "gsap";

import aboutImage from "../assets/beltgrinding.jpeg";
// Change the filename above if your actual image has a different name.

function About() {
    const pageRef = useRef(null);
    const gridRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animation
            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            heroTimeline
                .from(".about-eyebrow", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                })
                .from(
                    ".about-title-line",
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.12,
                    },
                    "-=0.4"
                )
                .from(
                    ".about-description",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.5"
                )
                .from(
                    ".about-hero-image",
                    {
                        x: 80,
                        opacity: 0,
                        scale: 0.92,
                        duration: 1.2,
                    },
                    "-=0.8"
                );

            // Background grid
            if (gridRef.current) {
                gsap.to(gridRef.current, {
                    backgroundPosition: "60px 60px",
                    duration: 18,
                    repeat: -1,
                    ease: "none",
                });
            }

            // Glow
            if (glowRef.current) {
                gsap.to(glowRef.current, {
                    x: 50,
                    y: -30,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }

            // Floating elements
            gsap.to(".about-floating", {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                stagger: 0.4,
                ease: "sine.inOut",
            });

            // Section reveals
            gsap.utils.toArray(".about-reveal").forEach((section) => {
                gsap.from(section, {
                    y: 55,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        once: true,
                    },
                });
            });

            // Cards
            gsap.utils.toArray(".about-card").forEach((card, index) => {
                gsap.from(card, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        once: true,
                    },
                });
            });

            // Timeline
            gsap.utils.toArray(".timeline-item").forEach((item, index) => {
                gsap.from(item, {
                    x: index % 2 === 0 ? -40 : 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        once: true,
                    },
                });
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <main
            ref={pageRef}
            className="overflow-hidden bg-[#08090b] text-white"
        >
            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative min-h-[90vh] overflow-hidden">
                {/* Grid */}
                <div
                    ref={gridRef}
                    className="grid-background absolute inset-0 opacity-40"
                />

                {/* Background gradient */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.15),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.06),transparent_30%)]" />

                {/* Glow */}
                <div
                    ref={glowRef}
                    className="pointer-events-none absolute right-[5%] top-[20%] h-125 w-125 rounded-full bg-orange-500/10 blur-[140px]"
                />

                <div className="container-main relative flex min-h-[90vh] items-center py-32 lg:py-24">
                    <div className="grid w-full items-center gap-20 lg:grid-cols-[1fr_0.85fr]">
                        {/* Text */}
                        <div className="relative z-10">
                            <div className="about-eyebrow mb-8">
                                <span className="section-label">
                                    About Techno Machine Products
                                </span>
                            </div>

                            <div className="overflow-hidden">
                                <h1 className="text-balance text-[clamp(3.5rem,7vw,7.5rem)] font-black leading-[0.85] tracking-[-0.055em]">
                                    <span className="about-title-line block">
                                        BUILT
                                    </span>

                                    <span className="about-title-line block text-orange-500">
                                        THROUGH
                                    </span>

                                    <span className="about-title-line block">
                                        ENGINEERING.
                                    </span>
                                </h1>
                            </div>

                            <p className="about-description mt-10 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                                Techno Machine Products is an engineering-driven
                                machine building company focused on special
                                purpose machinery, abrasive conversion systems
                                and industrial automation solutions.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    to="/machines"
                                    className="group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-7 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)]"
                                >
                                    <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[500%]" />

                                    <span className="relative z-10">
                                        Explore Our Machines
                                    </span>

                                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </Link>

                                <Link
                                    to="/contact"
                                    className="group inline-flex h-14 items-center gap-3 rounded-full border border-white/15 bg-white/3 px-7 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10"
                                >
                                    Talk to Us
                                    <ArrowRight
                                        size={16}
                                        className="text-orange-500 transition-transform group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Hero visual */}
                        <div className="about-hero-image relative hidden min-h-150 items-center justify-center lg:flex">
                            {/* Circles */}
                            <div className="absolute h-125 w-125 rounded-full border border-white/5" />

                            <div className="absolute h-96 w-96 rounded-full border border-orange-500/8" />

                            <div className="absolute h-70 w-70 rounded-full border border-white/4" />

                            {/* Glow */}
                            <div className="absolute h-87.5 w-87.5 rounded-full bg-orange-500/10 blur-[100px]" />

                            {/* Machine image */}
                           <div className="relative z-10 flex h-125 w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-3 shadow-2xl shadow-black/30">
    {/* Orange glow */}
    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-orange-500/5 blur-2xl" />

    <img
        src={aboutImage}
        alt="Techno Machine Products industrial machinery"
        className="relative h-full w-full rounded-2xl object-contain p-6 opacity-80 grayscale transition-all duration-700 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0"
    />

    {/* Subtle hover border */}
    <div className="pointer-events-none absolute inset-3 rounded-2xl border border-transparent transition-colors duration-700 hover:border-orange-500/30" />
</div>

                            {/* Floating label */}
                            <div className="about-floating absolute right-0 top-24 rounded-xl border border-white/10 bg-[#101216]/80 p-5 backdrop-blur-xl">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                        <Cog size={16} />
                                    </div>

                                    <div>
                                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                            Established
                                        </div>

                                        <div className="mt-1 text-sm font-semibold text-white">
                                            1996
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-floating absolute bottom-24 left-0 rounded-xl border border-white/10 bg-[#101216]/80 p-5 backdrop-blur-xl">
                                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                    Engineering
                                </div>

                                <div className="mt-1 text-sm font-semibold text-white">
                                    Precision Driven
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll */}
                <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
                        Discover our story
                    </span>

                    <ArrowDown
                        size={15}
                        className="animate-bounce text-orange-500"
                    />
                </div>
            </section>

            {/* =====================================================
                COMPANY INTRO
            ====================================================== */}

            <section className="about-reveal border-t border-white/10 py-36 md:py-48">
                <div className="container-main">
                    <div className="grid gap-20 lg:grid-cols-[0.65fr_1.35fr] xl:gap-32">
                        <div>
                            <span className="section-label">
                                Our Story
                            </span>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="text-6xl font-black tracking-tight text-orange-500">
                                    20+
                                </span>

                                <div className="text-[9px] font-bold uppercase leading-4 tracking-[0.18em] text-zinc-500">
                                    Years
                                    <br />
                                    Of Engineering
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                                Engineering experience built{" "}
                                <span className="text-orange-500">
                                    over decades.
                                </span>
                            </h2>

                            <div className="mt-10 grid gap-8 md:grid-cols-2">
                                <p className="text-base leading-8 text-zinc-400">
                                    Techno Machine Products began its journey
                                    in 1996 as a jigs and fixture design and
                                    manufacturing company.
                                </p>

                                <p className="text-base leading-8 text-zinc-400">
                                    Over the years, the company expanded its
                                    engineering capabilities into machine
                                    building, abrasive conversion machinery,
                                    special purpose machines and automation.
                                </p>
                            </div>

                            <p className="mt-8 max-w-4xl text-base leading-8 text-zinc-400">
                                Today, Techno Machine Products works closely
                                with industrial customers to understand their
                                production requirements and develop practical,
                                reliable and performance-oriented machinery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                TIMELINE
            ====================================================== */}

            <section className="about-reveal border-y border-white/10 bg-[#0b0d10] py-36 md:py-48">
                <div className="container-main">
                    <div className="mb-20">
                        <span className="section-label">
                            Our Journey
                        </span>

                        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                            From a small engineering beginning to{" "}
                            <span className="text-zinc-500">
                                industrial machinery.
                            </span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Central line */}
                        <div className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-orange-500 via-white/10 to-transparent md:left-1/2" />

                        <div className="space-y-16 md:space-y-24">
                            {/* 1996 */}
                            <div className="timeline-item relative grid gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0">
                                <div className="md:text-right">
                                    <span className="text-5xl font-black text-orange-500 md:text-6xl">
                                        1996
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-white">
                                        The Beginning
                                    </h3>

                                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400">
                                        Techno Machine Products started as a
                                        jigs and fixture design and
                                        manufacturing company.
                                    </p>
                                </div>

                                <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-orange-500 bg-[#0b0d10] shadow-[0_0_15px_rgba(249,115,22,0.7)] md:left-[calc(50%-5px)]" />
                            </div>

                            {/* Expansion */}
                            <div className="timeline-item relative grid gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0">
                                <div className="order-2">
                                    <h3 className="text-2xl font-semibold text-white">
                                        Machine Building
                                    </h3>

                                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400">
                                        The company expanded from component
                                        manufacturing into complete industrial
                                        machine design and fabrication.
                                    </p>
                                </div>

                                <div className="order-1 md:text-right">
                                    <span className="text-5xl font-black text-zinc-700 md:text-6xl">
                                        2000s
                                    </span>
                                </div>

                                <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-orange-500 bg-[#0b0d10] shadow-[0_0_15px_rgba(249,115,22,0.7)] md:left-[calc(50%-5px)]" />
                            </div>

                            {/* Abrasive */}
                            <div className="timeline-item relative grid gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0">
                                <div className="md:text-right">
                                    <span className="text-5xl font-black text-zinc-700 md:text-6xl">
                                        Growth
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-white">
                                        Abrasive Industry Solutions
                                    </h3>

                                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400">
                                        Development of specialized machinery
                                        for abrasive conversion, testing,
                                        grinding and related production
                                        applications.
                                    </p>
                                </div>

                                <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-orange-500 bg-[#0b0d10] shadow-[0_0_15px_rgba(249,115,22,0.7)] md:left-[calc(50%-5px)]" />
                            </div>

                            {/* Today */}
                            <div className="timeline-item relative grid gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0">
                                <div className="order-2">
                                    <h3 className="text-2xl font-semibold text-white">
                                        Today
                                    </h3>

                                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400">
                                        Techno Machine Products continues to
                                        develop standard, customized and
                                        automated machinery for modern
                                        industrial production.
                                    </p>
                                </div>

                                <div className="order-1 md:text-right">
                                    <span className="text-5xl font-black text-orange-500 md:text-6xl">
                                        NOW
                                    </span>
                                </div>

                                <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-orange-500 bg-[#0b0d10] shadow-[0_0_15px_rgba(249,115,22,0.7)] md:left-[calc(50%-5px)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                ENGINEERING PHILOSOPHY
            ====================================================== */}

            <section className="about-reveal py-36 md:py-48">
                <div className="container-main">
                    <div className="grid gap-20 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <span className="section-label">
                                Engineering Philosophy
                            </span>

                            <div className="mt-8 h-px w-20 bg-orange-500" />
                        </div>

                        <div>
                            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-6xl">
                                We don't simply build machines.
                                <br />
                                <span className="text-orange-500">
                                    We engineer solutions.
                                </span>
                            </h2>

                            <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
                                Every production environment is different.
                                Machine requirements, material behaviour,
                                cycle time, operator interaction and
                                production targets all influence the right
                                engineering solution.
                            </p>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
                                Our approach combines practical manufacturing
                                knowledge with mechanical engineering to create
                                machinery designed around real production
                                conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                VALUES / CAPABILITIES
            ====================================================== */}

            <section className="about-reveal border-y border-white/10 bg-[#0b0d10] py-36 md:py-48">
                <div className="container-main">
                    <div className="mb-20">
                        <span className="section-label">
                            What Defines Us
                        </span>

                        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                            Built on precision.
                            <br />
                            <span className="text-zinc-500">
                                Driven by performance.
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
                        {/* Card 1 */}
                        <div className="about-card group relative min-h-75 bg-[#0b0d10] p-8 transition-all duration-500 hover:bg-[#111419] md:p-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-orange-500 transition-all duration-500 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                                <Gauge size={20} />
                            </div>

                            <h3 className="mt-10 text-xl font-semibold">
                                Precision
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-500">
                                Engineering with attention to accuracy,
                                repeatability and consistent machine
                                performance.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="about-card group relative min-h-75 bg-[#0b0d10] p-8 transition-all duration-500 hover:bg-[#111419] md:p-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-orange-500 transition-all duration-500 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                                <Settings size={20} />
                            </div>

                            <h3 className="mt-10 text-xl font-semibold">
                                Customization
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-500">
                                Machines developed around individual
                                production requirements rather than generic
                                solutions.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="about-card group relative min-h-75 bg-[#0b0d10] p-8 transition-all duration-500 hover:bg-[#111419] md:p-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-orange-500 transition-all duration-500 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                                <Wrench size={20} />
                            </div>

                            <h3 className="mt-10 text-xl font-semibold">
                                Reliability
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-500">
                                Practical machine construction focused on
                                durability, serviceability and long-term
                                operation.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="about-card group relative min-h-75 bg-[#0b0d10] p-8 transition-all duration-500 hover:bg-[#111419] md:p-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-orange-500 transition-all duration-500 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                                <Factory size={20} />
                            </div>

                            <h3 className="mt-10 text-xl font-semibold">
                                Industry Focus
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-500">
                                Machinery designed with real industrial
                                production environments and requirements in
                                mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                WHY TECHNO
            ====================================================== */}

            <section className="about-reveal py-36 md:py-48">
                <div className="container-main">
                    <div className="grid gap-20 lg:grid-cols-[1fr_1fr] lg:items-center">
                        <div>
                            <span className="section-label">
                                Why Techno Machine Products
                            </span>

                            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                                Engineering that understands{" "}
                                <span className="text-orange-500">
                                    production.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400">
                                Our focus is not only on building equipment,
                                but on understanding the process behind the
                                equipment.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {[
                                "Application-focused machine design",
                                "Standard and customized machinery",
                                "Special purpose machine development",
                                "Abrasive conversion solutions",
                                "Industrial automation integration",
                                "Engineering support and service",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="group flex items-center gap-5 border-b border-white/10 pb-5"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-black">
                                        <Check size={14} />
                                    </div>

                                    <span className="text-sm text-zinc-300 transition-colors group-hover:text-white md:text-base">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                STATS
            ====================================================== */}

            <section className="about-reveal border-y border-white/10 bg-[#0b0d10] py-24 md:py-32">
                <div className="container-main">
                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
                        <div className="bg-[#0b0d10] p-8 md:p-12">
                            <div className="text-4xl font-black text-white md:text-5xl">
                                1996
                            </div>

                            <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                Established
                            </div>
                        </div>

                        <div className="bg-[#0b0d10] p-8 md:p-12">
                            <div className="text-4xl font-black text-orange-500 md:text-5xl">
                                20+
                            </div>

                            <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                Years Experience
                            </div>
                        </div>

                        <div className="bg-[#0b0d10] p-8 md:p-12">
                            <div className="text-4xl font-black text-white md:text-5xl">
                                SPM
                            </div>

                            <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                Machine Building
                            </div>
                        </div>

                        <div className="bg-[#0b0d10] p-8 md:p-12">
                            <div className="text-4xl font-black text-orange-500 md:text-5xl">
                                360°
                            </div>

                            <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                Engineering Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         

            {/* <section className="relative overflow-hidden py-40 md:py-56">
                <div className="grid-background absolute inset-0 opacity-25" />

                <div className="absolute left-1/2 top-1/2 h-112.5 w-112.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

                <div className="container-main relative text-center">
                    <span className="section-label justify-center">
                        Let's Build Something
                    </span>

                    <h2 className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
                        Have a production
                        <br />
                        <span className="text-orange-500">
                            challenge?
                        </span>
                    </h2>

                    <p className="mx-auto mt-10 max-w-xl text-base leading-8 text-zinc-500 md:text-lg">
                        Share your requirement with our engineering team and
                        explore the right machinery solution for your
                        application.
                    </p>

                    <Link
                        to="/contact"
                        className="group relative mt-11 inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-8 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)]"
                    >
                        <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[500%]" />

                        <span className="relative z-10">
                            Talk to Our Engineers
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                            <ArrowUpRight size={16} />
                        </span>
                    </Link>
                </div>
            </section>  */}
        </main>
    );
}

export default About;