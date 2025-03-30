import About from "./components/About";
import Footer from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro";
import Personalia from "./components/Personalia";
import Skills from "./components/Skills/Skills";
import { about } from "./data/data";

export default function Home() {
	return (
		<main className="flex flex-col mx-auto w-full">
			<div className="wrapper">
				<section className="text-stone-950 bg-white h-screen w-full sticky hidden sm:block top-0">
					<Intro />
				</section>
				<section id="home" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Personalia />
					</div>
				</section>
				<section id="ervaring" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl flex items-center mx-auto">
						<Experience />
					</div>
				</section>
				<section id="expertise" className="text-stone-950 sm:h-screen lg:h-fit bg-red-200 w-full sm:sticky sm:top-0">
					<div className="max-w-7xl flex items-center mx-auto">
						<Skills />
					</div>
				</section>
				<section id="over-mij" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<About data={about[0]} imageFirst={false} />
					</div>
				</section>
				<section
					id="over-mij"
					className="text-stone-950 sm:h-screen h-fit bg-sky-100 w-full sm:sticky sm:top-0"
				>
					<div className="max-w-7xl justify-items-center mx-auto">
						<About data={about[1]} imageFirst={true} />
					</div>
				</section>
				<section id="over-mij" className="text-stone-950 sm:h-screen h-fit bg-white w-full sm:sticky sm:top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<About data={about[2]} imageFirst={false} />
					</div>
				</section>
				<section
					id="contact"
					className="text-stone-950 overflow-hidden flex flex-col justify-center bg-sky-100 h-screen w-full sticky top-0"
				>
					<Footer />
				</section>
			</div>
		</main>
	);
}
