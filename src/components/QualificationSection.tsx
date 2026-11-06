import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const experience = ["dedomainia", "merica", "nantral", "ripple"];
const education = ["1", "2"];

function Timeline({ section, ids }: { section: string; ids: string[] }) {
	const { t } = useTranslation();
	return (
		<ol className="border-l-2 border-white/15 ml-1">
			{ids.map((id) => {
				const prefix = `qualification.${section}.list.${id}`;
				// Absent until the translation file has loaded.
				const details: unknown = t(`${prefix}.highlights`, {
					returnObjects: true,
				});
				return (
					<motion.li
						key={id}
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative pl-6 pb-10 last:pb-0"
					>
						<span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-blue-400" />
						<div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
							<h3 className="text-xl font-bold">
								{t(`${prefix}.title`)}
							</h3>
							<div className="text-gray-400 shrink-0 sm:pt-1">
								{t(`${prefix}.dates`)}
							</div>
						</div>
						<div className="text-gray-300">{t(`${prefix}.place`)}</div>
						{Array.isArray(details) && (
							<ul className="mt-3 list-disc pl-5 space-y-1 text-gray-300">
								{details.map((detail: string) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						)}
					</motion.li>
				);
			})}
		</ol>
	);
}

export default function QualificationSection() {
	const { t } = useTranslation();
	return (
		<section className="py-20 px-4 bg-gray-900/70">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-10">
					{t("qualification.experience.title")}
				</h2>
				<Timeline section="experience" ids={experience} />
				<h2 className="text-3xl md:text-4xl font-bold mt-16 mb-10">
					{t("qualification.education.title")}
				</h2>
				<Timeline section="education" ids={education} />
			</div>
		</section>
	);
}
