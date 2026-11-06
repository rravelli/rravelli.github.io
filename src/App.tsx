import HeroSection from "./components/HeroSection";
import ToniqueSection from "./components/ToniqueSection";
import QualificationSection from "./components/QualificationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<ToniqueSection />
			<QualificationSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
