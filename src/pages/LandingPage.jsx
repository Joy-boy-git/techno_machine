
import Home from "./Home";
import About from "./About";
// import Machines from "./Machines";
import Contact from "./Contact";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <main className="overflow-hidden bg-[#08090b]">

            {/* HERO */}
            <section className="min-h-screen">
                <Home />
            </section>


            {/* ABOUT */}
            <section className="border-t border-white/10 py-32">
                <About />
            </section>


            {/* MACHINES
            <section className="border-y border-white/10 py-32">
                <Machines />
            </section> */}


            {/* PRODUCTS
            <section className="py-32">
                ...
                <Link to="/products">
                    View Products
                </Link>
            </section> */}


            {/* SERVICES
            <section className="border-y border-white/10 py-32">
                ...
                <Link to="/services">
                    Explore Services
                </Link>
            </section> */}


            {/* CONTACT */}
            <section className="py-40 text-center">
               <Contact />
 .            </section>
                <section>
                    <Footer />
                </section>

        </main>
    );
}