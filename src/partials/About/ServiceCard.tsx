import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  icon: {
    src: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, icon, className, style }: Props) => {
  return (
    <div
      className={twMerge('w-full bg-white dark:bg-transparent rounded-3xl p-1 shadow-md opacity-0', className)}
      style={style}
    >
      <div className="flex h-72 flex-col items-center justify-evenly rounded-3xl px-12 py-5">
        <img src={icon.src} alt="web-development" width={64} height={64} className="object-contain" loading="lazy" />
        <h3 className="text-center text-xl font-bold text-foreground">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
