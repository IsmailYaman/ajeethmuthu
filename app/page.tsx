import About from "./components/About";
import Footer from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro";
import Personalia from "./components/Personalia";
import Section from "./components/Section";
import Skills from "./components/Skills/Skills";
import { about } from "./data/data";

export default function Home() {
	return (
		<main className="flex flex-col mx-auto w-full">
			<div className="wrapper">
				<div className="text-stone-950 bg-white h-screen w-full sticky hidden sm:block top-0">
					<Section animationType="slideLeft" className="w-full">
						<Intro />
					</Section>
				</div>
				<div id="home" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Section animationType="slideLeft" className="w-full">
							<Personalia />
						</Section>
					</div>
				</div>
				<div id="ervaring" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl flex items-center mx-auto">
						<Section animationType="slideLeft" className="w-full">
							<Experience />
						</Section>
					</div>
				</div>
				<div id="expertise" className="text-stone-950 sm:h-screen h-fit w-full bg-white sm:sticky sm:top-0">
					<div className="max-w-7xl flex items-center mx-auto">
						<Section animationType="slideLeft" className="w-full">
							<Skills />
						</Section>
					</div>
				</div>
				<div id="over-mij" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Section animationType="slideLeft" className="w-full">
							<About data={about[0]} imageFirst={false} />
						</Section>
					</div>
				</div>
				<div id="over-mij" className="text-stone-950 sm:h-screen h-fit bg-sky-100 w-full sm:sticky sm:top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Section animationType="slideLeft" className="w-full">
							<About data={about[1]} imageFirst={true} />
						</Section>
					</div>
				</div>
				<div id="over-mij" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Section animationType="slideLeft" className="w-full">
							<About data={about[2]} imageFirst={false} />
						</Section>
					</div>
				</div>
				<div
					id="contact"
					className="text-stone-950 overflow-hidden flex flex-col justify-center bg-sky-100 h-screen w-full sticky top-0"
				>
					<Section animationType="slideLeft" className="w-full" amount={0.5}>
						<Footer />
					</Section>
				</div>
			</div>
		</main>
	);
}

