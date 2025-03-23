import ScrollBaseAnimation from "@/components/motion/ScrollBasedAnimation";
import About from "./components/About";
import Footer from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro";
import Personalia from "./components/Personalia";
import Section from "./components/Section";
import Skills from "./components/Skills";
import { about } from "./data/data";

export default function Home() {
	return (
		<main className="flex flex-col mx-auto w-full">
			<div className="wrapper">
				<section className="text-stone-950 h-screen w-full sticky top-0">
					<Intro />
				</section>
				<section className="text-stone-950 h-screen bg-white w-full sticky top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Personalia />
					</div>
				</section>
				{about.map((item, index) => (
					<Section
						key={index}
						className={`text-stone-950 justify-items-center h-screen w-full sticky top-0 ${
							index % 2 === 0 ? "bg-green-100" : "bg-white"
						}`}
						animationType={"none"}
						delay={0.2}
						fullHeight={true}
					>
						<div className="max-w-7xl flex items-center h-screen mx-auto p-4">
							<About data={item} imageFirst={index % 2 === 1} />
						</div>
					</Section>
				))}
				<section className="text-stone-950 bg-white w-full sticky top-0">
					<div className="max-w-7xl flex items-center mx-auto">
						<Experience />
					</div>
				</section>
				<section className="text-stone-950 bg-white w-full sticky top-0">
					<div className="max-w-7xl flex items-center mx-auto">
						<Skills />
					</div>
				</section>
				<section className="text-stone-950 overflow-hidden flex flex-col justify-center bg-green-100 h-screen w-full sticky top-0">
					<Footer />
				</section>
			</div>
		</main>
	);
}
