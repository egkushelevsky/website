import { Github, Linkedin } from "lucide-react"
import {cn} from "@/lib/utils"

export const Contact = () => {
    return <section id="contact" className="py-4 px-4 relative bg-secondary">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Contact</h2>
                <div className="space-y-8">
                    <h3 text-2xl font-semibold mb-6>Contact Info</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a 
                                  href="mailto:egkushelevsky@gmail.com" 
                                  className="text-muted-foreground hover:text-primary transition-colors">
                                    egkushelevsky@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Github className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">GitHub</h4>
                                <a 
                                  href="https://github.com/egkushelevsky" 
                                  className="text-muted-foreground hover:text-primary transition-colors">
                                    github.com/egkushelevsky
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">LinkedIn</h4>
                                <a 
                                  href="www.linkedin.com/in/egkushelevsky"
                                  className="text-muted-foreground hover:text-primary transition-colors">
                                    linkedin.com/in/egkushelevsky
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
}