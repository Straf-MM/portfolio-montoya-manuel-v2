import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield, Eye } from "lucide-react";
import { manuelData } from "@/data/manuel-data";

export default function TechWatch() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Eye className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Veille Technologique
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            {manuelData.techWatch.title}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {/* Introduction */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-muted-foreground">
              {manuelData.techWatch.introduction}
            </p>
          </Card>

          {/* Definition */}
          <Card className="p-8 border border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Qu'est-ce qu'une Backdoor ?
            </h2>
            <p className="text-muted-foreground mb-6">
              {manuelData.techWatch.definition}
            </p>
          </Card>

          {/* Types */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Types de Backdoors
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {manuelData.techWatch.types.map((type, idx) => (
                <Card key={idx} className="p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">
                    {type.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-xs text-primary flex gap-2">
                        <span>•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Risks */}
          <Card className="p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h2 className="text-2xl font-bold text-foreground">
                Risques et Impacts
              </h2>
            </div>
            <ul className="space-y-3">
              {manuelData.techWatch.risks.map((risk, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">{risk}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Defenses */}
          <Card className="p-8 border border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Stratégies de Défense
              </h2>
            </div>
            <ul className="space-y-3">
              {manuelData.techWatch.defenses.map((defense, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{defense}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Google Alerts */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Outils de Veille
            </h2>
            <p className="text-muted-foreground mb-4">
              Pour rester informé des dernières menaces et actualités en
              cybersécurité, j'utilise Google Alerts pour surveiller les
              termes clés suivants :
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Backdoor attacks",
                "Malware threats",
                "Cybersecurity news",
                "Zero-day vulnerabilities",
                "Network security",
              ].map((alert, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
                >
                  {alert}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
