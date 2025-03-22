import About from "./components/About/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Personalia from "./components/Personalia";
import Section from "./components/Section";

export default function Home() {
	return (
		<main className="flex flex-col mx-auto w-full">
			<Intro />
			<div className="max-w-7xl justify-items-center mx-auto">
				<Personalia />
				<About />
				<Experience />
			</div>
		</main>
	);
}
