"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function ContactPage() {
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
            Have a question or want to work together? I&apos;d love to hear from you!
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground">
                Feel free to reach out via email for any inquiries about my work,
                collaboration opportunities, or just to connect. I&apos;m always
                open to discussing robotics projects, engineering challenges, or
                potential opportunities.
              </p>
              
              <div className="flex flex-col items-center gap-4 pt-4">
                <a
                  href="mailto:jjy45@cornell.edu"
                  className="flex items-center gap-3 rounded-lg border bg-background px-6 py-4 text-lg font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Mail className="h-5 w-5" />
                  jjy45@cornell.edu
                </a>
              </div>

              <p className="pt-4 text-sm text-muted-foreground">
                I typically respond within 24-48 hours. Looking forward to
                connecting with you!
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

