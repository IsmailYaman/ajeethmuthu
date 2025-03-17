import About from "./components/About/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";

export default function Home() {
	return (
		<main className="flex flex-col mx-auto w-full max-w-6xl px-5">
			<Intro />
			<About />
            <Experience />
		</main>
	);
}
