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
        description: "Hackathon project addressing food insecurity for college students.",
        image: "/images/SNAP.png",
        url: "https://github.com/jaysonedu/devfest2025"
    }
];

export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projects</h2>

            <p className="text-center text-muted-foreground-center mb-12 max-w-2xl mx-auto">
                For projects without links listed, please email for access.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="test-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href="mailto:egkushelevsky@gmail.com" 
                                    target="_blank"
                                    className="text-forground/80 hover:text-primary duration-300">
                                        <Mail size={20}/>
                                    </a>
                                    <a 
                                    href={project.url} 
                                    target="_blank"
                                    className="text-forground/80 hover:text-primary duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};