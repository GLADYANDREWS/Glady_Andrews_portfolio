import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
            Glady Andrews
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Computer Science Engineering Student
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Problem solver passionate about full-stack development and building innovative solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button onClick={() => navigate("/projects")} className="group">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" onClick={() => navigate("/contact")}>
            Get in Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6 pt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://github.com/gladyandrews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/gladyandrews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:andrewsglady2004@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
