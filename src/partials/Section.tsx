import type { ReactNode } from 'react';

type Props = {
  title?: ReactNode;
  children: ReactNode;
};

const Section = ({ title, children }: Props) => (
  <div className="mx-auto max-w-screen-lg px-3 py-6">
    {title && <div className="mb-6 text-2xl font-bold">{title}</div>}
    {children}
  </div>
);

export { Section };
