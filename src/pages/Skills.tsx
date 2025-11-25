import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Users, Brain, Clock } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Languages",
      icon: Code2,
      skills: ["C", "Java", "Python", "JavaScript"],
    },
    {
      category: "Web Technologies",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React JS"],
    },
    {
      category: "Frameworks & Stacks",
      icon: Wrench,
      skills: ["MERN Stack", "MEAN Stack"],
    },
    {
      category: "Database",
      icon: Database,
      skills: ["MongoDB"],
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: ["VS Code", "MS Office"],
    },
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: Users },
    { name: "Problem Solving", icon: Brain },
    { name: "Adaptability", icon: Users },
    { name: "Time Management", icon: Clock },
  ];

  const interests = [
    "Full Stack Development (Web Development)",
    "Cloud Computing",
    "MERN / MEAN Stack Development",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">Skills</h1>
          <p className="text-lg text-muted-foreground">Technical expertise and professional competencies</p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-semibold">Soft Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50 text-center"
                >
                  <div className="space-y-3">
                    <div className="flex justify-center">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <p className="font-medium">{skill.name}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Areas of Interest */}
        <Card className="p-6 sm:p-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Areas of Interest</h2>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <p className="text-muted-foreground">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
