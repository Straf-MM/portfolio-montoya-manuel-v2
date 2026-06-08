import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, FileDown } from "lucide-react";
import { manuelData } from "@/data/manuel-data";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzayqrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès ! Merci de m'avoir contacté.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Erreur de connexion. Veuillez vérifier votre connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            N'hésitez pas à me contacter pour toute question ou opportunité
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Informations de contact
            </h2>

            {/* Email */}
            <Card className="p-6 border border-border flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href={`mailto:${manuelData.personal.email}`}
                  className="text-primary hover:underline"
                >
                  {manuelData.personal.email}
                </a>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6 border border-border flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Téléphone
                </h3>
                <a
                  href={`tel:${manuelData.personal.phone}`}
                  className="text-primary hover:underline"
                >
                  {manuelData.personal.phone}
                </a>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6 border border-border flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Localisation
                </h3>
                <p className="text-muted-foreground">
                  {manuelData.personal.city}
                </p>
              </div>
            </Card>

            {/* GitHub */}
            <Card className="p-6 border border-border flex items-start gap-4">
              <Github className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                <a
                  href={manuelData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {manuelData.personal.github}
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Envoyez-moi un message
            </h2>
            <Card className="p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Alimenté par Formspree
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Documents à télécharger
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CV */}
            <Card className="p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <FileDown className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">CV</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mon curriculum vitae détaillé
              </p>
              <a href="/CV_Manuel_Montoya.pdf" download className="block">
                <Button variant="outline" className="w-full" size="sm">
                  Télécharger
                </Button>
              </a>
            </Card>

            {/* Lettre de Motivation */}
            <Card className="p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <FileDown className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Lettre de Motivation
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ma lettre de motivation
              </p>
              <a href="/Lettre_Motivation_Manuel.pdf" download className="block">
                <Button variant="outline" className="w-full" size="sm">
                  Télécharger
                </Button>
              </a>
            </Card>

            {/* Rapport de Stage */}
            <Card className="p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <FileDown className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                Rapport de Stage
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Rapport détaillé de mon 2ème stage
              </p>
              <a href="/2SISR-MONTOYA-RapportStage - 2eme STAGE.pdf" download className="block">
                <Button variant="outline" className="w-full" size="sm">
                  Télécharger
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
