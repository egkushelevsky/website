import { Github, Mail } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Zookeeper Container",
        description: "A C program to run a Linux container, including capability and cgroup restrictions, a privatized namespace and file system, and networking abilities.",
        image: "/images/Container.png",
        url: ""
    },
    {
        id: 2,
        title: "SNAP for Students",
        description: "Hackathon project addressing food insecurity for college students. Includes a forum with other users, eligibility quiz, and AI chatbot.",
        image: "/images/SNAP.png",
        url: "https://github.com/jaysonedu/devfest2025"
    }
];

export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-bold text-center hover:italic">Projects</h2>

            <p className="text-center text-muted-foreground-center mb-12 max-w-2xl mx-auto">
                For projects without links listed, please email for access.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-primary/20 outline-1 outline-primary rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6 flex flex-col h-full">
                            <h3 className="text-xl font-semibold mb-1 hover:italic">
                                {project.title}
                            </h3>

                            <p className="test-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="mt-auto flex space-x-3">
                                    {project.url ? (
                                        <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                        ) : (
                                        <a
                                        href="mailto:email@gmail.com"
                                        className="text-foreground/80 hover:text-primary duration-300"
                                        >
                                            <Mail size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};