import { AppConfig } from '@/utils/AppConfig';

import { Section } from './Section';

const Hero = () => (
  <Section>
    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
      <div>
        <h1 className="text-3xl font-bold">
          Hi there, I'm{' '}
          <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            {AppConfig.name}
          </span>{' '}
          👋
        </h1>

        <p className="mt-6 text-xl leading-9">{AppConfig.bio}</p>

        <div className="mt-3 flex gap-1">
          {Object.values(AppConfig.socials).map((social) =>
            social?.icon ? (
              <a href={social.link}>
                <img className="h-12 w-12 hover:translate-y-1" src={social.icon} alt={social.alt} loading="lazy" />
              </a>
            ) : null
          )}
        </div>
      </div>

      <div className="shrink-0">
        <img className="h-80 w-64" src="/assets/images/avatar.svg" alt="Avatar image" loading="lazy" />
      </div>
    </div>
  </Section>
);

export { Hero };
