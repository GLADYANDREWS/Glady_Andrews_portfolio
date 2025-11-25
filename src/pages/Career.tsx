import { Card } from "@/components/ui/card";
import { GraduationCap, Target } from "lucide-react";

const Career = () => {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Dr. NGP Institute of Technology",
      period: "2022 – 26",
      grade: "CGPA: 7.93",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "GKD Mat.Hr.Sec. School",
      period: "2022",
      grade: "Percentage: 74",
    },
    {
      degree: "Secondary (10th)",
      institution: "GKD Mat.Hr.Sec.School",
      period: "2020",
      grade: "Percentage: 69",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">Career</h1>
          <p className="text-lg text-muted-foreground">My educational background and career objectives</p>
        </div>

        {/* Career Objective */}
        <Card className="p-6 sm:p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Career Objective</h2>
              <p className="text-muted-foreground leading-relaxed">
                Resilient and determined CSE student with strong analytical skills and hands-on experience in full-stack development. 
                Currently in the final year (graduating May 2026), seeking a developer position to contribute to cutting-edge software 
                projects and grow as a technology professional.
              </p>
            </div>
          </div>
        </Card>

        {/* Education */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-muted-foreground">{edu.period}</span>
                    <span className="text-accent font-medium">{edu.grade}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Co-Curricular */}
        <Card className="p-6 sm:p-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Co-Curricular Activities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Completed a workshop on Machine Learning at Coimbatore Institute of Technology (2024), covering concepts 
              like supervised learning and data preprocessing. Demonstrated the application of data-driven approaches in 
              analysing genetic and environmental influences on growth.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Career;
