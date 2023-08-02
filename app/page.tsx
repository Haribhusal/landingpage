import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Particles from "@/components/particles";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
			<Particles
				className="absolute inset-0 z-0 animate-fade-in"
				quantity={100}
			/>
			<div className="inline-block max-w-lg text-center justify-center">

				
			<h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-7xl whitespace-nowrap bg-clip-text ">
				Hari Bhusal
				</h1>
				
				<h1 className={title()}>Build&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Online Presence&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Better, with Hari Bhusal
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Professional Frontend Developer | Wordpress Developer
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Projects
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					
					Contact
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Planning to start a project? <Code color="primary" className="via-violet-600">Request for quotation</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
