# SAGE Landing page

<p align="center">
  <img src="src/assets/SAGE_logo.png" alt="SAGE Logo" width="300">
</p>

This website is an overview of the Capstone Project S.A.G.E

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── favicon1.svg
│   └── icon.png
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   ├── background_index.jpg
│   │   ├── background.svg
│   │   ├── ESP32Connection.jpg
│   │   ├── ESP32ConnectionCloseUp.jpg
│   │   ├── InternalTool1.png
│   │   ├── InternalTool2.png
│   │   ├── SAGE_logo.png
│   │   ├── start_mobile_app.png
│   │   ├── diagrams/
│   │   │   ├── mobile_sequence_diagram.png
│   │   │   ├── system_design.drawio.png
│   │   │   └── updated_system_design.jpg
│   │   ├── high-fidelity/
│   │   │   ├── home.png
│   │   │   ├── homeEditScreen1.png
│   │   │   ├── homeEditScreen2.png
│   │   │   ├── image 3.png
│   │   │   ├── image 4.png
│   │   │   ├── logs.png
│   │   │   └── splash_screen.png
│   │   ├── pdf/
│   │   │   └── SAGE_progress_report.pdf
│   │   └── TeamMembers/
│   │       ├── BryanPhoto.jpg
│   │       ├── dummyPerson.jpeg
│   │       ├── EithanPhoto.jpg
│   │       └── emmanuel-headshot.jpg
│   ├── components/
│   │   ├── about-author-card.astro
│   │   ├── challenges.tsx
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   └── gallery.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── md-content/
│   │   ├── about.md
│   │   ├── deviceContent.md
│   │   └── mobileappContent.md
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── device.astro
│       └── mobileapp.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The project uses React components within Astro for interactive elements like navigation and the image gallery. Content is structured using Markdown files in the `md-content` directory for maintainability.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |