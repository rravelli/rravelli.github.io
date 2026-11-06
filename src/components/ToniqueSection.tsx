import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TONIQUE_SITE_URL, TONIQUE_URL } from "../constants";

export default function ToniqueSection() {
	const { t } = useTranslation();
	return (
		<section id="tonique" className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="max-w-4xl"
			>
				<div className="flex items-center gap-3 mb-5">
					<img
						src="/images/tonique-logo.svg"
						alt=""
						width={44}
						height={44}
						className="h-11 w-11"
					/>
					<span className="text-2xl font-bold">Tonique</span>
				</div>
				<h2 className="text-4xl md:text-6xl font-bold leading-tight text-balance mb-5">
					{t("tonique.headline")}
				</h2>
				<p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl">
					{t("tonique.description")}
				</p>
				<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
					<a
						href={`${TONIQUE_SITE_URL}download/`}
						className="px-6 py-3 text-center font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
					>
						{t("tonique.download")}
					</a>
					<a
						href={TONIQUE_SITE_URL}
						className="text-center text-gray-300 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white transition-colors"
					>
						{t("tonique.learnMore")}
					</a>
					<a
						href={TONIQUE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="text-center text-gray-300 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white transition-colors"
					>
						{t("tonique.source")}
					</a>
				</div>
			</motion.div>

			<motion.img
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				src="/images/tonique.webp"
				alt={t("tonique.imageAlt")}
				width={3250}
				height={2025}
				loading="lazy"
				className="mt-10 w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-blue-900/30"
			/>

		</section>
	);
}
