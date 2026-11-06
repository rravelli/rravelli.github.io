import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TONIQUE_DOWNLOAD_URL, TONIQUE_URL } from "../constants";

const steps = ["arrange", "mix", "finish"];

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
						src="/showcase/images/tonique-logo.svg"
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
						href={TONIQUE_DOWNLOAD_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 text-center font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
					>
						{t("tonique.download")}
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
				src="/showcase/images/tonique.png"
				alt={t("tonique.imageAlt")}
				width={1625}
				height={1013}
				loading="lazy"
				className="mt-10 w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-blue-900/30"
			/>

			<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
				{steps.map((step) => (
					<div key={step}>
						<h3 className="text-lg font-bold mb-1">
							{t(`tonique.steps.${step}.title`)}
						</h3>
						<p className="text-gray-300">
							{t(`tonique.steps.${step}.description`)}
						</p>
					</div>
				))}
			</div>

			<div className="mt-10 pt-10 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
				<div>
					<h3 className="text-lg font-bold mb-1">
						{t("tonique.performance.title")}
					</h3>
					<p className="text-gray-300">
						{t("tonique.performance.description")}
					</p>
				</div>
				<div>
					<h3 className="text-lg font-bold mb-1">
						{t("tonique.openSource.title")}
					</h3>
					<p className="text-gray-300">
						{t("tonique.openSource.description")}
					</p>
				</div>
			</div>
		</section>
	);
}
