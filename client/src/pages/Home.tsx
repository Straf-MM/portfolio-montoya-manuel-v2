import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Server,
  Shield,
  Zap,
  Github,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ShootingStars from "@/components/ShootingStars";

export default function Home() {
  const skills = [
    { icon: Server, label: "Infrastructure", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, label: "Sécurité", color: "from-purple-500 to-pink-500" },
    { icon: Code2, label: "Virtualisation", color: "from-green-500 to-emerald-500" },
    { icon: Zap, label: "Gestion de Configuration", color: "from-orange-500 to-red-500" },
  ];

  const achievements = [
    { number: "2", label: "Stages professionnels" },
    { number: "5+", label: "Projets réalisés" },
    { number: "10+", label: "Technologies maîtrisées" },
    { number: "100%", label: "Engagement" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ShootingStars />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Manuel Montoya
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Étudiant BTS SIO - Option SISR
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionné par l'infrastructure informatique, la sécurité et les systèmes réseaux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a>
                  <Button size="lg" className="gap-2">
                    Me contacter <Mail className="w-4 h-4" />
                  </Button>
                </a>
              </Link>
              <a href="https://github.com/Straf-MM" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  GitHub <Github className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Domaines de Compétences
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <Card key={idx} className="p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{skill.label}</h3>
                  <p className="text-muted-foreground">
                    Expertise en {skill.label.toLowerCase()}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">À propos de moi</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Je suis passionné par l'informatique et les nouvelles technologies. Ma formation en BTS SIO m'a permis de développer des compétences solides en infrastructure, systèmes et réseaux.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Je suis actuellement en deuxième année de BTS SIO, option SISR, et je mets tout en œuvre pour devenir un professionnel compétent dans le domaine de l'infrastructure et de la sécurité informatique.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Administration Systèmes</h3>
                  <p className="text-sm text-muted-foreground">Linux, Windows Server</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Sécurité Informatique</h3>
                  <p className="text-sm text-muted-foreground">PKI, SSL/TLS, Bonnes pratiques</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Infrastructure Réseau</h3>
                  <p className="text-sm text-muted-foreground">Conception et maintenance</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Support Technique</h3>
                  <p className="text-sm text-muted-foreground">RustDesk, TeamViewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à collaborer ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités professionnelles.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="gap-2">
                Me contacter <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
