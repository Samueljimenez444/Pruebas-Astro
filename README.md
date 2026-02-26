
Personal portfolio built with Astro 5 and Tailwind  as a learning project for the framework.


Astro 5 main framework
Tailwind styling
TypeScript static typing



| Concept | Description |

| File-based routing | Automatic routes based on `src/pages/` folder structure |
| Content Collections | Project management with Zod schema validation |
| Dynamic routes + `getStaticPaths()` | Statically generated detail pages per project |
| `render()` | Renders Markdown body as HTML |
| Layouts + Slots | Reusable base layout with default slot and named slots |
| View Transitions (`ClientRouter`) | Animated page navigation transitions |
| `transition:name` | Shared element transitions between card and detail page |
| `transition:animate` | Per-element animation control in the layout |
| TypeScript Props | Strongly typed props across all components |


```
src/
├── components/
│   └── ProjectCard.astro       # Reusable project card component
├── content/
│   ├── config.ts               # Zod collection schema
│   └── projects/
│       ├── erp.md
│       └── trivial.md
├── layouts/
│   └── BaseLayout.astro        # Base layout 
├── pages/
│   ├── index.astro             # Home page
│   ├── AboutMe/
│   │   ├── index.astro         # About Me page
│   │   └── projects.astro      # Projects list
│   └── projects/
│       └── [slug].astro        # Dynamic project detail page
└── styles/
    └── global.css              # Tailwind import

