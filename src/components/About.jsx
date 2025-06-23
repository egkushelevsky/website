

export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-12 text-left">
                About Me
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a rising junior studying CS, Math, and Russian at Barnard College of Columbia University. I'm interested in
            systems and security, and I dabble in frontend design. My goal is always to create a positive impact on other people
            through my work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div>
                <a href="https://drive.google.com/file/d/10guJAL7xieWODyfQJBguyjiuOOiiQOL6/view?usp=sharing" 
                   target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
            <div>
            <a href="www.linkedin.com/in/egkushelevsky" 
                   target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
          </div>

        </div>
    </section>
}