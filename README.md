# Lumos Student Learning Dashboard

## Project Overview
Lumos OS is a premium learning dashboard built with Next.js 15, React 19, and Supabase. The UI blends a bento-grid layout with focused motion primitives to surface progress, momentum, and course mastery at a glance.

## Architecture
- App Router with server-first rendering to keep data fetching and layout stable.
- Route-level layouts keep navigation persistent while pages stream data.
- Typed data models ensure consistent rendering and safe serialization.

## Server vs Client Component Boundaries
- Server Components handle data fetching and structural layout.
- Client Components are limited to interactive leaf nodes (navigation, motion tiles, progress animations).
- Framer Motion usage is centralized in `components/dashboard/MotionTile.tsx`.

## Supabase Integration
- Server-side client is created in `lib/supabase/server.ts` using environment variables.
- Courses are fetched in each route and passed as typed props.
- Schema and seed data live in `supabase-schema.sql`.

## Motion System
- Entry animations use spring physics: stiffness 380, damping 30.
- Hover interactions use spring physics: stiffness 400, damping 28.
- Staggered entrances are handled via per-tile delay.
- Animations are constrained to transform and opacity, except the progress bar width.

## Accessibility Features
- Semantic landmarks (`nav`, `main`, `section`, `article`).
- Focus-visible rings for all interactive elements.
- Screen reader labels on navigation and activity cells.
- High-contrast text and borders against dark surfaces.

## Performance Decisions
- Server rendering for data-heavy routes.
- Static icon map to avoid wildcard icon imports.
- Fixed grid rows and shimmer skeletons to reduce CLS.

## Deployment Instructions
1. Create `.env.local` from `.env.example` and add Supabase credentials.
2. Install dependencies with `npm install`.
3. Run locally with `npm run dev`.
4. Build for production with `npm run build` and start with `npm run start`.

## Repository Hygiene
- `.env.local` is ignored to prevent accidental credential leaks.
- `.next` and build outputs are excluded from version control.
