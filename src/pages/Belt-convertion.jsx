import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    Cog,
    Factory,
    Gauge,
    MoveUpRight,
    X,
} from "lucide-react";

// ============================================================
// MACHINE IMAGES
// ============================================================

import image1 from "../assets/AutoLCM-01.avif";
import image2 from "../assets/Manual_LCM.avif";
import image3 from "../assets/Mini_Belt_Slitting.avif";
import image4 from "../assets/Belt_Slitting_Machine.avif";
import image5 from "../assets/Belt_Press.avif";
import image6 from "../assets/Belt_Press_2.avif";
import image7 from "../assets/Wide_belt.avif";

// ============================================================
// CATALOGUE IMAGES
// CHANGE THESE FILENAMES TO YOUR ACTUAL FILE NAMES
// ============================================================

import catalog1 from "../assets/lcm_catlog.avif";
import catalog2 from "../assets/MLCM_catlog.avif";
import catalog3 from "../assets/mbs_catlog.avif";
import catalog4 from "../assets/bsm_catlog.avif";
import catalog5 from "../assets/belt-1-catlog.avif";
import catalog6 from "../assets/belt-2-catlog.avif";
import catalog7 from "../assets/wide-catlog.avif";

// ============================================================
// MACHINE DATA
// ============================================================

const machines = [
    {
        id: 1,
        number: "01",
        name: "Auto-Length Cutting Machine",
        model: "LC-01-350",
        category: "Belt Conversion",
        description:
            "Automatic belt length cutting machine designed for accurate and repeatable abrasive belt production.",
        image: image1,
        catalogue: catalog1,
        icon: Gauge,
    },

    {
        id: 2,
        number: "02",
        name: "Manual-Length Cutting Machine",
        model: "MLC-01-350",
        category: "Belt Conversion",
        description:
            "Manual length cutting system designed for reliable abrasive belt cutting operations.",
        image: image2,
        catalogue: catalog2,
        icon: Cog,
    },

    {
        id: 3,
        number: "03",
        name: "Mini Belt Slitting Machine",
        model: "BS-MB-300",
        category: "Belt Conversion",
        description:
            "Compact belt slitting machine for precise and efficient abrasive material conversion.",
        image: image3,
        catalogue: catalog3,
        icon: Factory,
    },

    {
        id: 4,
        number: "04",
        name: "Belt Slitting Machine",
        model: "BS-300/5000",
        category: "Belt Conversion",
        description:
            "Industrial belt slitting machine engineered for high-quality abrasive belt production.",
        image: image4,
        catalogue: catalog4,
        icon: Gauge,
    },

    {
        id: 5,
        number: "05",
        name: "Belt Press",
        model: "BP-HP15-450",
        category: "Belt Conversion",
        description:
            "Heavy-duty belt pressing system developed for reliable abrasive belt joining and finishing.",
        image: image5,
        catalogue: catalog5,
        icon: Cog,
    },

    {
        id: 6,
        number: "06",
        name: "Belt Press",
        model: "BPS-PN15-450",
        category: "Belt Conversion",
        description:
            "Pneumatic belt press designed for consistent and controlled production performance.",
        image: image6,
        catalogue: catalog6,
        icon: Factory,
    },

    {
        id: 7,
        number: "07",
        name: "Wide Belt Length Cutting Machine",
        model: "RLC-01-1650",
        category: "Special Purpose",
        description:
            "Wide belt cutting solution developed for processing large abrasive belt widths with precision.",
        image: image7,
        catalogue: catalog7,
        icon: Gauge,
    },
];

// ============================================================
// CATEGORIES
// ============================================================

const categories = [
    "All",
    "Belt Conversion",
    "Jumbo Conversion",
    "Flap Conversion",
    "Disc Conversion",
    "Testing",
    "Grinding",
    "Special Purpose",
];

// ============================================================
// COMPONENT
// ============================================================

function BeltConversion() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Selected machine for catalogue popup
    const [selectedMachine, setSelectedMachine] = useState(null);

    // ========================================================
    // FILTER MACHINES
    // ========================================================

    const filteredMachines =
        activeCategory === "All"
            ? machines
            : machines.filter(
                  (machine) => machine.category === activeCategory
              );

    // ========================================================
    // SCROLL TO TOP
    // ========================================================

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);

    // ========================================================
    // CLOSE POPUP WITH ESC KEY
    // ========================================================

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedMachine(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // ========================================================
    // LOCK BODY SCROLL WHEN POPUP IS OPEN
    // ========================================================

    useEffect(() => {
        if (selectedMachine) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedMachine]);

    // ========================================================
    // RENDER
    // ========================================================

    return (
        <main className="min-h-screen overflow-hidden bg-[#08090b] text-white">

            {/* ==================================================
                HERO
            ================================================== */}

            <section className="relative border-b border-white/10">

                {/* Background Grid */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Orange Glow */}

                <div className="pointer-events-none absolute left-1/2 top-0 h-75 w-125 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[90px]" />

                {/* Hero */}

                <div className="container-main relative py-28 md:py-36">

                    <div className="mx-auto max-w-5xl text-center">

                        {/* Label */}

                        <span className="section-label justify-center">
                            Our Machinery
                        </span>

                        {/* Heading */}

                        <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">

                            MACHINES

                            <br />

                            <span className="text-orange-500">
                                BUILT TO PERFORM.
                            </span>

                        </h1>

                        {/* Description */}

                        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
                            Explore our range of standard machinery,
                            conversion systems and special purpose equipment
                            engineered for demanding industrial applications.
                        </p>

                    </div>

                </div>
            </section>

            {/* ==================================================
                MACHINE CATALOGUE
            ================================================== */}

            <section className="relative py-20 md:py-28">

                <div className="container-main">

                    {/* ==================================================
                        HEADER
                    ================================================== */}

                    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                        <div>

                            <span className="section-label">
                                Standard Machinery
                            </span>

                            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">

                                Explore our{" "}

                                <span className="text-zinc-500">
                                    machines.
                                </span>

                            </h2>

                        </div>

                        {/* Count */}

                        <div className="text-sm text-zinc-500">

                            {String(filteredMachines.length).padStart(
                                2,
                                "0"
                            )}{" "}

                            machines

                        </div>

                    </div>

                    {/* ==================================================
                        FILTERS
                    ================================================== */}

                    <div className="mb-12 mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

                        {categories.map((category) => {

                            const active =
                                activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                    className={`shrink-0 rounded-full border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
                                        active
                                            ? "border-orange-500 bg-orange-500 text-black"
                                            : "border-white/10 bg-white/3 text-zinc-400 hover:border-orange-500/40 hover:text-white"
                                    }`}
                                >
                                    {category}
                                </button>
                            );
                        })}

                    </div>

                    {/* ==================================================
                        MACHINE GRID
                    ================================================== */}

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                        {filteredMachines.map((machine) => {

                            const Icon = machine.icon;

                            return (
                                <article
                                    key={machine.id}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0e11] transition-transform duration-300 hover:-translate-y-1 hover:border-orange-500/40"
                                >

                                    {/* ==================================================
                                        MACHINE IMAGE
                                    ================================================== */}

                                    <div className="relative h-70 overflow-hidden">

                                        {/* Glow */}

                                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[60px]" />

                                        {/* Machine Image */}

                                        <img
                                            src={machine.image}
                                            alt={`${machine.name} ${machine.model}`}
                                            loading="lazy"
                                            decoding="async"
                                            className="relative z-10 h-full w-full object-contain p-7 transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Bottom Gradient */}

                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#0c0e11] to-transparent" />

                                        {/* Number */}

                                        <span className="absolute left-5 top-5 z-20 text-[10px] font-bold tracking-[0.2em] text-zinc-600">
                                            {machine.number}
                                        </span>

                                        {/* Icon */}

                                        <div className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-400">
                                            <Icon size={16} />
                                        </div>

                                    </div>

                                    {/* ==================================================
                                        CARD CONTENT
                                    ================================================== */}

                                    <div className="px-6 pb-6">

                                        {/* Category */}

                                        <div className="mb-3 flex items-center gap-3">

                                            <span className="h-px w-7 bg-orange-500" />

                                            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-500">
                                                {machine.category}
                                            </span>

                                        </div>

                                        {/* Name */}

                                        <h3 className="text-xl font-semibold tracking-tight">
                                            {machine.name}
                                        </h3>

                                        {/* Model */}

                                        <div className="mt-1 text-sm text-zinc-500">
                                            {machine.model}
                                        </div>

                                        {/* Description */}

                                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-500">
                                            {machine.description}
                                        </p>

                                        {/* ==================================================
                                            VIEW MACHINE
                                        ================================================== */}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedMachine(machine)
                                            }
                                            className="mt-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-orange-500"
                                        >

                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">

                                                <ArrowUpRight
                                                    size={15}
                                                />

                                            </span>

                                            View Machine

                                        </button>

                                    </div>

                                </article>
                            );
                        })}

                    </div>

                    {/* ==================================================
                        EMPTY STATE
                    ================================================== */}

                    {filteredMachines.length === 0 && (

                        <div className="flex min-h-62.5 items-center justify-center rounded-2xl border border-white/10">

                            <div className="text-center">

                                <Cog
                                    size={32}
                                    className="mx-auto text-zinc-600"
                                />

                                <p className="mt-4 text-sm text-zinc-500">
                                    No machines found.
                                </p>

                            </div>

                        </div>
                    )}

                </div>

            </section>

            {/* ==================================================
                ENGINEERING CTA
            ================================================== */}

            <section className="relative overflow-hidden border-t border-white/10 py-28 md:py-36">

                {/* Grid */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Glow */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-75 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

                {/* CTA */}

                <div className="container-main relative text-center">

                    <span className="section-label justify-center">
                        Need Something Custom?
                    </span>

                    <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">

                        Your requirement.

                        <br />

                        <span className="text-orange-500">
                            Our engineering.
                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-zinc-500">
                        We design and manufacture special purpose machinery
                        around your production process, performance targets
                        and automation requirements.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-9 inline-flex h-14 items-center gap-4 rounded-full bg-orange-500 px-7 text-xs font-bold uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:-translate-y-1"
                    >

                        Discuss Your Requirement

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                            <MoveUpRight size={16} />
                        </span>

                    </Link>

                </div>

            </section>

            {/* ==================================================
                MACHINE CATALOGUE POPUP
            ================================================== */}

            {selectedMachine && (

                <div
                    className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedMachine(null)}
                >

                    {/* ==================================================
                        POPUP CONTAINER
                    ================================================== */}

                    <div
                        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0c0e11] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* Orange Top Border */}

                        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-orange-500" />

                        {/* ==================================================
                            CLOSE BUTTON
                        ================================================== */}

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedMachine(null)
                            }
                            aria-label="Close catalogue"
                            className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-zinc-300 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                        >
                            <X size={20} />
                        </button>

                        {/* ==================================================
                            POPUP CONTENT
                        ================================================== */}

                        <div className="grid md:grid-cols-2">

                            {/* ==================================================
                                SEPARATE CATALOGUE IMAGE
                            ================================================== */}

                            <div className="relative flex min-h-100 items-center justify-center overflow-hidden bg-[#08090b] p-6 md:min-h-137.5">

                                {/* Background Grid */}

                                <div
                                    className="pointer-events-none absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                                        backgroundSize:
                                            "50px 50px",
                                    }}
                                />

                                {/* Orange Glow */}

                                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[80px]" />

                                {/* ==================================================
                                    CATALOGUE IMAGE

                                    IMPORTANT:
                                    This uses catalogue, NOT image
                                ================================================== */}

                                {selectedMachine.catalogue ? (
                                    <img
                                        src={selectedMachine.catalogue}
                                        alt={`${selectedMachine.name} catalogue`}
                                        className="relative z-10 max-h-130 w-full object-contain"
                                    />
                                ) : (
                                    <div className="relative z-10 text-center">

                                        <Cog
                                            size={40}
                                            className="mx-auto text-zinc-600"
                                        />

                                        <p className="mt-4 text-sm text-zinc-500">
                                            Catalogue image not
                                            available.
                                        </p>

                                    </div>
                                )}

                                {/* Machine Number */}

                                <span className="absolute bottom-5 left-6 z-20 text-[10px] font-bold tracking-[0.2em] text-zinc-600">
                                    MACHINE{" "}
                                    {selectedMachine.number}
                                </span>

                            </div>

                            {/* ==================================================
                                MACHINE INFORMATION
                            ================================================== */}

                            <div className="flex flex-col justify-center p-7 md:p-10">

                                {/* Category */}

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-orange-500" />

                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500">
                                        {selectedMachine.category}
                                    </span>

                                </div>

                                {/* Machine Name */}

                                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                                    {selectedMachine.name}
                                </h2>

                                {/* Model */}

                                <div className="mt-4 inline-flex w-fit rounded-full border border-white/10 bg-white/3 px-4 py-2 text-xs text-zinc-400">

                                    Model:

                                    <span className="ml-2 font-semibold text-white">
                                        {selectedMachine.model}
                                    </span>

                                </div>

                                {/* Description */}

                                <p className="mt-7 text-sm leading-7 text-zinc-400">
                                    {selectedMachine.description}
                                </p>

                                {/* Divider */}

                                <div className="my-7 h-px bg-white/10" />

                                {/* Details */}

                                <div className="grid grid-cols-2 gap-5">

                                    <div>

                                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                            Machine No.
                                        </p>

                                        <p className="mt-2 text-sm font-medium text-white">
                                            {selectedMachine.number}
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                                            Category
                                        </p>

                                        <p className="mt-2 text-sm font-medium text-white">
                                            {selectedMachine.category}
                                        </p>

                                    </div>

                                </div>

                                {/* ==================================================
                                    BUTTONS
                                ================================================== */}

                                <div className="mt-8 flex flex-wrap gap-3">

                                    {/* Close */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedMachine(
                                                null
                                            )
                                        }
                                        className="rounded-full border border-white/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-300 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                                    >
                                        Close Catalogue
                                    </button>

                                    {/* Enquire */}

                                    <Link
                                        to="/contact"
                                        onClick={() =>
                                            setSelectedMachine(
                                                null
                                            )
                                        }
                                        className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:-translate-y-0.5"
                                    >

                                        Enquire Now

                                        <MoveUpRight
                                            size={14}
                                        />

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            )}

        </main>
    );
}

export default BeltConversion;