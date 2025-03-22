import About from "./components/About/About";
import Intro from "./components/Intro";
import Personalia from "./components/Personalia";
import Section from "./components/Section";
import { about } from "./data/data";

export default function Home() {
	return (
		<main className="flex flex-col mx-auto w-full">
			<div className="wrapper">
				<section className="text-stone-950 h-screen w-full sticky top-0">
					<Intro />
				</section>
				<section id="" className="text-stone-950 h-screen bg-white w-full sticky top-0">
					<div className="max-w-7xl justify-items-center mx-auto">
						<Personalia />
					</div>
				</section>
				{about.map((item, index) => (
					<Section
						key={index}
						className={`text-stone-950 h-screen w-full sticky top-0 ${
							index % 2 === 0 ? "bg-green-100" : "bg-stone-50"
						}`}
						// animationType={index % 2 === 0 ? "slideLeft" : "slideRight"}
						animationType={"none"}
						delay={0.2}
						fullHeight={true}
					>
						<div className="max-w-7xl h-screen items-center mx-auto">
							<About
								data={item}
								imageFirst={index % 2 === 1}
								title=""
								description=""
								imageSrc=""
								imageAlt=""
							/>
						</div>
					</Section>
				))}
			</div>
		</main>
	);
}
