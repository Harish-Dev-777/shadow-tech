"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { submitContactForm } from "@/app/actions/contact";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    const result = await submitContactForm(data);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-foreground font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/15">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let’s <span className="text-primary">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Have a project in mind? We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-background/50 backdrop-blur-xl border-foreground/20 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      Name
                    </label>
                    <Input
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12 bg-foreground/5 border-foreground/20 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 bg-foreground/5 border-foreground/20 focus:border-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 ml-1">
                    Message
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[150px] bg-foreground/5 border-foreground/10 focus:border-primary/50 resize-none pt-4"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold transition-all duration-300 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                {error && (
                  <p className="text-destructive text-sm font-medium mt-4 text-center animate-in fade-in slide-in-from-top-2">
                    {error}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Pop-up */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-500",
          isSuccess
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "bg-card border border-foreground/10 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-6 text-center transform transition-all duration-500",
            isSuccess ? "scale-100 translate-y-0" : "scale-95 translate-y-4",
          )}
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary animate-in zoom-in duration-500" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Success!</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            ✅ Your message has been sent successfully! We’ll get back to you
            soon.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="w-full h-12 font-semibold"
          >
            Close
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
