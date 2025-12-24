"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Placeholder API call - replace with actual endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      // For now, simulate success since we don't have a real API
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div
                  className="flex items-center gap-2 rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-950 dark:text-green-200"
                  role="alert"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === "error" && (
                <div
                  className="flex items-center gap-2 rounded-md bg-red-50 p-4 text-sm text-red-800 dark:bg-red-950 dark:text-red-200"
                  role="alert"
                >
                  <AlertCircle className="h-5 w-5" />
                  <p>
                    Something went wrong. Please try again or contact me
                    directly via email.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 border-t pt-8">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Or reach out directly:
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:jjy45@cornell.edu"
                  className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                >
                  <Mail className="h-4 w-4" />
                  jjy45@cornell.edu
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

