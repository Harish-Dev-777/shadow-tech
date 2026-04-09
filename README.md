# Shadow Tech - Design Agency Homepage

A modern, highly-responsive design agency homepage built for the Next.js Developer Internship assignment. This project focuses on a premium aesthetic, demonstrating high-end UI/UX principles, component-driven architecture, and seamless light/dark mode implementations.

## Live Project Links

- **Live Deployment**: https://shadow-tech.vercel.app/
- **GitHub Repository**: https://github.com/Harish-Dev-777/shadow-tech

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 and shadcn/ui
- **Theming**: `next-themes` (System / Light / Dark modes)
- **animations**: GSAP
- **Icons**: Lucide React & Custom SVG Icons
- **Language**: TypeScript

## Project Structure & Implementation

- Component Modularity:
---------------------------
 The codebase is split logically. Major sections (Hero, Services, Portfolio, Contact) are isolated in the `sections/` directory. Reusable UI components (buttons, cards, navigation) reside in `components/`.
- Responsive Design:
---------------------------
Follows a strict mobile-first architecture utilizing Tailwind breakpoints ensuring flawless rendering across mobile, tablet, and ultra-wide displays.
- Bonus Criteria Achieved:
---------------------------
  - Full Dark Mode support via CSS custom properties and dynamic color space variables.
  - Native Image optimization for all portfolio assets via `<Image />`.
  - Advanced CSS micro-interactions, smooth scrolling behavior, and active hover state management.
  - SEO metadata integration in the Root Layout.

## Setup Instructions

1. Clone the repository 
-----------------------------
   git clone [your-repo-link]
   cd shadow-tech

2. Install dependencies
----------------------------
   npm install

3. Run the development server
----------------------------
   npm run dev

4. View the application
----------------------------
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Design Decisions & Assumptions

- **Form Handling**: The contact form submission uses local React state to simulate an API request (including loading states and a success notification pop-up) to demonstrate complex state management without needing to configure an external database backend for the assignment.
- **Styling Methodology**: The project deliberately avoids massive external animation libraries to keep the bundle size incredibly small and fast. It relies strictly on the native power of Tailwind CSS utility classes and keyframes to handle complex gradients, blurs, and hover animations, aiming for maximum Lighthouse performance scores.
