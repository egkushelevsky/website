

export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-12 text-center">
                About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                I am a rising junior at Barnard College of Columbia University. I am studying computer science with minors in math
                and Russian. I'm primarily interested in systems and security, and I dabble in frontend design. My goal is always 
                to create a positive impact on other people through my work.
                </p>
                <img 
                  src="/images/Profile.jpeg"
                  alt="Profile Picture"
                  className="w-full max-w-xs mx-auto rounded-lg object-cover shadow-md"
                  >
                  </img>
            </div>
        </div>
    </section>
}