import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
    
    
   
} from "lucide-react";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#07080a] text-white">
            {/* =====================================================
                BACKGROUND EFFECTS
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="grid-background absolute inset-0" />
            </div>

            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

            <div className="container-main relative">

                {/* =================================================
                    TOP CTA
                ================================================== */}

                <div className="border-b border-white/10 py-20 md:py-28">
                    <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

                        <div>
                            <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                                <span className="h-px w-8 bg-orange-500" />
                                Let's Build Together
                            </span>

                            <h2 className="max-w-4xl text-4xl font-semibold leading-none tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                                Engineering your
                                <span className="text-orange-500">
                                    {" "}next solution.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
                                Have a production requirement, automation
                                challenge or special purpose machine
                                requirement? Talk to our engineering team.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            onClick={scrollToTop}
                            className="group relative inline-flex h-14 w-fit items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-7 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_15px_45px_rgba(249,115,22,0.3)]"
                        >
                            {/* Shine animation */}
                            <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[180%] skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[500%]" />

                            <span className="relative z-10">
                                Request a Quote
                            </span>

                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* =================================================
                    MAIN FOOTER
                ================================================== */}

                <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr] lg:gap-16">

                    {/* =================================================
                        COMPANY
                    ================================================== */}

                    <div>
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="group inline-flex items-center gap-3"
                        >
                            {/* TM Logo */}
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-lg font-black text-orange-500 transition-all duration-500 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black">
                                TM
                            </div>

                            <div>
                                <div className="text-sm font-bold tracking-[0.12em] text-white">
                                    TECHNO MACHINE
                                </div>

                                <div className="text-[9px] font-medium tracking-[0.28em] text-zinc-500">
                                    PRODUCTS
                                </div>
                            </div>
                        </Link>

                        <p className="mt-7 max-w-sm text-sm leading-7 text-zinc-500">
                            Special purpose machinery, abrasive conversion
                            systems and automated industrial solutions
                            engineered around your production requirements.
                        </p>

                        {/* Social Links */}
                        <div className="mt-8 flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2 text-zinc-500 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500"
                            >
                                {/* <Linkedin
                                    size={15}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                /> */}
                            </a>

                            {/* <a
                                href="#"
                                aria-label="Instagram"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2 text-zinc-500 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500"
                            >
                                <Instagram
                                    size={15}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2 text-zinc-500 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500"
                            >
                                <Facebook
                                    size={15}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </a> */}

                        </div>
                    </div>

                    {/* =================================================
                        QUICK LINKS
                    ================================================== */}

                    <div>
                        <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                            Navigation
                        </h3>

                        <nav className="flex flex-col gap-4">

                            <Link
                                to="/"
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                            >
                                Home
                                <ArrowUpRight
                                    size={12}
                                    className="text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                />
                            </Link>

                            <Link
                                to="/about"
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                            >
                                About Us
                                <ArrowUpRight
                                    size={12}
                                    className="text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                />
                            </Link>

                            <Link
                                to="/machines"
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                            >
                                Machines
                                <ArrowUpRight
                                    size={12}
                                    className="text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                />
                            </Link>

                            <Link
                                to="/services"
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                            >
                                Services
                                <ArrowUpRight
                                    size={12}
                                    className="text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                />
                            </Link>

                            <Link
                                to="/contact"
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                            >
                                Contact
                                <ArrowUpRight
                                    size={12}
                                    className="text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                />
                            </Link>

                        </nav>
                    </div>

                    {/* =================================================
                        MACHINES
                    ================================================== */}

                    <div>
                        <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                            Capabilities
                        </h3>

                        <nav className="flex flex-col gap-4">

                            <Link
                                to="/machines"
                                onClick={scrollToTop}
                                className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                            >
                                Belt Conversion
                            </Link>

                            <Link
                                to="/machines"
                                onClick={scrollToTop}
                                className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                            >
                                Jumbo Conversion
                            </Link>

                            <Link
                                to="/machines"
                                onClick={scrollToTop}
                                className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                            >
                                Flap Conversion
                            </Link>

                            <Link
                                to="/machines"
                                onClick={scrollToTop}
                                className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                            >
                                Disc Conversion
                            </Link>

                            <Link
                                to="/machines"
                                onClick={scrollToTop}
                                className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                            >
                                Testing Machines
                            </Link>

                            <Link
                                to="/machines"
                                onClick={scrollToTop}
                                className="text-sm text-zinc-500 transition-colors hover:text-orange-500"
                            >
                                Belt Grinding
                            </Link>

                        </nav>
                    </div>

                    {/* =================================================
                        CONTACT
                    ================================================== */}

                    <div>
                        <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                            Contact
                        </h3>

                        <div className="space-y-6">

                            {/* Location */}
                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3">
                                    <MapPin
                                        size={15}
                                        className="text-orange-500"
                                    />
                                </div>

                                <div>
                                    <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600">
                                        Location
                                    </div>

                                    <p className="text-sm leading-6 text-zinc-400">
                                        Tamil Nadu, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3">
                                    <Phone
                                        size={15}
                                        className="text-orange-500"
                                    />
                                </div>

                                <div>
                                    <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600">
                                        Phone
                                    </div>

                                    <a
                                        href="tel:+910000000000"
                                        className="text-sm text-zinc-400 transition-colors hover:text-orange-500"
                                    >
                                        +91 00000 00000
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2">
                                    <Mail
                                        size={15}
                                        className="text-orange-500"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600">
                                        Email
                                    </div>

                                    <a
                                        href="mailto:info@technomachineproducts.com"
                                        className="break-all text-sm text-zinc-400 transition-colors hover:text-orange-500"
                                    >
                                        info@technomachineproducts.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* =================================================
                    BOTTOM BAR
                ================================================== */}

                <div className="flex flex-col gap-5 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">

                    <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                        © {new Date().getFullYear()} Techno Machine Products.
                        All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="text-[10px] uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="text-[10px] uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-white"
                        >
                            Terms
                        </Link>

                        {/* Back to top */}
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10"
                            aria-label="Back to top"
                        >
                            <ArrowUpRight
                                size={15}
                                className="-rotate-45 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-orange-500"
                            />
                        </button>

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;