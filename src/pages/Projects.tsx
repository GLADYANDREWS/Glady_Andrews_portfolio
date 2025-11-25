import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FoodLink – Bridging Surplus to Smiles",
      subtitle: "A Seamless Collection and Donation Network",
      period: "Jan-May 2025",
      description: [
        "Built a platform to link food donors with NGOs for surplus food collection.",
        "Integrated location-based matching and real-time tracking.",
        "Designed user-friendly interfaces for smooth coordination.",
      ],
      outcome: "Reduced food waste by connecting donors with NGOs through a seamless digital system. Improved surplus food collection and timely distribution.",
      technologies: ["MERN Stack", "Location APIs", "Real-time Tracking"],
    },
    {
      title: "Height Prediction Using ML",
      subtitle: "AI Model for Predicting Height",
      period: "March-April 2024",
      description: [
        "Developed a height prediction model using machine learning based on genetic and environmental factors.",
        "Collected and analysed data to train the model for accurate height estimation.",
        "Implemented the project using Python and relevant libraries for data processing and prediction.",
      ],
      outcome: "Successfully built a machine learning model capable of predicting human height with reliable accuracy. Demonstrated the application of data-driven approaches in analysing genetic and environmental influences on growth.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">Projects</h1>
          <p className="text-lg text-muted-foreground">Showcasing my technical projects and innovations</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-accent/50 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <p className="text-lg text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Features:</h3>
                  <ul className="space-y-2">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-2">Outcome:</h3>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
