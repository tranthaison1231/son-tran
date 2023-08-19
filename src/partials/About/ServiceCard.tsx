interface Props {
  title: string;
  icon: string;
}

const ServiceCard = ({ title, icon }: Props) => {
  return (
    <div>
      <div className="w-full animate-fade-right rounded-[20px] p-[1px] shadow-sm">
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img src={icon} alt="web-development" width={64} height={64} className="object-contain" loading="lazy" />
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
