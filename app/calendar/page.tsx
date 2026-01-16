"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const GOOGLE_CALENDAR_ID = "jinwooyoon04@gmail.com";

// If your calendar is public, you can use this format:
// const GOOGLE_CALENDAR_EMBED_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(GOOGLE_CALENDAR_ID)}&ctz=America%2FNew_York`;

// For a shareable public calendar link, use this format:
// Replace YOUR_CALENDAR_ID with your actual calendar ID
const GOOGLE_CALENDAR_EMBED_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(GOOGLE_CALENDAR_ID)}&ctz=America%2FNew_York`;

export default function CalendarPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Calendar
            </h1>
            <p className="text-lg text-muted-foreground">
              View my schedule and upcoming events. This calendar syncs automatically with my Google Calendar.
            </p>
          </div>

          <Card className="overflow-hidden p-0">
            <div 
              className="relative w-full bg-[#2d4a6b]" 
              style={{ 
                paddingBottom: "75%",
                filter: "brightness(0.9) contrast(1.05)",
              }}
            >
              <iframe
                src={GOOGLE_CALENDAR_EMBED_URL}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                title="Google Calendar"
                allowFullScreen
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

