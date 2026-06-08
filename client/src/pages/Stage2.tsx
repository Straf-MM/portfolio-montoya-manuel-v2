import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Calendar, MapPin, CheckCircle, Download } from "lucide-react";
import { manuelData } from "@/data/manuel-data";

export default function Stage2() {
  const stage = manuelData.internships[1];

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

          {/* Rapport Complet */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Rapport de Stage Complet
            </h2>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              {/* Introduction */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. INTRODUCTION</h3>
                <p>
                  Le stage en entreprise constitue une étape déterminante du cursus BTS SIO,
                  permettant de confronter les acquis théoriques aux réalités opérationnelles
                  d'une infrastructure d'envergure. J'ai eu l'opportunité d'intégrer le service
                  4TF (Service Parts) de la société Liebherr Mining Equipment Colmar SAS. Ma
                  mission s'est articulée autour de la modernisation des outils de gestion
                  technique, avec pour objectif principal d'optimiser le partage d'informations
                  entre les techniciens et le service client via la refonte d'un glossaire
                  technique automatisé. Ce rapport détaille mon immersion, les compétences
                  techniques mobilisées, ainsi qu'une analyse de veille technologique portant
                  sur les vulnérabilités informatiques.
                </p>
              </div>

              {/* Présentation Entreprise */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2. PRÉSENTATION DE L'ENTREPRISE
                </h3>

                <h4 className="font-semibold text-foreground mb-2 mt-4">
                  2.1 L'histoire du groupe Liebherr
                </h4>
                <p>
                  L'histoire du groupe Liebherr est indissociable de l'esprit visionnaire de son
                  fondateur, Hans Liebherr. En 1949, dans une Allemagne en pleine reconstruction
                  d'après-guerre, ce jeune entrepreneur remarque que les grues de construction
                  de l'époque sont lourdes et difficiles à déplacer. Il invente alors la TK-10,
                  la toute première grue à tour mobile, capable d'être transportée facilement et
                  montée en un temps record. Ce succès immédiat marque la naissance de
                  l'entreprise à Kirchdorf an der Iller et pose les bases d'une culture
                  d'entreprise fondée sur l'innovation utile et l'indépendance financière.
                </p>
                <p className="mt-3">
                  Au fil des décennies, Liebherr a su diversifier ses activités pour devenir un
                  acteur incontournable dans des secteurs extrêmement variés. Dès les années
                  1950, le groupe se lance dans la fabrication de réfrigérateurs, puis étend son
                  expertise à l'aéronautique, aux équipements de transport et aux machines de
                  terrassement. Aujourd'hui, Liebherr n'est plus seulement un fabricant de
                  grues, mais un conglomérat technologique mondial composé de plus de 140
                  sociétés réparties sur tous les continents, employant plus de 50 000
                  collaborateurs.
                </p>

                <h4 className="font-semibold text-foreground mb-2 mt-4">
                  2.2 Liebherr Mining Equipment Colmar SAS
                </h4>
                <p>
                  Parmi les nombreuses divisions du groupe, la branche Mining occupe une
                  position stratégique majeure. Elle est spécialisée dans la conception et la
                  production de machines monumentales destinées aux mines à ciel ouvert. Le site
                  de Colmar, inauguré en 2011, représente l'un des investissements les plus
                  modernes de la division. Cette usine alsacienne est spécialisée dans la
                  fabrication de pelles hydrauliques de très grande taille, capables de
                  déplacer des centaines de tonnes de déblais en un seul cycle.
                </p>

                <h4 className="font-semibold text-foreground mb-2 mt-4">
                  2.3 Le Service SPR (Service Parts - 4TF)
                </h4>
                <p>
                  Le Service Pièces Rechanges (SPR), identifié en interne par le code 4TF, est
                  le garant de la disponibilité opérationnelle des machines après leur vente.
                  Dans le secteur minier, chaque minute d'arrêt d'une machine représente une
                  perte financière considérable pour le client. La mission du SPR est donc
                  d'assurer une logistique et une documentation technique sans faille.
                </p>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">7. CONCLUSION</h3>
                <p>
                  Ce stage a consolidé mes compétences en gestion d'infrastructure et en
                  support technique spécialisé. L'expérience acquise chez Liebherr, notamment
                  en développement VBA et l'optimisation de bases de données via SQL, m'a
                  permis de démontrer que l'informatique est un levier de rentabilité direct
                  pour le service après-vente. La réduction du temps de recherche d'information
                  et la fiabilisation des données techniques sont des gains immédiats pour les
                  techniciens et les gestionnaires de pièces de rechange.
                </p>
                <p className="mt-3">
                  Sur le plan personnel, cette expérience a été un catalyseur pour mon projet
                  professionnel. Travailler dans un environnement aussi exigeant que celui de
                  Liebherr m'a permis de confirmer mon intérêt pour la gestion d'infrastructures
                  et le support technique spécialisé. Ce stage valide ainsi mon orientation vers
                  l'option SISR et renforce ma volonté d'évoluer dans des environnements où
                  l'infrastructure réseau et logicielle soutient directement les processus de
                  production.
                </p>
              </div>
            </div>
          </Card>

          {/* Download Section */}
          <div className="flex gap-4 flex-wrap">
            <a href="/2SISR-MONTOYA-RapportStage - 2eme STAGE.pdf" download>
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Télécharger le rapport PDF complet
              </Button>
            </a>
            <Link href="/stages">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour aux stages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
