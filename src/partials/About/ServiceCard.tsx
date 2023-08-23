interface Props {
  title: string;
  icon: {
    src: string;
  };
}

const ServiceCard = ({ title, icon }: Props) => {
  return (
    <div>
      <div className="w-full rounded-3xl p-1 shadow-md">
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-3xl px-12 py-5">
          <img src={icon.src} alt="web-development" width={64} height={64} className="object-contain" loading="lazy" />
          <h3 className="text-center text-xl font-bold text-foreground">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
