 

export default function Home() {
	return (
		<section className="relative">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2">
				<div>
					<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
						<span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
						Modern. Professional. Immersive.
					</p>
					<h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
						Showcase your products in stunning 3D
					</h1>
					<p className="mb-8 max-w-xl text-zinc-300">
						Elevate your brand with interactive 3D visuals, smooth motion, and a premium feel. Built with React and Three.js.
					</p>
					<div className="flex gap-3">
						<a href="/products" className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500">
							Explore Products
						</a>
						<a href="/about" className="rounded-md border border-white/10 px-5 py-3 font-medium text-zinc-200 hover:bg-white/5">
							About Us
						</a>
					</div>
				</div>
					<div className="h-[560px] rounded-xl border border-white/10 bg-gradient-to-b from-blue-500/10 to-transparent overflow-hidden">
						<img
							src="/radiance_pages-to-jpg-0001.jpg"
							alt="Showcase"
							className="h-full w-full object-cover"
							loading="eager"
							decoding="async"
						/>
					</div>
			</div>
		</section>
	)
}
