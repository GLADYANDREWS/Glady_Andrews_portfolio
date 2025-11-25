import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Message sent successfully! Check your email for confirmation.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "andrewsglady2004@gmail.com",
      link: "mailto:andrewsglady2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9894093231",
      link: "tel:+919894093231",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/gladyandrews",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/gladyandrews",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-accent transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Connect with Me</h2>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <span className="text-foreground font-medium">{social.label}</span>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  </Card>
                );
              })}
            </div>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Available for Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Graduating in May 2026 and actively seeking developer positions. Open to full-stack development roles and exciting projects.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
