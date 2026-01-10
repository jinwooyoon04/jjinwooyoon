"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Replace this with your Google Calendar ID
// To find your Calendar ID:
// 1. Go to Google Calendar
// 2. Click the three dots next to your calendar name
// 3. Select "Settings and sharing"
// 4. Scroll down to "Integrate calendar"
// 5. Copy the "Calendar ID" (it looks like: yourname@gmail.com or a long string)
const GOOGLE_CALENDAR_ID = "jaypenguin2004@gmail.com";

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

          <Card>
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
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
            </CardContent>
          </Card>

          <div className="mt-6 rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> To connect your Google Calendar, replace{" "}
              <code className="rounded bg-background px-1 py-0.5 text-xs">
                YOUR_CALENDAR_ID_HERE
              </code>{" "}
              in <code className="rounded bg-background px-1 py-0.5 text-xs">app/calendar/page.tsx</code> with your actual Google Calendar ID.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

