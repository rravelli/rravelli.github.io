import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const groups = [
	{
		id: "languages",
		skills: ["Rust", "Python", "TypeScript", "Java", "SQL", "Bash", "C++"],
	},
	{
		id: "backend",
		skills: [
			"Django",
			"Spring",
			"Node.js",
			"PostgreSQL",
			"Redis",
			"MongoDB",
			"SQLite",
			"Kafka",
		],
	},
	{ id: "infrastructure", skills: ["Docker", "Ansible", "Nginx", "Git"] },
	{ id: "frontend", skills: ["React", "Vue", "Next.js"] },
	{ id: "ml", skills: ["TensorFlow", "PyTorch"] },
];

export default function SkillsSection() {
	const { t } = useTranslation();
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-4xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold mb-10"
				>
					{t("skills.title")}
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{groups.map((group) => (
						<div key={group.id}>
							<h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
								{t(`skills.groups.${group.id}`)}
							</h3>
							<ul className="flex flex-wrap gap-2">
								{group.skills.map((skill) => (
									<li
										key={skill}
										className="px-3 py-1 bg-white/5 rounded-full"
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
