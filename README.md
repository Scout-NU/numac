# NUMAC — Northeastern University's Marketing-Consulting Agency

Official website for NUMAC, a student-led marketing consulting organization at Northeastern University. The site showcases completed client projects, introduces the leadership team, and provides pathways for prospective clients and members to get involved.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Linting | ESLint 9 (Next.js + TypeScript rules) |

## Project Structure

```
numac/
└── frontend/
    └── src/
        └── app/
            ├── layout.tsx          # Root layout (Header + Footer)
            ├── page.tsx            # Home page
            ├── about/              # About page
            ├── contact/            # Contact page
            ├── our_teams/          # Team showcase page
            └── components/
                ├── Header.tsx
                ├── Footer.tsx
                └── home/           # Home page components
```

## Getting Started

All commands should be run from the `frontend/` directory.

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Opens the app at [http://localhost:3000](http://localhost:3000) with hot reload.

### Production

```bash
npm run build   # Compile and optimize
npm start       # Serve the production build
```

### Linting

```bash
npm run lint
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — mission statement, project carousel, client testimonials |
| `/about` | Organization overview, mission, and values |
| `/our_teams` | Leadership bios and team structure |
| `/contact` | Inquiry forms for prospective clients and members |
