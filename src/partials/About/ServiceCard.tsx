import { twMerge } from "tailwind-merge";
import { BackgroundGradient } from "../ui/BackgroundGradient";

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
				"w-full rounded-3xl p-1 opacity-0 shadow-md ",
				className,
			)}
			style={style}
		>
			<BackgroundGradient>
				<div className="flex h-72 flex-col items-center justify-evenly rounded-3xl px-12 py-5">
					<img
						src={icon.src}
						alt="web-development"
						width={64}
						height={64}
						className="object-contain"
						loading="lazy"
					/>
					<h3 className="text-center font-medium text-foreground text-white text-xl ">
						{title}
					</h3>
				</div>
			</BackgroundGradient>
		</div>
	);
};

export default ServiceCard;
