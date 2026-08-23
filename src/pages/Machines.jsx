import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    ArrowDown,
    ArrowUpRight,
    Cog,
    Factory,
    Gauge,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import image1 from "../assets/Beltconversion.avif";
import image2 from "../assets/JumboConvertion.avif";
import image3 from "../assets/FlapConvertion_JPG.avif";
import image4 from "../assets/Testing.avif";
import image5 from "../assets/beltgrinding.jpeg";
import image6 from "../assets/disk-convertion.avif";

function Machines() {
    const pageRef = useRef(null);
    const gridRef = useRef(null);
    const glowRef = useRef(null);

    const machines = [
        {
            number: "01",
            title: "Belt Conversion",
            category: "Abrasive Conversion",
            description:
                "Advanced machinery designed for converting abrasive jumbo rolls and strips into high-quality abrasive belts with precision and consistency.",
            image: image1,
            icon: Gauge,
        },
        {
            number: "02",
            title: "Jumbo Conversion",
            category: "Material Conversion",
            description:
                "Industrial conversion systems engineered to process jumbo abrasive materials into sheets, strips and other production-ready formats.",
            image: image2,
            icon: Factory,
        },
        {
            number: "03",
            title: "Flap Conversion",
            category: "Flap Manufacturing",
            description:
                "Specialized machinery for manufacturing flap products including flap discs, flap wheels and related abrasive components.",
            image: image3,
            icon: Cog,
        },
        {
            number: "04",
            title: "Disc Conversion",
            category: "Disc Manufacturing",
            description:
                "Precision conversion systems designed for transforming abrasive jumbo rolls into accurately sized and finished abrasive discs.",
            image: image6,
            icon: Gauge,
        },
        {
            number: "05",
            title: "Testing Machines",
            category: "Testing & Quality",
            description:
                "Purpose-built testing equipment for evaluating abrasive product quality, performance, durability and production consistency.",
            image: image4,
            icon: Factory,
        },
        {
            number: "06",
            title: "Belt Grinding",
            category: "Grinding Technology",
            description:
                "Industrial belt grinding machines engineered for demanding production applications requiring controlled and consistent material removal.",
            image: image5,
            icon: Cog,
        },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            heroTimeline
                .from(".machines-eyebrow", {
                    y: 30,
                    opacity: 0,
                    duration: 0.7,
                })
                .from(
                    ".machines-title-line",
                    {
                        y: 90,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.12,
                    },
                    "-=0.35"
                )
                .from(
                    ".machines-description",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.5"
                )
                .from(
                    ".machines-hero-meta",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .from(
                    ".machine-hero-visual",
                    {
                        x: 80,
                        opacity: 0,
                        scale: 0.92,
                        duration: 1.1,
                    },
                    "-=0.9"
                );

            if (gridRef.current) {
                gsap.to(gridRef.current, {
                    backgroundPosition: "60px 60px",
                    duration: 18,
                    repeat: -1,
                    ease: "none",
                });
            }

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

            gsap.to(".machine-orb", {
                y: -18,
                duration: 3,
                repeat: -1,
                yoyo: true,
                stagger: 0.4,
                ease: "sine.inOut",
            });

            gsap.utils.toArray(".machine-page-card").forEach((card, index) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 0.9,
                    delay: index * 0.06,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        once: true,
                    },
                });
            });

            gsap.from(".machines-intro", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".machines-intro",
                    start: "top 82%",
                    once: true,
                },
            });

            gsap.from(".machines-cta", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".machines-cta",
                    start: "top 82%",
                    once: true,
                },
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
                <div
                    ref={gridRef}
                    className="grid-background absolute inset-0 opacity-50"
                />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.14),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(37,99,235,0.06),transparent_30%)]" />

                <div
                    ref={glowRef}
                    className="pointer-events-none absolute right-[8%] top-[20%] h-120 w-120 rounded-full bg-orange-500/10 blur-[140px]"
                />

                <div className="container-main relative flex min-h-[90vh] items-center py-32 lg:py-40">
                    <div className="grid w-full items-center gap-20 lg:grid-cols-[1fr_0.85fr] xl:gap-28">
                        {/* Hero content */}

                        <div className="relative z-10">
                            <div className="machines-eyebrow mb-8">
                                <span className="section-label">
                                    Engineering & Manufacturing
                                </span>
                            </div>

                            <div className="overflow-hidden">
                                <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.84] tracking-[-0.055em]">
                                    <span className="machines-title-line block">
                                        OUR
                                    </span>

                                    <span className="machines-title-line block text-orange-500">
                                        MACHINES.
                                    </span>
                                </h1>
                            </div>

                            <p className="machines-description mt-10 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                                Precision-built machinery for abrasive
                                conversion, industrial production, testing
                                and specialized manufacturing applications.
                            </p>

                            <div className="machines-hero-meta mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        06
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                                        Machine Categories
                                    </div>
                                </div>

                                <div className="h-10 w-px bg-white/10" />

                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        SPM
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                                        Special Purpose Machines
                                    </div>
                                </div>

                                <div className="h-10 w-px bg-white/10" />

                                <div>
                                    <div className="text-2xl font-bold text-orange-500">
                                        1996
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                                        Engineering Heritage
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero visual */}

                        <div className="machine-hero-visual relative hidden h-150 items-center justify-center lg:flex">
                            <div className="absolute h-117.5 w-117.5 rounded-full border border-white/5" />

                            <div className="absolute h-92.5 w-92.5 rounded-full border border-orange-500/9" />

                            <div className="absolute h-62.5 w-62.5 rounded-full border border-white/4" />

                            <div className="absolute h-87.5 w-87.5 rounded-full bg-orange-500/10 blur-[100px]" />

                            <div className="machine-orb absolute right-10 top-20 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.9)]" />

                            <div className="machine-orb absolute bottom-28 left-10 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />

                            <div className="relative z-10 w-107.5">
                                <div className="rounded-3xl border border-white/10 bg-[#101216]/80 p-4 shadow-2xl backdrop-blur-sm">
                                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[#08090b]">
                                        <img
                                            src={image1}
                                            alt="Belt Conversion Machine"
                                            className="h-full w-full object-contain p-6 opacity-80"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-[#08090b] via-transparent to-transparent" />

                                        <div className="absolute bottom-5 left-5">
                                            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500">
                                                Featured Machine
                                            </div>

                                            <div className="mt-2 text-lg font-semibold">
                                                Belt Conversion
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                        Explore Machines
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

            <section className="machines-intro border-t border-white/10 py-32 md:py-44">
                <div className="container-main">
                    <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] xl:gap-28">
                        <div>
                            <span className="section-label">
                                Our Capabilities
                            </span>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                                Built for precision.
                                <br />
                                <span className="text-zinc-500">
                                    Designed for production.
                                </span>
                            </h2>

                            <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
                                Our machinery combines practical engineering,
                                manufacturing expertise and application-driven
                                design to deliver dependable industrial
                                solutions. Every machine is developed with
                                production efficiency, accuracy and long-term
                                performance in mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                MACHINE GRID
            ====================================================== */}

            <section className="border-y border-white/10 bg-[#0b0d10] py-32 md:py-44">
                <div className="container-main">
                    <div className="mb-16 md:mb-20">
                        <span className="section-label">
                            Machine Portfolio
                        </span>

                        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                            Industrial systems for{" "}
                            <span className="text-orange-500">
                                every process.
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {machines.map((machine) => {
                            const Icon = machine.icon;

                            return (
                                <Link
                                    key={machine.number}
                                    to="/contact"
                                    className="machine-page-card group relative min-h-140 overflow-hidden rounded-3xl border border-white/10 bg-[#08090b] transition-all duration-700 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
                                >
                                    {/* Image */}

                                    <img
                                        src={machine.image}
                                        alt={`${machine.title} - Techno Machine Products`}
                                        className="absolute inset-0 h-full w-full object-contain p-12 opacity-45 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0 md:p-16"
                                    />

                                    {/* Image overlay */}

                                    <div className="absolute inset-0 bg-linear-to-b from-[#08090b]/20 via-[#08090b]/35 to-[#08090b]/95" />

                                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-orange-500/0 transition-all duration-700 group-hover:from-orange-500/10 group-hover:to-transparent" />

                                    {/* Top */}

                                    <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-8 md:p-10">
                                        <span className="text-xs font-medium tracking-widest text-zinc-500 transition-colors group-hover:text-orange-500">
                                            {machine.number}
                                        </span>

                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-zinc-300 backdrop-blur-md transition-all duration-500 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 group-hover:text-orange-500">
                                            <Icon size={17} />
                                        </div>
                                    </div>

                                    {/* Bottom */}

                                    <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
                                        <div className="mb-5 flex items-center gap-3">
                                            <span className="h-px w-8 bg-orange-500 transition-all duration-500 group-hover:w-14" />

                                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500">
                                                {machine.category}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                            {machine.title}
                                        </h3>

                                        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300/70 md:text-base">
                                            {machine.description}
                                        </p>

                                        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-500 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                                            Explore Machine

                                            <ArrowUpRight
                                                size={14}
                                                className="text-orange-500 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </div>
                                    </div>

                                    {/* Technical corners */}

                                    <div className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-orange-500/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="absolute left-5 top-5 h-5 w-5 border-l border-t border-orange-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="machines-cta relative overflow-hidden py-36 md:py-52">
                <div className="grid-background absolute inset-0 opacity-30" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

                <div className="container-main relative text-center">
                    <span className="section-label justify-center">
                        Custom Engineering
                    </span>

                    <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
                        Don't see the machine
                        <br />
                        <span className="text-orange-500">
                            you need?
                        </span>
                    </h2>

                    <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
                        Our engineering team can develop customized machinery
                        around your process, production requirements and
                        application.
                    </p>

                    <Link
                        to="/contact"
                        className="group relative mt-11 inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-8 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)]"
                    >
                        <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[500%]" />

                        <span className="relative z-10">
                            Request a Custom Machine
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

                    <div className="mt-12 flex items-center justify-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-700">
                        <span className="h-px w-8 bg-zinc-800" />
                        Engineered around your requirements
                        <span className="h-px w-8 bg-zinc-800" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Machines;