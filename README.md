# Personal Portfolio Website

A modern, sleek, and minimal portfolio website for an Electrical & Computer Engineering (ECE) student. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 **Modern Design**: Clean, professional, and recruiter-friendly interface
- 🌓 **Dark/Light Mode**: Theme toggle with persistent user preference using next-themes
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: Keyboard navigation, focus states, and ARIA labels
- ✨ **Subtle Animations**: Smooth page transitions and section reveals using Framer Motion
- 🎯 **Component-Based**: Reusable components with clean structure

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Theme**: next-themes
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── projects/       # Projects listing page
│   │   └── [slug]/     # Dynamic project detail pages
│   ├── api/
│   │   └── contact/     # Contact form API route (placeholder)
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Home page
│   └── globals.css       # Global styles and theme variables
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── nav.tsx          # Navigation component
│   ├── footer.tsx       # Footer component
│   ├── project-card.tsx # Project card component
│   ├── skill-badge.tsx  # Skill badge component
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/
│   └── projects.ts      # Project data
└── lib/
    └── utils.ts         # Utility functions
```

## Pages

### Home (`/`)
- Hero section with name, tagline, and CTAs
- Featured projects section (3 projects)
- Skills/Tools section with badges

### About (`/about`)
- Short bio
- Education section
- Experience section
- Activities section
- Skills section

### Projects (`/projects`)
- Grid of all project cards
- Filter by category (Hardware, Software, Embedded, Signals)
- Links to project detail pages

### Project Detail (`/projects/[slug]`)
- Overview, problem, solution sections
- Tech stack display
- Screenshot placeholders
- "What I Learned" section
- Links to GitHub and live demo

### Contact (`/contact`)
- Contact form with validation
- Frontend validation (name, email, message)
- Success/error UI states
- Placeholder API route

## Customization

### Update Project Data

Edit `data/projects.ts` to add or modify projects:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Title",
    description: "Project description",
    category: ["Hardware", "Embedded"],
    techStack: ["C", "Python", "FPGA"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://example.com",
    slug: "your-project-slug",
  },
  // ... more projects
];
```

### Update Personal Information

- **About page**: Edit `app/about/page.tsx` to update bio, education, experience, and activities
- **Home page**: Edit `app/page.tsx` to update hero section and skills
- **Footer**: Edit `components/footer.tsx` to update social links and email

### Theme Customization

Theme colors are defined in `app/globals.css` using CSS variables. Modify the `:root` and `.dark` selectors to customize colors.

## Contact Form

The contact form currently uses a placeholder API route at `app/api/contact/route.ts`. To enable actual email sending:

1. Set up an email service (e.g., Resend, SendGrid, Nodemailer)
2. Update the API route to send emails
3. Add environment variables for API keys

## Build for Production

```bash
pnpm build
pnpm start
```

## License

MIT
