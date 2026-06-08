import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { manuelData } from "@/data/manuel-data";

export default function Stages() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  const toggleStage = (id: number) => {
    setExpandedStage(expandedStage === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Mes Stages
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Découvrez mes expériences professionnelles durant mes deux années
            de BTS SIO.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {manuelData.internships.map((internship) => (
            <Card
              key={internship.id}
              className="border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header Section */}
              <div
                className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 cursor-pointer hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-colors"
                onClick={() => toggleStage(internship.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                      {internship.title}
                    </h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{internship.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {internship.period} • {internship.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`/stage/${internship.id}`}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Voir détails
                    </a>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10"
                    >
                      {expandedStage === internship.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              {expandedStage === internship.id && (
                <div className="p-6 space-y-6 border-t border-border">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Description
                    </h3>
                    <p className="text-muted-foreground">
                      {internship.description}
                    </p>
                  </div>

                  {/* Missions */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Missions réalisées
                    </h3>
                    <ul className="space-y-2">
                      {internship.missions.map((mission, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {mission}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Compétences développées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Réalisations principales
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {internship.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-4"
                        >
                          <p className="text-sm text-foreground font-medium">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
