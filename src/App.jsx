import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Machines from "./pages/Machines";
import About from "./pages/About";
import ScrollToTop from "./pages/ScrollToTop";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import BeltConversion from "./pages/Belt-convertion";

function Placeholder({ title }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#08090b] px-5 pt-20">
            <h1 className="text-5xl font-bold tracking-tight text-white">
                {title}
            </h1>
        </main>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />

            <Routes>
            <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/machines"
                    element={<Machines />} />

                <Route
                    path="/services"
                    element={<Placeholder title="Services" />}
                />

                <Route
                    path="/industries"
                    element={<Placeholder title="Industries" />}
                />

                <Route
                    path="/gallery"
                    element={<Placeholder title="Gallery" />}
                />

                <Route
                    path="/belt-conversion"
                    element={<BeltConversion />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/footer" element={<Footer />} />
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;