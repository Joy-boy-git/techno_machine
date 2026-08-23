import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo3.png";

const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Machines", path: "/machines" },
    // { name: "Services", path: "/services" },
    // { name: "Industries", path: "/industries" },
    // { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
];

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenu ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenu]);

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
                    scrolled
                        ? "border-b border-white/10 bg-[#08090b]/90 backdrop-blur-xl"
                        : "bg-transparent"
                }`}
            >
                <div className="container-main">
                    <nav className="flex h-20 items-center justify-between">
                        
                        {/* Logo */}
                        <Link
                            to="/"
                            onClick={() => setMobileMenu(false)}
                            className="group flex items-center gap-3"
                        >
                             <img
        src={logo}
        alt="Techno Machine Products"
        className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />

                            <div className="leading-none">
                                <div className="text-sm font-black tracking-[0.18em] text-white">
                                    TECHNO
                                </div>

                                <div className="mt-1 text-[9px] font-medium tracking-[0.28em] text-zinc-500">
                                    MACHINE PRODUCTS
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-7 lg:flex">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `relative py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                                            isActive
                                                ? "text-orange-500"
                                                : "text-zinc-400 hover:text-white"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
    to="/contact"
    className="group relative hidden h-12 items-center gap-3 overflow-hidden rounded-full border border-orange-500/60 bg-orange-500 px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-500 hover:border-orange-400 hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] lg:flex"
>
    {/* Animated light sweep */}
    <span className="absolute inset-y-0 left-0 w-1/3 translate-x-[150%] skew-x-[-20deg] bg-white/25 transition-transform duration-700 group-hover:translate-x-[450%]" />

    {/* Pulse indicator */}
    <span className="relative z-10 flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
    </span>

    {/* Text */}
    <span className="relative z-10">
        Request a Quote
    </span>

    {/* Circular arrow */}
    <span className="relative z-10 flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-black/20 bg-black/10">
        <ArrowUpRight
            size={14}
            className="transition-all duration-500 group-hover:translate-x-5 group-hover:-translate-y-5"
        />

        <ArrowUpRight
            size={14}
            className="absolute -translate-x-5 translate-y-5 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
        />
    </span>
</Link>

                        {/* Mobile Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenu((prev) => !prev)}
                            className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/3 text-white lg:hidden"
                            aria-label="Toggle navigation"
                        >
                            {mobileMenu ? (
                                <X size={21} />
                            ) : (
                                <Menu size={21} />
                            )}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-0 z-40 bg-[#08090b] transition-all duration-500 lg:hidden ${
                    mobileMenu
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                }`}
            >
                <div className="container-main flex h-full flex-col justify-center">
                    <div className="mb-8">
                        <span className="section-label">
                            Navigation
                        </span>
                    </div>

                    <div className="flex flex-col">
                        {navigation.map((item, index) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setMobileMenu(false)}
                                className="group flex items-center justify-between border-b border-white/10 py-5"
                            >
                                <span className="flex items-center gap-5">
                                    <span className="text-xs text-zinc-600">
                                        0{index + 1}
                                    </span>

                                    <span className="text-3xl font-semibold text-white transition-colors group-hover:text-orange-500">
                                        {item.name}
                                    </span>
                                </span>

                                <ArrowUpRight
                                    size={22}
                                    className="text-zinc-600 transition-colors group-hover:text-orange-500"
                                />
                            </NavLink>
                        ))}
                    </div>

                    <Link
                        to="/contact"
                        onClick={() => setMobileMenu(false)}
                        className="mt-8 flex items-center justify-center gap-2 bg-orange-500 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black"
                    >
                        Request a Quote
                        <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;