import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        "w-full·rounded-3xl·bg-white·p-1·opacity-0·shadow-md·dark:bg-transparent",
        className,
      )}
      style={style}
    >
      <div className="flex h-72 flex-col items-center justify-evenly rounded-3xl px-12 py-5">
        <img
          src={icon.src}
          alt="web-development"
          width={64}
          height={64}
          className="object-contain"
          loading="lazy"
        />
        <h3 className="text-center·font-bold·text-foreground·text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
