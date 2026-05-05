import { motion } from 'framer-motion';

const nscImages = [
	{
		src: '/assets/NSC/NSC.png',
		alt: 'National Software Competition poster',
		className: 'md:col-span-7 md:row-span-8',
	},
	{
		src: '/assets/NSC/WhatsApp%20Image%202026-05-05%20at%2012.55.56.jpeg',
		alt: 'NSC participant moment 1',
		className: 'md:col-span-5 md:row-span-4',
	},
	// {
	// 	src: '/assets/NSC/nsc%20presentation%20.png',
	// 	alt: 'NSC presentation highlight',
	// 	className: 'md:col-span-5 md:row-span-4',
	// },
	// {
	// 	src: '/assets/NSC/WhatsApp%20Image%202026-05-05%20at%2012.55.57%20(2).jpeg',
	// 	alt: 'NSC participant moment 4',
	// 	className: 'md:col-span-3 md:row-span-4',
	// },
	{
		src: '/assets/NSC/WhatsApp%20Image%202026-05-05%20at%2012.55.57%20(3).jpeg',
		alt: 'NSC participant moment 5',
		className: 'md:col-span-4 md:row-span-4',
	},
];

export default function Slide56() {
	return (
		<div className="slide-base gradient-mesh">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="w-full h-full px-3 py-3 md:px-6 md:py-6"
			>
				<div className="grid h-full grid-cols-2 md:grid-cols-12 auto-rows-[minmax(72px,1fr)] gap-3 md:gap-4">
					{nscImages.map((image, index) => (
						<motion.div
							key={image.src}
							initial={{ opacity: 0, y: 14, scale: 0.97 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: 0.12 + index * 0.05, duration: 0.4 }}
							className={`group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_16px_36px_rgba(0,0,0,0.11)] ${image.className}`}
						>
							<img
								src={image.src}
								alt={image.alt}
								loading="lazy"
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}
