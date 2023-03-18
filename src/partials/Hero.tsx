import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>{AppConfig.name}</GradientText> 👋
        </>
      }
      description={AppConfig.bio}
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {Object.values(AppConfig.socials).map((social) =>
            social?.icon ? (
              <a href={social.link}>
                <HeroSocial src={social.icon} alt={social.alt} />
              </a>
            ) : null
          )}
        </>
      }
    />
  </Section>
);

export { Hero };
