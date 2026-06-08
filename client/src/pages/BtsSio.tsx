import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { manuelData } from "@/data/manuel-data";

export default function BtsSio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              BTS SIO
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Services Informatiques aux Organisations
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {/* Definition */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              C'est quoi le BTS SIO ?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{manuelData.bts.definition}</p>
              <p>{manuelData.bts.options}</p>
              <p>{manuelData.bts.stages}</p>
            </div>
          </Card>

          {/* SISR */}
          <Card className="p-8 border border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {manuelData.bts.sisr.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {manuelData.bts.sisr.description}
            </p>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Fonctions dans l'entreprise :
              </h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {manuelData.bts.sisr.roles.map((role, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* SLAM */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {manuelData.bts.slam.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {manuelData.bts.slam.description}
            </p>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Fonctions dans l'entreprise :
              </h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {manuelData.bts.slam.roles.map((role, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
