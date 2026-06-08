import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Calendar, MapPin, CheckCircle, Download } from "lucide-react";
import { manuelData } from "@/data/manuel-data";

export default function Stage1() {
  const stage = manuelData.internships[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Link href="/stages">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux stages
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {stage.title}
          </h1>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="w-5 h-5" />
              <span className="font-medium text-lg">{stage.company}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{stage.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">
                {stage.period} • {stage.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {/* Description */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Description
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {stage.description}
            </p>
          </Card>

          {/* Missions */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Missions réalisées
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {stage.missions.map((mission, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{mission}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 border border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Compétences développées
            </h2>
            <div className="flex flex-wrap gap-3">
              {stage.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Réalisations principales
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {stage.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-lg p-6"
                >
                  <p className="text-foreground font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Download Section */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="/COMPTE RENDU - STAGE - MONTOYA MANUEL - STAGE 1 .pdf" download>
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Télécharger le rapport PDF
              </Button>
            </a>
            <Link href="/stages">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour aux stages
              </Button>
            </Link>
          </div>

          {/* CTA */}
          <div className="flex gap-4 justify-center">
            <Link href="/stages">
              <Button size="lg" variant="outline">
                Voir tous les stages
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg">Me contacter</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
