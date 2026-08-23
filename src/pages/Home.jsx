import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Cog,
    Factory,
    Gauge,
    MoveUpRight,
} from "lucide-react";
import gsap from "gsap";

import image1 from "../assets/Beltconversion.avif";
import image2 from "../assets/JumboConvertion.avif";
import image3 from "../assets/FlapConvertion_JPG.avif";
import image4 from "../assets/Testing.avif";
import image5 from "../assets/beltgrinding.jpeg";
import image6 from "../assets/disk-convertion.avif";

function Home() {
    const pageRef = useRef(null);
    const heroRef = useRef(null);
    const gridRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            tl.from(".hero-eyebrow", {
                y: 30,
                opacity: 0,
                duration: 0.8,
            })
                .from(
                    ".hero-title-line",
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.12,
                    },
                    "-=0.45"
                )
                .from(
                    ".hero-description",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-buttons",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-machine",
                    {
                        x: 100,
                        opacity: 0,
                        scale: 0.9,
                        duration: 1.2,
                    },
                    "-=1"
                )
                .from(
                    ".hero-stat",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.1,
                    },
                    "-=0.7"
                );

            // Animated background grid
            if (gridRef.current) {
                gsap.to(gridRef.current, {
                    backgroundPosition: "60px 60px",
                    duration: 18,
                    repeat: -1,
                    ease: "none",
                });
            }

            // Orange glow animation
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

            // Floating decorative orbs
            gsap.to(".floating-orb", {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                stagger: 0.5,
                ease: "sine.inOut",
            });

            // Section reveal
            gsap.utils.toArray(".reveal-section").forEach((section) => {
                gsap.from(section, {
                    y: 50,
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

            // Machine cards reveal
            gsap.utils.toArray(".machine-card").forEach((card, index) => {
                gsap.from(card, {
                    y: 45,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        once: true,
                    },
                });
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const machines = [
        {
            number: "01",
            title: "Belt Conversion",
            text: "Machinery for converting jumbo strips into abrasive belts.",
            image: image1,
            link: "/belt-conversion",
            icon: Gauge,
        },
        {
            number: "02",
            title: "Jumbo Conversion",
            text: "Solutions for converting jumbo material into abrasive sheets and strips.",
            image: image2,
            icon: Factory,
        },
        {
            number: "03",
            title: "Flap Conversion",
            text: "Machinery for flap products including flap discs and wheels.",
            image: image3,
            icon: Cog,
        },
        {
            number: "04",
            title: "Disc Conversion",
            text: "Systems for converting jumbo rolls into abrasive discs.",
            image: image6,
            icon: Gauge,
        },
        {
            number: "05",
            title: "Testing Machines",
            text: "Equipment for testing the quality and performance of abrasive products.",
            image: image4,
            icon: Factory,
        },
        {
            number: "06",
            title: "Belt Grinding",
            text: "Industrial belt grinding machines designed for production applications.",
            image: image5,
            icon: Cog,
        },
    ];

    return (
        <main
            ref={pageRef}
            className="overflow-hidden bg-[#08090b] text-white"
        >
            {/* =====================================================
                HERO
            ====================================================== */}
            <section
                ref={heroRef}
                className="relative min-h-screen overflow-hidden"
            >
                {/* Background grid */}
                <div
                    ref={gridRef}
                    className="grid-background absolute inset-0 opacity-50"
                />

                {/* Background gradients */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(249,115,22,0.13),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(37,99,235,0.07),transparent_30%)]" />

                {/* Main glow */}
                <div
                    ref={glowRef}
                    className="pointer-events-none absolute right-[10%] top-[25%] h-125 w-125 rounded-full bg-orange-500/10 blur-[140px]"
                />

                <div className="container-main relative flex min-h-screen items-center py-32 lg:py-24">
                    <div className="grid w-full items-center gap-20 lg:grid-cols-[1.05fr_0.95fr] xl:gap-28">
                        {/* =================================================
                            HERO COPY
                        ================================================== */}
                        <div className="relative z-10">
                            <div className="hero-eyebrow mb-8">
                                <span className="section-label">
                                    Engineering Since 1996
                                </span>
                            </div>

                            <div className="overflow-hidden">
                                <h1 className="text-balance text-[clamp(3.7rem,8vw,8.5rem)] font-black leading-[0.82] tracking-[-0.055em] text-white">
                                    <span className="hero-title-line block">
                                        ENGINEERED
                                    </span>

                                    <span className="hero-title-line block text-orange-500">
                                        FOR
                                    </span>

                                    <span className="hero-title-line block">
                                        INDUSTRY.
                                    </span>
                                </h1>
                            </div>

                            <p className="hero-description mt-10 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
                                Special purpose machinery, abrasive conversion
                                systems and automated manufacturing solutions
                                engineered around your production requirements.
                            </p>

                            {/* =================================================
                                HERO BUTTONS
                            ================================================== */}
                            <div className="hero-buttons mt-11 flex flex-wrap gap-4">
                                {/* Explore Machines */}
                                <Link
                                    to="/machines"
                                    className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-7 text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_0_rgba(249,115,22,0)] transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)]"
                                >
                                    {/* Shine */}
                                    <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />

                                    <span className="relative z-10">
                                        Explore Machines
                                    </span>

                                    {/* Arrow */}
                                    <span className="relative z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black/10">
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6"
                                        />

                                        <ArrowUpRight
                                            size={16}
                                            className="absolute -translate-x-6 translate-y-6 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                                        />
                                    </span>

                                    {/* Bottom highlight */}
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-500 group-hover:w-1/2" />
                                </Link>

                                {/* Request Quote */}
                                <Link
                                    to="/contact"
                                    className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/4 px-7 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-orange-500/10 hover:shadow-[0_15px_45px_rgba(249,115,22,0.15)]"
                                >
                                    {/* Orange sweep */}
                                    <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-orange-500/20 transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />

                                    {/* Indicator */}
                                    <span className="relative z-10 flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500/40" />

                                        <span className="relative h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                                    </span>

                                    <span className="relative z-10">
                                        Request a Quote
                                    </span>

                                    {/* Arrow */}
                                    <span className="relative z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5">
                                        <ArrowRight
                                            size={16}
                                            className="transition-all duration-500 group-hover:translate-x-6"
                                        />

                                        <ArrowRight
                                            size={16}
                                            className="absolute -translate-x-6 transition-all duration-500 group-hover:translate-x-0"
                                        />
                                    </span>
                                </Link>
                            </div>

                            {/* =================================================
                                STATS
                            ================================================== */}
                            <div className="mt-16 grid max-w-2xl grid-cols-3 border-y border-white/10 py-7">
                                <div className="hero-stat border-r border-white/10 pr-5">
                                    <div className="text-2xl font-bold text-white md:text-3xl">
                                        20+
                                    </div>

                                    <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                                        Years Experience
                                    </div>
                                </div>

                                <div className="hero-stat px-5 md:px-8">
                                    <div className="text-2xl font-bold text-white md:text-3xl">
                                        SPM
                                    </div>

                                    <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                                        Machine Building
                                    </div>
                                </div>

                                <div className="hero-stat border-l border-white/10 pl-5 md:pl-8">
                                    <div className="text-2xl font-bold text-white md:text-3xl">
                                        360°
                                    </div>

                                    <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                                        Engineering Support
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            MACHINE VISUAL
                        ================================================== */}
                        <div className="hero-machine relative hidden min-h-175 items-center justify-center lg:flex xl:min-h-190">
                            {/* Technical circles */}
                            <div className="absolute h-130 w-130 rounded-full border border-white/5" />

                            <div className="absolute h-105 w-105 rounded-full border border-orange-500/8" />

                            <div className="absolute h-75 w-75 rounded-full border border-white/[0.035]" />

                            {/* Glow behind machine */}
                            <div className="absolute h-100 w-100 rounded-full bg-orange-500/10 blur-[110px]" />

                            {/* Decorative marks */}
                            <div className="floating-orb absolute right-4 top-28 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.8)]" />

                            <div className="floating-orb absolute bottom-40 left-10 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />

                            {/* =================================================
                                MACHINE ILLUSTRATION
                            ================================================== */}
                            <div className="relative z-10 w-full max-w-142.5">
                                <div className="absolute inset-10 rounded-full bg-orange-500/10 blur-[90px]" />

                                <div className="relative mx-auto aspect-square max-w-125">
                                    {/* Main body */}
                                    <div className="absolute left-[15%] top-[27%] h-[35%] w-[65%] -skew-y-2 border border-white/10 bg-linear-to-br from-zinc-800 via-zinc-900 to-black shadow-2xl">
                                        {/* Orange strip */}
                                        <div className="absolute left-0 top-0 h-2 w-full bg-orange-500" />

                                        {/* Machine window */}
                                        <div className="absolute left-[12%] top-[20%] h-[45%] w-[48%] border border-white/10 bg-black/60">
                                            <div className="absolute inset-3 border border-orange-500/20">
                                                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/40">
                                                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.9)]" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Control panel */}
                                        <div className="absolute right-[7%] top-[17%] h-[50%] w-[25%] border border-white/10 bg-zinc-950">
                                            <div className="m-3 h-16 border border-white/10 bg-zinc-900">
                                                <div className="m-2 h-3 w-12 bg-orange-500/50" />
                                                <div className="m-2 h-2 w-16 bg-white/10" />
                                                <div className="m-2 h-2 w-10 bg-white/10" />
                                            </div>

                                            <div className="mx-3 mt-5 flex gap-2">
                                                <span className="h-2 w-2 rounded-full bg-orange-500" />
                                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Legs */}
                                    <div className="absolute bottom-[24%] left-[23%] h-[22%] w-[7%] skew-x-[-8deg] bg-zinc-800" />

                                    <div className="absolute bottom-[22%] right-[24%] h-[24%] w-[7%] skew-x-[8deg] bg-zinc-800" />

                                    {/* Base */}
                                    <div className="absolute bottom-[20%] left-[13%] h-5 w-[75%] skew-x-[-10deg] border border-white/10 bg-zinc-800" />

                                    {/* Conveyor */}
                                    <div className="absolute left-[27%] top-[48%] h-[5%] w-[43%] rotate-[8deg] bg-orange-500/80 shadow-[0_0_25px_rgba(249,115,22,0.2)]" />

                                    {/* Technical line */}
                                    <div className="absolute -right-5 top-[20%] h-px w-32 bg-orange-500/40" />

                                    <div className="absolute -right-5 top-[20%] translate-x-full whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.2em] text-orange-500">
                                        Precision System
                                    </div>
                                </div>
                            </div>

                            {/* Specification card */}
                            <div className="glass orange-glow absolute bottom-12 right-0 z-20 w-56 rounded-2xl border border-white/10 p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                        Engineering
                                    </span>

                                    <Cog
                                        size={15}
                                        className="text-orange-500"
                                    />
                                </div>

                                <div className="text-sm font-semibold text-white">
                                    Custom Machine Solutions
                                </div>

                                <div className="mt-2 text-[10px] leading-5 text-zinc-500">
                                    Designed around your production,
                                    performance and automation requirements.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
                        Scroll to explore
                    </span>

                    <ArrowDown
                        size={15}
                        className="animate-bounce text-orange-500"
                    />
                </div>
            </section>

            {/* =====================================================
                INTRO
            ====================================================== */}
            <section className="reveal-section relative border-t border-white/10 py-36 md:py-48">
                <div className="container-main">
                    <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr] xl:gap-28">
                        <div>
                            <span className="section-label">
                                Who We Are
                            </span>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl lg:text-7xl">
                                From machine building to{" "}
                                <span className="text-orange-500">
                                    intelligent industrial solutions.
                                </span>
                            </h2>

                            <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
                                Techno Machine Products began as a jigs and
                                fixture design and manufacturing company in
                                1996. Today, the company serves abrasive
                                manufacturers and industrial customers with
                                standard machinery, customized special purpose
                                machines and automated solutions.
                            </p>

                            <Link
                                to="/about"
                                className="group mt-10 inline-flex items-center gap-3 border-b border-orange-500/40 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-orange-500"
                            >
                                Discover Our Story

                                <MoveUpRight
                                    size={15}
                                    className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CAPABILITIES
            ====================================================== */}
            <section className="relative border-y border-white/10 bg-[#0b0d10] py-36 md:py-48">
                <div className="container-main">
                    {/* Section heading */}
                    <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end xl:mb-24">
                        <div>
                            <span className="section-label">
                                What We Build
                            </span>

                            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                                Machines engineered around{" "}
                                <span className="text-zinc-500">
                                    production.
                                </span>
                            </h2>
                        </div>

                        <Link
                            to="/machines"
                            className="group flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:text-white"
                        >
                            View All Machines

                            <ArrowRight
                                size={16}
                                className="text-orange-500 transition-transform duration-300 group-hover:translate-x-2"
                            />
                        </Link>
                    </div>

                   {/* =====================================================
    MACHINE GRID
===================================================== */}
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {machines.map((item) => {
        const Icon = item.icon;

        return (
            <Link
                key={item.number}
                to={item.link}
                className="machine-card group relative block min-h-120 overflow-hidden rounded-2xl p-px"
            >
                {/* Animated outer gradient */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_260px_at_0%_0%,rgba(249,115,22,0.65),#17191c_55%,#08090b_100%)] opacity-80 transition-all duration-700 group-hover:opacity-100" />

                {/* Moving glowing dot */}
                <span className="machine-card-dot absolute right-[10%] top-[10%] z-30 h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,1)]" />

                {/* Inner card */}
                <div className="relative z-10 flex h-full min-h-119.5 flex-col overflow-hidden rounded-[15px] border border-white/8 bg-[radial-gradient(circle_320px_at_0%_0%,#25282b,#0c0e10_55%,#08090b_100%)]">

                    {/* =================================================
                        ANIMATED LIGHT RAY
                    ================================================= */}
                    <div className="machine-ray pointer-events-none absolute left-[-15%] top-[-5%] h-12 w-[75%] rotate-40 rounded-full bg-orange-300/20 opacity-60 blur-xl transition-all duration-700 group-hover:bg-orange-400/30 group-hover:opacity-100" />

                    {/* =================================================
                        TECHNICAL GRID
                    ================================================= */}
                    <div className="pointer-events-none absolute inset-[10%] border border-white/5" />

                    <div className="pointer-events-none absolute left-[10%] right-[10%] top-[10%] h-px bg-linear-to-r from-orange-500/60 via-white/10 to-transparent" />

                    <div className="pointer-events-none absolute bottom-[10%] left-[10%] right-[10%] h-px bg-white/6" />

                    <div className="pointer-events-none absolute bottom-[10%] left-[10%] top-[10%] w-px bg-linear-to-b from-orange-500/30 via-white/4 to-transparent" />

                    <div className="pointer-events-none absolute bottom-[10%] right-[10%] top-[10%] w-px bg-white/4" />

                    {/* =================================================
                        MACHINE IMAGE
                    ================================================= */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        {/* Image glow */}
                        <div className="absolute h-56 w-56 rounded-full bg-orange-500/10 blur-[90px] transition-all duration-700 group-hover:bg-orange-500/20" />

                        <img
                            src={item.image}
                            alt={`${item.title} - Techno Machine Products`}
                            className="relative z-10 h-full w-full object-contain p-12 opacity-45 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-85 group-hover:grayscale-0 md:p-14"
                        />

                        {/* Image dark overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#08090b]" />
                    </div>

                    {/* =================================================
                        TOP CONTENT
                    ================================================= */}
                    <div className="relative z-20 flex items-start justify-between p-7 md:p-8">

                        {/* Number */}
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 transition-colors duration-500 group-hover:text-orange-500">
                                {item.number}
                            </span>

                            <span className="h-px w-7 bg-orange-500/40 transition-all duration-500 group-hover:w-12 group-hover:bg-orange-500" />
                        </div>

                        {/* Icon */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/30 text-zinc-400 backdrop-blur-md transition-all duration-500 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 group-hover:text-orange-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]">
                            <Icon size={17} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* =================================================
                        MACHINE INFORMATION
                    ================================================= */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-7 md:p-8">

                        {/* Category */}
                        <div className="mb-4 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-orange-500">
                                Machine Technology
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                            {item.text}
                        </p>

                        {/* Explore Button */}
                        <div className="mt-6 flex items-center">
                            <span className="group/btn relative inline-flex h-10 items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/4 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-sm transition-all duration-500 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 group-hover:text-orange-400">

                                {/* Button glow */}
                                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-orange-500/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                               
                                <span className="relative z-10">
                                    Explore Machine
                                </span>

                                <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-black">
                                    <ArrowUpRight
                                        size={13}
                                        className="transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                                    />
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* =================================================
                        HOVER BORDER
                    ================================================= */}
                    <div className="pointer-events-none absolute inset-0 rounded-[15px] border border-transparent transition-all duration-700 group-hover:border-orange-500/30 group-hover:shadow-[inset_0_0_40px_rgba(249,115,22,0.04)]" />

                    {/* =================================================
                        CORNER DETAILS
                    ================================================= */}
                    <div className="absolute bottom-5 right-5 z-30 h-4 w-4 border-b border-r border-orange-500/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    <div className="absolute left-5 top-5 z-30 h-4 w-4 border-l border-t border-orange-500/20 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                </div>
            </Link>
        );
    })}
</div>
                </div>
            </section>
            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="relative overflow-hidden py-40 md:py-56">
                {/* Grid */}
                <div className="grid-background absolute inset-0 opacity-30" />

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

                <div className="container-main relative text-center">
                    <span className="section-label justify-center">
                        Start a Conversation
                    </span>

                    <h2 className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-tighter text-white md:text-8xl lg:text-[9rem]">
                        Have a machine
                        <br />
                        <span className="text-orange-500">
                            requirement?
                        </span>
                    </h2>

                    <p className="mx-auto mt-10 max-w-xl text-base leading-8 text-zinc-500 md:text-lg">
                        Tell us about your production requirement and let our
                        engineering team work toward the right solution.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="group relative mt-11 inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-8 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)]"
                    >
                        {/* Shine */}
                        <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[500%]" />

                        <span className="relative z-10">
                            Talk to Our Engineers
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black/10">
                            <ArrowUpRight
                                size={16}
                                className="transition-all duration-500 group-hover:translate-x-5 group-hover:-translate-y-5"
                            />

                            <ArrowUpRight
                                size={16}
                                className="absolute -translate-x-5 translate-y-5 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                            />
                        </span>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;