import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download } from "lucide-react";
import { manuelData } from "@/data/manuel-data";

export default function Competences() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Compétences E4
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Évaluation des compétences acquises
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {/* Introduction */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              À propos du tableau E4
            </h2>
            <p className="text-muted-foreground mb-6">
              Le tableau E4 ci-dessous présente l'évaluation détaillée des
              compétences que j'ai acquises au cours de ma formation BTS SIO,
              option SISR. Ce document synthétise les compétences développées
              en 1ère et 2ème année, validées par mes expériences
              professionnelles et mes projets réalisés.
            </p>
            <a href="/BTS_SIO_Annexe_VI.5_Epreuve-E5-MONTOYA-Manuel.xlsx" download="BTS_SIO_Annexe_VI.5_Epreuve-E5-MONTOYA-Manuel.xlsx">
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Télécharger le tableau E4 complet
              </Button>
            </a>
          </Card>

          {/* Skills by Category */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Compétences principales
            </h2>

            {/* Infrastructure */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Infrastructure & Systèmes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {manuelData.skills.infrastructure.map((skill, idx) => (
                  <Card
                    key={idx}
                    className="p-4 border border-border flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Support & Déploiement
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {manuelData.skills.support.map((skill, idx) => (
                  <Card
                    key={idx}
                    className="p-4 border border-border flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Outils & Technologies
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {manuelData.skills.tools.map((skill, idx) => (
                  <Card
                    key={idx}
                    className="p-4 border border-border flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Soft Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {manuelData.skills.softSkills.map((skill, idx) => (
                  <Card
                    key={idx}
                    className="p-4 border border-border flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Progression */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Year 1 */}
            <Card className="p-8 border border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {manuelData.progression.year1.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {manuelData.progression.year1.description}
              </p>
              <ul className="space-y-2">
                {manuelData.progression.year1.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Year 2 */}
            <Card className="p-8 border border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {manuelData.progression.year2.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {manuelData.progression.year2.description}
              </p>
              <ul className="space-y-2">
                {manuelData.progression.year2.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
