import { AppConfig } from '@/utils/AppConfig';

import { Section } from './Section';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        © Copyright {new Date().getFullYear()} by {AppConfig.site_name}. Built
        with ♥ by{' '}
        <a
          className="text-cyan-400 hover:underline"
          href="https://creativedesignsguru.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CreativeDesignsGuru
        </a>
        .
      </div>
    </div>
  </Section>
);

export { Footer };
