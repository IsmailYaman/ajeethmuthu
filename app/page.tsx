import About from "./components/About/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Personalia from "./components/Personalia";
import Section from "./components/Section";

export default function Home() {
	return (
		<main className="flex flex-col mx-auto w-full">
			<div className="wrapper">
				<section className="text-white  h-screen  w-full grid place-content-center sticky top-0">
					<Intro />
				</section>
				<section className="text-white  h-screen bg-white w-full  sticky top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Personalia />
					</div>
				</section>
				<section className="text-white  h-screen bg-white w-full  sticky top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<About />
					</div>
				</section>
			</div>
		</main>
	);
}
