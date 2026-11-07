import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TONIQUE_SCREENSHOT_URL, TONIQUE_SITE_URL, TONIQUE_URL } from "../constants";

const STACK = ["Rust", "egui / eframe", "cpal", "Symphonia", "rustfft", "Signalsmith Stretch"];

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
				<span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full">
					{t("tonique.mainProject")}
				</span>
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
				<p className="text-sm text-gray-400 mb-3">{t("tonique.stackLabel")}</p>
				<ul className="flex flex-wrap gap-2 mb-8">
					{STACK.map((tech) => (
						<li
							key={tech}
							className="px-3 py-1 text-sm font-mono text-gray-200 bg-white/5 border border-white/10 rounded-md"
						>
							{tech}
						</li>
					))}
				</ul>
				<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
					<a
						href={TONIQUE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 text-center font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
					>
						{t("tonique.source")}
					</a>
					<a
						href={TONIQUE_SITE_URL}
						className="text-center text-gray-300 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white transition-colors"
					>
						{t("tonique.learnMore")}
					</a>
				</div>
			</motion.div>

			<motion.img
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				src={TONIQUE_SCREENSHOT_URL}
				alt={t("tonique.imageAlt")}
				width={1625}
				height={1013}
				loading="lazy"
				className="mt-10 w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-blue-900/30"
			/>

		</section>
	);
}
