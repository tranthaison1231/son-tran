import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const CategoriesColors = {
  TypeScript: ColorTags.BLUE,
  React: ColorTags.PURPLE,
  Next: ColorTags.PINK,
  Astro: ColorTags.YELLOW,
  Tailwind: ColorTags.GREEN,
  Svelte: ColorTags.RED,
  Node: ColorTags.ORANGE,
  'Frontend-Developer': ColorTags.CYAN,
  AWS: ColorTags.FUCHSIA,
  Mapbox: ColorTags.INDIGO,
  'Circle CI': ColorTags.LIME,
};

type CategoriesColorsKey = keyof typeof CategoriesColors;

export const Projects = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {AppConfig.projects.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          img={project.img}
          category={project.categories.map((category) => (
            <Tags
              color={CategoriesColors[category as CategoriesColorsKey]}
              key={category}
            >
              {category}
            </Tags>
          ))}
        />
      ))}
    </div>
  </Section>
);
