import { motion, Variants } from "framer-motion";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../constants";
import { useTranslation } from "react-i18next";

const langs: { [l: string]: { name: string } } = {
	en: { name: "English" },
	fr: { name: "Français" },
};

export default function HeroSection() {
	const { t, i18n } = useTranslation();
	const color = "white";
	const item: Variants = {
		hidden: { opacity: 0, y: 50 },
		shown: { opacity: 1, y: 0 },
	};
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
			</div>
			<div className="absolute right-5 top-10 z-10 flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="currentColor"
					height={15}
				>
					<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
				</svg>
				<select
					value={i18n.resolvedLanguage}
					onChange={(e) => i18n.changeLanguage(e.currentTarget.value)}
					name="language"
					className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
				>
					{Object.keys(langs).map((key: any) => (
						<option
							className="bg-gray-900 text-gray-100 rounded-md"
							key={key}
							value={key}
						>
							{langs[key].name}
						</option>
					))}
				</select>
			</div>
			<div
				className="absolute h-full w-full"
				style={{
					background: `conic-gradient(from 90deg at 2px 2px, #0000 90deg,${color} 0), conic-gradient(from 90deg at 1px 1px, #0000 90deg,${color} 0)`,
					backgroundSize: "200px 200px, 40px 40px",
					opacity: 0.1,
				}}
			/>
			<div className="relative flex items-center pr-70">
				<motion.img
					initial={{
						y: 100,
						opacity: 0,
						scale: 0.9,
					}}
					animate={{
						y: 0,
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.8,
							delay: 0.4,
						},
					}}
					src="/showcase/images/profile.png"
					className="h-150 w-70 object-cover object-center"
					style={{
						filter: "drop-shadow(-10px 0 0px rgba(17,24,39,0.7)) drop-shadow(10px 0 0px rgba(17,24,39,0.7)) drop-shadow(10px 0 40px rgba(0,0,0,0.3))",
					}}
				/>
				<div className="z-10 text-center">
					<motion.h1
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
					>
						Rémi Ravelli
					</motion.h1>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg md:text-xl text-gray-300 mb-8 px-4"
					>
						{t("hero.title")}
					</motion.p>
					<motion.div
						initial={"hidden"}
						whileInView={"shown"}
						viewport={{ once: true }}
						transition={{
							duration: 0.6,
							delayChildren: 0.6,
							staggerChildren: 0.2,
						}}
						className="flex justify-center gap-6"
					>
						<motion.a
							href={GITHUB_URL}
							target="_blank"
							variants={item}
							rel="noopener noreferrer"
							className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
						>
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</motion.a>
						<motion.a
							href={LINKEDIN_URL}
							target="_blank"
							variants={item}
							rel="noopener noreferrer"
							className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
						>
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</motion.a>
						<motion.a
							href={`mailto:${EMAIL}`}
							target="_blank"
							rel="noopener noreferrer"
							variants={item}
							className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
						</motion.a>
					</motion.div>
				</div>
			</div>

			<motion.a
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				href="#projects"
				transition={{ duration: 0.8, delay: 0.8 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce hover:bg-gray-500/50 p-2 rounded-full">
					<svg
						className="w-6 h-6 text-gray-400 "
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</motion.a>
		</motion.section>
	);
}
