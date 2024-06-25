import { useInView } from "react-intersection-observer";

import { AppConfig, Services } from "@/utils/app-config";

import ServiceCard from "./ServiceCard";

const About = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<div ref={ref} className="mx-auto max-w-7xl text-foreground">
			<div className={inView ? "animate-fade-down" : ""}>
				<p className="text-base uppercase tracking-wider sm:text-xl">
					Introduction
				</p>
				<h2 className="text-3xl font-black sm:text-5xl md:text-6xl">
					Overview.
				</h2>
				<p className="mt-4 max-w-3xl text-base leading-7 text-foreground/90">
					{AppConfig.bio}
				</p>
			</div>
			<div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
				{Services.map((service, index) => (
					<ServiceCard
						key={service.title}
						{...service}
						className={inView ? "animate-fade-right" : ""}
						style={{
							animationDelay: `${(index + 1) * 0.3}s`,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default About;
