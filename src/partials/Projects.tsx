import { AppConfig } from '@/utils/AppConfig';

import { Section } from './Section';

const CategoriesColors = {
  TypeScript: 'bg-blue-400 text-blue-900',
  React: 'bg-purple-400 text-purple-900',
  Next: 'bg-pink-400 text-pink-900',
  Astro: 'bg-yellow-400 text-yellow-900',
  Tailwind: 'bg-green-400 text-green-900',
  Svelte: 'bg-red-400 text-red-900',
  Node: 'bg-indigo-400 text-indigo-900',
  'Frontend-Developer': 'bg-blue-400 text-blue-900',
  AWS: 'bg-yellow-400 text-yellow-900',
  Mapbox: 'bg-sky-400 text-sky-900',
  'Circle CI': 'bg-lime-400 text-lime-900',
};

type CategoriesColorsKey = keyof typeof CategoriesColors;

export const Projects = () => (
  <Section
    title={
      <>
        Recent{' '}
        <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {AppConfig.projects.map((project) => (
        <div key={project.name} className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
          <div className="shrink-0">
            <a href={project.link}>
              <img
                className="h-36 w-36 object-contain hover:translate-y-1"
                src={project.img.src}
                alt={project.img.alt}
                loading="lazy"
              />
            </a>
          </div>

          <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
              <a className="hover:text-cyan-400" href={project.link}>
                <div className="text-xl font-semibold">{project.name}</div>
              </a>

              <div className="ml-3 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <div
                    key={category}
                    className={`rounded-md px-2 py-1 text-xs font-semibold ${
                      CategoriesColors[category as CategoriesColorsKey]
                    }`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-gray-400">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
