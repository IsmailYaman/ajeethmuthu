import About from "./components/About/About";
import Intro from "./components/Intro";

export default function Home() {
	return (
		<main className="flex flex-col">
			<Intro />
			<About />
            
		</main>
	);
}
