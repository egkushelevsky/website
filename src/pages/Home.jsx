import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Courses } from "../components/Courses";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div
        className= "min-h-screen flex flex-col items-center ">

        <Navbar />

        <main>
            <HeroSection />
            <About />
            <Projects />
            <Courses />
            <Contact />
            <Footer />
        </main>
        </div>
    );
};