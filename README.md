# 🐉 Hanes — Hanes Cymru

**Hanes** (Welsh for *History*) is a gamified exploration of Welsh history, language, and culture. It uses augmented reality to digitally resurrect and bring to life forgotten or ruined elements of Cymru's past, making ancient sites feel vibrant and immediate again.

## 🏴󠁧󠁢󠁷󠁬󠁳󠁿 About the Project

Wales is a land of extraordinary history — from the ancient druids of Ynys Môn to the mighty castles of the medieval princes, from the songs of the bards to the industrial revolution that changed the world. Hanes brings this heritage to life through:

- **Gamified Quests** — test your knowledge of Welsh history, earn XP, and climb leaderboards
- **Augmented Reality** — digitally rebuild ruined castles, monuments, and landscapes
- **Welsh Language** — Iaith Gymraeg woven throughout every experience
- **Interactive Map** — explore Wales's most iconic historical sites

## 🎨 Welsh Brand Colours

| Colour       | Hex       | Usage                        |
|--------------|-----------|------------------------------|
| Dragon Red   | `#C8102E` | Primary brand, hero sections |
| Welsh Green  | `#00843D` | Accents, success states      |
| Welsh Gold   | `#FFD700` | CTAs, highlights, XP badges  |
| Dark Navy    | `#1A1A2E` | Backgrounds, text            |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## 📁 Project Structure

```
src/
  app/
    page.tsx          # Home / landing page
    layout.tsx        # Root layout with Navbar & Footer
    globals.css       # Welsh brand CSS variables
    about/
      page.tsx        # About Hanes page
    challenges/
      page.tsx        # Gamified history challenges (quiz)
    discover/
      page.tsx        # AR site discovery page
  components/
    Navbar.tsx        # Navigation bar (Welsh-branded)
    Footer.tsx        # Footer
```

## 🌐 Pages

| Route          | Description                                   |
|----------------|-----------------------------------------------|
| `/`            | Landing page with hero, features, and CTA     |
| `/about`       | Hanes mission, pillars, and story             |
| `/challenges`  | Gamified Welsh history quiz challenges        |
| `/discover`    | AR-enabled Welsh historical sites             |

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework (App Router)
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first styling

---

*Wedi'i adeiladu gyda ❤️ dros Gymru — Built with love for Wales.*
