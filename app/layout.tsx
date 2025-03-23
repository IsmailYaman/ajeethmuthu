import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ajeeth Muthu | Portfolio",
	description: "Ajeeth Muthu's portfolio website",
	creator: "Ismail Kayadelen @YAMOTION",
	keywords: "Ajeeth Muthu, Portfolio, Developer, Data Scientist, Data Engineer, Data Steward, Business Analyst",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.variable}>
			<head>
				<meta name="apple-mobile-web-app-title" content="AjeethMuthu" />
				<meta name="application-name" content="AjeethMuthu" />
			</head>
			<body className="font-poppins bg-white">
				<Navigation />
				{children}
			</body>
		</html>
	);
}
