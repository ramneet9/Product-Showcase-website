export default function Home() {
	return (
		<div className="space-y-20">
			{/* Hero Section */}
			<section className="relative">
				<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2">
					<div>
						<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
							<span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
							Powering Homes. Supporting Lives.
						</p>
						<h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
							Reliable Power. Trusted Performance.
						</h1>
						<p className="mb-8 max-w-xl text-zinc-300 leading-relaxed">
							Radiance designs and manufactures dependable backup power solutions and heating components built for everyday Indian conditions. From home UPS systems to high-quality heating coils, our products deliver consistent performance when it matters most.
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
							alt="Radiance Products"
							className="h-full w-full object-cover"
							loading="eager"
							decoding="async"
						/>
					</div>
				</div>
			</section>

			{/* Supporting Lines Section */}
			<section className="mx-auto max-w-7xl px-4">
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div className="rounded-xl border border-white/10 bg-white/5 p-6">
						<div className="mb-3 h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
							<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<p className="text-zinc-300 leading-relaxed">
							Engineered backup battery and power systems for homes and small businesses
						</p>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-6">
						<div className="mb-3 h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
							<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<p className="text-zinc-300 leading-relaxed">
							Durable heating and theta coils designed for efficiency and longevity
						</p>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-6">
						<div className="mb-3 h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
							<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<p className="text-zinc-300 leading-relaxed">
							Practical designs, robust components, and uncompromising quality control
						</p>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-6">
						<div className="mb-3 h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
							<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
						</div>
						<p className="text-zinc-300 leading-relaxed">
							Made to perform in real-world voltage and usage conditions
						</p>
					</div>
				</div>
			</section>

			{/* Product Highlight Section */}
			<section className="mx-auto max-w-7xl px-4 py-12">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold md:text-4xl mb-4">Our Product Range</h2>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					<div className="rounded-xl border border-white/10 bg-white/5 p-8">
						<h3 className="text-xl font-semibold mb-3 text-white">Home UPS & Backup Battery Systems</h3>
						<p className="text-zinc-300 leading-relaxed">
							Stable power during outages
						</p>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-8">
						<h3 className="text-xl font-semibold mb-3 text-white">Inverter & Solar-Compatible Units</h3>
						<p className="text-zinc-300 leading-relaxed">
							Efficient, versatile energy solutions
						</p>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-8">
						<h3 className="text-xl font-semibold mb-3 text-white">Heating & Theta Coils</h3>
						<p className="text-zinc-300 leading-relaxed">
							Reliable heat output with long service life
						</p>
					</div>
				</div>
				<p className="text-center mt-8 text-zinc-300 max-w-3xl mx-auto leading-relaxed">
					Every Radiance product is built with a focus on safety, durability, and consistent output.
				</p>
			</section>
		</div>
	)
}
