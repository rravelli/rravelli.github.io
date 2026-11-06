import { useTranslation } from "react-i18next";

const projects = [
	{
		id: "nantral",
		title: "Nantral Platform",
		stack: "Django, React",
		url: "https://nantral-platform.fr",
		github: "https://github.com/3cn-ecn/nantralPlatform",
	},
	{
		id: "inforeg",
		title: "Inforeg",
		stack: "Java",
		github: "https://github.com/Inky19/INFOREG",
	},
	{
		id: "quiz",
		title: "The Youtube Quiz",
		stack: "TypeScript",
		url: "https://theytquiz.vercel.app",
	},
];

function ProjectLink({ href, label }: { href: string; label: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-gray-300 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white transition-colors"
		>
			{label}
		</a>
	);
}

export default function ProjectsSection() {
	const { t } = useTranslation();
	return (
		<section id="projects" className="py-16 px-4 max-w-3xl mx-auto">
			<h2 className="text-2xl font-bold mb-6">{t("projects.title")}</h2>
			<ul className="divide-y divide-white/10">
				{projects.map((project) => (
					<li
						key={project.id}
						className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1"
					>
						<div>
							<h3 className="font-semibold">{project.title}</h3>
							<p className="text-sm text-gray-400">
								{t(`projects.list.${project.id}.description`)} ·{" "}
								{project.stack}
							</p>
						</div>
						<div className="flex shrink-0 gap-4 text-sm">
							{project.url && (
								<ProjectLink
									href={project.url}
									label={t("projects.live")}
								/>
							)}
							{project.github && (
								<ProjectLink
									href={project.github}
									label={t("projects.source")}
								/>
							)}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
